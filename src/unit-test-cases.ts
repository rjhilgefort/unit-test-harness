import { apply, curry, map } from 'ramda';
import { Cases, Expect, Fn } from './types/types';
import unitTestHarness from './unit-test-harness';

const unitTestCases = curry((expect: Expect, fn: Fn, cases: Cases) => {
  map(apply(unitTestHarness(expect, fn)))(cases);
});

export default unitTestCases;
