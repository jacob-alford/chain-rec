import * as E from 'fp-ts/Either'
import * as RTE from 'fp-ts/ReaderTaskEither'

import { ChainRec } from '../src/ReaderTaskEither'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('ReaderTaskEither > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, RTE.Pointed, test)
    const result = await runTest(100n)('')()
    expect(result).toStrictEqual(E.right(fact100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(RTE.MonadThrow, ChainRec, test)
    const result = await runTest('')()
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
