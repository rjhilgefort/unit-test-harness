import { curry } from 'ramda';
import { testCaseToString } from './lib';
import { Args, Expect, Fn } from './types/types';

const unitTestHarness = curry(
  (expect: Expect, fn: Fn, args: Args, expected: any) => {
    it(testCaseToString({ args, expected }), () =>
      expect(fn(...args)).toEqual(expected),
    );
  },
);

export default unitTestHarness;
