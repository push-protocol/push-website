/* eslint-disable @docusaurus/no-html-links */
/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable no-useless-escape */
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

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

const extractText = (node) => {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (Array.isArray(node.children)) {
    return node.children.map(extractText).join('');
  }
  if (typeof node.value === 'string') return node.value;
  return node.children ? extractText(node.children) : '';
};

// Normalize whitespace and remove indentation
const normalizeMarkdown = (str) =>
  str
    .split('\n')
    .map((line) => line.trimStart())
    .join('\n')
    .trim();

const flattenTextContent = (contentArray) => {
  const result = [];

  contentArray.forEach((item) => {
    if (item.type === 'text' && typeof item.value === 'string') {
      result.push(normalizeMarkdown(item.value));
    } else if (item.type === 'indexlist' && Array.isArray(item.value)) {
      result.push(...flattenTextContent(item.value));
    }
  });

  return result;
};

const cleanHeadingText = (text) => {
  return text.replace(/^\d+[\.\)]\s*/, ''); // Remove "1. ", "2) ", etc.
};

export const extractTOC = (contentArray) => {
  if (!Array.isArray(contentArray)) {
    console.error('❌ extractTOC received invalid contentArray:', contentArray);
    return [];
  }

  const markdownContent = flattenTextContent(contentArray)
    .filter((str) => str.trim() !== '')
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
      const rawText = extractText(node).trim();
      const text = cleanHeadingText(rawText);
      const id = generateIdFromText(text);
      const level = parseInt(node.tagName.charAt(1), 10);

      if (text) {
        toc.push({ text, id, level });
      }
    }
  });

  return toc;
};
