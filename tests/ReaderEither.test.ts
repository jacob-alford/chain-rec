import * as E from 'fp-ts/Either'
import * as RE from 'fp-ts/ReaderEither'

import { ChainRec } from '../src/ReaderEither'
import { fib100, testFibM, testShortCircuitM } from '../test-utils/test-utils'

describe('ReaderEither > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, RE.Pointed, test)
    const result = runTest(100n)('')
    expect(result).toStrictEqual(E.right(fib100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(RE.MonadThrow, ChainRec, test)
    const result = runTest('')
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
