import { compose, evolve, map } from 'ramda';
import format from './format';
import stringify from './stringify';

interface TestCase {
  args: any[];
  expected: any;
}
type TestCaseToString = (testCase: TestCase) => string;
export const testCaseToString: TestCaseToString = compose(
  format('({args}) => {expected}'),
  evolve({
    args: map(stringify),
    expected: stringify,
  }),
);

export default testCaseToString;
