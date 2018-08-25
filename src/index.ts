import expect from 'expect';
import agnosticUnitTestCases from './unit-test-cases';
import agnosticUnitTestHarness from './unit-test-harness';

// TODO: I really don't love these names. I think the proper
//       solution would be to not have `expect` in this repo
//       and instead create `unit-test-harness-jest` or something.
//       ... I really don't want to maintain that though. I only need
//       the Jest stuff.

export { agnosticUnitTestHarness };
export { agnosticUnitTestCases };

export const unitTestHarness = agnosticUnitTestHarness(expect);
export const unitTestCases = agnosticUnitTestCases(expect);
