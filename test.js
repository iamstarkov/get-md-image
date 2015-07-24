import { equal } from 'assert';
import getImage from './index';

const input = `
# title

description ![alt](src)
`.trim();

it('should getImage alt', () => {
  equal(getImage(input).alt, 'alt');
});

it('should getImage src', () => {
  equal(getImage(input).src, 'src');
});

it('should getImage empty alt', () => {
  equal(getImage('').alt, undefined);
});

it('should getImage empty src', () => {
  equal(getImage('').src, undefined);
});
