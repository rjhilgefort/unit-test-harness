import expect from 'expect';
import unitTestCasesMain from '../unit-test-cases';
import unitTestHarnessMain from '../unit-test-harness';

export const unitTestHarness = unitTestHarnessMain(expect);
export const unitTestCases = unitTestCasesMain(expect);
