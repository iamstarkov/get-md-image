import { text, html, match, isImage } from 'commonmark-helpers';

const result = node => ({
  alt: text(node),
  src: node.destination,
  html: html(node),
  node
});

export default input => {
  const image = match(input, isImage);
  if (!image) {
    return {};
  }
  return result(image);
};
