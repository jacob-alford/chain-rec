import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'

import { ChainRec } from '../src/TaskEither'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('TaskEither > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, TE.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(E.right(fact100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(TE.MonadThrow, ChainRec, test)
    const result = await runTest()
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
