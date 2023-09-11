import * as E from 'fp-ts/Either'
import * as SRTE from 'fp-ts/StateReaderTaskEither'

import { ChainRec } from '../src/StateReaderTaskEither'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('StateReaderTaskEither > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, SRTE.Pointed, test)
    const result = await runTest(100n)('')('')()
    expect(result).toStrictEqual(E.right([fact100, expect.anything()]))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(SRTE.MonadThrow, ChainRec, test)
    const result = await runTest('')('')()
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
