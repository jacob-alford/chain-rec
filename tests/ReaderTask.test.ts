import * as RT from 'fp-ts/ReaderTask'

import { ChainRec } from '../src/ReaderTask'
import { fib100, testFibM } from '../test-utils/test-utils'

describe('ReaderTask > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, RT.Pointed, test)
    const result = await runTest(100n)('')()
    expect(result).toStrictEqual(fib100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
