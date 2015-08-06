import { text, html, match, isImage } from 'commonmark-helpers';

export default input => {
  const node = match(input, isImage);
  if (!node) return;
  return {
    alt: text(node),
    src: node.destination,
    html: html(node),
    node
  };
};
