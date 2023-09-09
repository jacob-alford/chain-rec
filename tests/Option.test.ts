import * as O from 'fp-ts/Option'

import { ChainRec } from '../src/Option'
import { fib100, testFibM, testShortCircuitM } from '../test-utils/test-utils'

describe('Option > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, O.Pointed, test)
    const result = runTest(100n)
    expect(result).toStrictEqual(O.some(fib100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const result = testShortCircuitM(O.MonadThrow, ChainRec, test)
    expect(result).toStrictEqual(O.none)
    expect(test).toHaveBeenCalledTimes(1)
  })
})
