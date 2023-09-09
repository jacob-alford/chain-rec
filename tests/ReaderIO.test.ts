import * as RIO from 'fp-ts/ReaderIO'

import { ChainRec } from '../src/ReaderIO'
import { fib100, testFibM } from '../test-utils/test-utils'

describe('ReaderIO > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, RIO.Pointed, test)
    const result = runTest(100n)('')()
    expect(result).toStrictEqual(fib100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
