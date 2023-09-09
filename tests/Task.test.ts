import * as T from 'fp-ts/Task'

import { ChainRec } from '../src/Task'
import { fib100, testFibM } from '../test-utils/test-utils'

describe('Task > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, T.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(fib100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
