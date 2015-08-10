import { equal } from 'assert';
import getImage from './index';

const input = `
# title

description ![meow](http://placekitten.com/g/300)`;

it('should getImage alt', () =>
  equal(getImage(input).alt, 'meow'));

it('should getImage src', () =>
  equal(getImage(input).src, 'http://placekitten.com/g/300'));

it('should getImage html', () =>
  equal(getImage(input).html, '<img src="http://placekitten.com/g/300" alt="meow" />'));

it('should getImage undefined', () =>
  equal(getImage(''), undefined));
