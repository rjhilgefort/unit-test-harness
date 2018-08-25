import { apply, curry, map } from 'ramda';
import { Cases, Expect, Fn } from './types/types';
import unitTestHarness from './unit-test-harness';

// TODO: `Cases` should be made to accept a type for the result of each case
// TODO: The type argument for `expect` should be updated to reflect
//       that the type of `expected` should match what's fed into `Cases`

const unitTestCases = curry((expect: Expect<any>, fn: Fn, cases: Cases) => {
  map(apply(unitTestHarness(expect, fn)))(cases);
});

export default unitTestCases;
