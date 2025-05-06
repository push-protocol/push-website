// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

// Function to extract text from nodes
const extractText = (node) => {
  if (!node) return '';
  if (node.type === 'text') return node.value;
  if (node.type === 'element' && node.children) {
    return node.children.map(extractText).join('');
  }
  return '';
};

// Function to generate an ID from the heading text
const generateIdFromText = (text) => {
  return (
    'user-content-' +
    text
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+$/, '')
  ); // Remove trailing hyphen if any
};

export const extractTOC = (contentArray) => {
  if (!Array.isArray(contentArray)) {
    console.error('❌ extractTOC received invalid contentArray:', contentArray);
    return [];
  }

  // Extract markdown content (NO stripping!)
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

  // Ensure remark plugins handle markdown properly
  const processor = unified()
    .use(remarkParse) // Parse Markdown to AST
    .use(remarkRehype) // Convert to HTML AST
    .use(rehypeSlug) // Add slugs to headings
    .use(rehypeStringify); // Convert back to string for debugging

  const tree = processor.runSync(processor.parse(markdownContent));

  // Traverse the AST and look for headings
  visit(tree, 'element', (node) => {
    // Handle entering/exiting code blocks
    if (node.tagName === 'pre') {
      insideCodeBlock = true;
    } else if (insideCodeBlock && node.tagName !== 'code') {
      insideCodeBlock = false;
    }

    // Process only headings (h1-h6)
    if (node.tagName && /^h[1-6]$/.test(node.tagName) && !insideCodeBlock) {
      const text = extractText(node).trim(); // Extract heading text
      const id = generateIdFromText(text); // Generate ID from text

      // Add to TOC if text exists
      if (text) {
        toc.push({ text, id });
      }
    }

    // If inside a code block, handle headers within it
    if (insideCodeBlock && node.tagName === 'code') {
      const codeContent = extractText(node);
      // Look for headers (e.g., "### Heading") inside the code content
      const headerMatches = codeContent.match(/###\s*(.*)/g);
      if (headerMatches) {
        headerMatches.forEach((match) => {
          const text = match.replace(/(#+|\*)/g, '').trim(); // Clean the text
          const id = generateIdFromText(text); // Generate ID from text
          toc.push({ text, id });
        });
      }
    }
  });

  return toc;
};
