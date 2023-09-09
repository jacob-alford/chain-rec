import * as St from 'fp-ts/State'

import { ChainRec } from '../src/State'
import { fib100, testFibM } from '../test-utils/test-utils'

describe('State > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, St.Pointed, test)
    const [result] = runTest(100n)('')
    expect(result).toStrictEqual(fib100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
