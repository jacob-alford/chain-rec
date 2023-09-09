import * as O from 'fp-ts/Option'
import * as TO from 'fp-ts/TaskOption'

import { ChainRec } from '../src/TaskOption'
import { fib100, testFibM, testShortCircuitM } from '../test-utils/test-utils'

describe('TaskOption > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, TO.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(O.some(fib100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(
      { ...TO.Monad, throwError: () => TO.none },
      ChainRec,
      test,
    )
    const result = await runTest()
    expect(result).toStrictEqual(O.none)
    expect(test).toHaveBeenCalledTimes(1)
  })
})
