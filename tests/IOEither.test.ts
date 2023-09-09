import * as E from 'fp-ts/Either'
import * as IOE from 'fp-ts/IOEither'

import { ChainRec } from '../src/IOEither'
import { fib100, testFibM, testShortCircuitM } from '../test-utils/test-utils'

describe('IOEither > chainRec', () => {
  it('calculates large factorials', () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, IOE.Pointed, test)
    const result = runTest(100n)()
    expect(result).toStrictEqual(E.right(fib100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(IOE.MonadThrow, ChainRec, test)
    const result = runTest()
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
