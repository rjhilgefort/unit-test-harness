import expect from 'expect';
import unitTestHarnessMain from './unit-test-harness';
import unitTestCasesMain from './unit-test-cases';

export const unitTestHarness = unitTestHarness(expect);
export const unitTestCases = unitTestCases(expect);
