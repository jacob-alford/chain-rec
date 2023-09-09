import * as R from 'fp-ts/Reader'

import { ChainRec } from '../src/Reader'
import { fib100, testFibM } from '../test-utils/test-utils'

describe('Reader > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, R.Pointed, test)
    const result = runTest(100n)('')
    expect(result).toStrictEqual(fib100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
