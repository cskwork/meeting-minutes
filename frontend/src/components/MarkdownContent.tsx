import React from 'react';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

// Renders Markdown as React elements. No rehype-raw plugin is used, so raw HTML
// in the content is shown as text instead of being parsed, and link/image URLs
// go through react-markdown's safe-protocol filter.
const MarkdownContent = ({ content }: MarkdownContentProps) => (
  <div>
    <ReactMarkdown urlTransform={defaultUrlTransform}>{content}</ReactMarkdown>
  </div>
);

export default MarkdownContent;
