/* eslint-disable @docusaurus/no-html-links */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

const extractText = (node) => {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (node.type === 'element' && node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
};

const generateIdFromText = (text) => {
  return (
    'user-content-' +
    text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+$/, '')
  );
};

export const extractTOC = (contentArray) => {
  if (!Array.isArray(contentArray)) {
    console.error('❌ extractTOC received invalid contentArray:', contentArray);
    return [];
  }

  const markdownContent = contentArray
    .filter((item) => item.type === 'text' && item.value.trim() !== '')
    .map((item) => item.value)
    .join('\n\n');

  if (!markdownContent.trim()) {
    console.warn('⚠️ No markdown content available.');
    return [];
  }

  const toc = [];
  let insideCodeBlock = false;

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify);

  const tree = processor.runSync(processor.parse(markdownContent));

  visit(tree, 'element', (node) => {
    if (node.tagName === 'pre') {
      insideCodeBlock = true;
    } else if (insideCodeBlock && node.tagName !== 'code') {
      insideCodeBlock = false;
    }

    if (node.tagName && /^h[1-6]$/.test(node.tagName) && !insideCodeBlock) {
      const text = extractText(node).trim();
      const id = generateIdFromText(text);
      const level = parseInt(node.tagName.charAt(1), 10);

      if (text) {
        toc.push({ text, id, level });
      }
    }

    if (insideCodeBlock && node.tagName === 'code') {
      const codeContent = extractText(node);
      const headerMatches = codeContent.match(/###\s*(.*)/g);
      if (headerMatches) {
        headerMatches.forEach((match) => {
          const text = match.replace(/(#+|\*)/g, '').trim();
          const id = generateIdFromText(text);
          toc.push({ text, id, level: 3 });
        });
      }
    }
  });

  return toc;
};
