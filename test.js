import { equal } from 'assert';
import getMdImage from './index';

it('should getMdImage', () => {
  equal(getMdImage('unicorns'), 'unicorns');
});
