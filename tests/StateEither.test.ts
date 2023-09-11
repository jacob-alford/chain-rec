import * as E from 'fp-ts/Either'
import * as SE from 'fp-ts-contrib/StateEither'

import { ChainRec } from '../src/StateEither'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('StateEither > chainRec', () => {
  it('calculates large factorials', () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, { URI: SE.URI, of: SE.of }, test)
    const result = runTest(100n)('')
    expect(result).toStrictEqual(E.right([fact100, expect.anything()]))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(SE.MonadThrow, ChainRec, test)
    const result = runTest('')
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
