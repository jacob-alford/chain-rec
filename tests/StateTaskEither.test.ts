import * as E from 'fp-ts/Either'
import * as STE from 'fp-ts-contrib/StateTaskEither'

import { ChainRec } from '../src/StateTaskEither'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('StateTaskEither > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, { URI: STE.URI, of: STE.of }, test)
    const result = await runTest(100n)('')()
    expect(result).toStrictEqual(E.right([fact100, expect.anything()]))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(
      { ...STE.Monad, throwError: STE.left },
      ChainRec,
      test,
    )
    const result = await runTest('')()
    expect(result).toStrictEqual(E.left('short circuit'))
    expect(test).toHaveBeenCalledTimes(1)
  })
})
