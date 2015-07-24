import { equal } from 'assert';
import getImage from './index';

const input = `
# title

description ![meow](http://placekitten.com/g/300)
`.trim();

it('should getImage alt', () => {
  equal(getImage(input).alt, 'meow');
});

it('should getImage src', () => {
  equal(getImage(input).src, 'http://placekitten.com/g/300');
});

it('should getImage html', () => {
  equal(getImage(input).html, '<img src="http://placekitten.com/g/300" alt="meow" />');
});

it('should getImage undefined alt', () => {
  equal(getImage('').alt, undefined);
});

it('should getImage undefined src', () => {
  equal(getImage('').src, undefined);
});

it('should getImage undefined html', () => {
  equal(getImage('').html, undefined);
});
