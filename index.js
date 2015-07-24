import { text, match, isImage } from 'commonmark-helpers';

const result = node => ({
  alt: text(node),
  src: node.destination,
  node
});

export default input => {
  const image = match(input, isImage);
  if (!image) {
    let alt, src, node;
    return { alt, src, node };
  }
  return result(image);
};
