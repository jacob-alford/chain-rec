import * as O from 'fp-ts/Option'
import * as TO from 'fp-ts/TaskOption'

import { ChainRec } from '../src/TaskOption'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('TaskOption > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, TO.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(O.some(fact100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(
      { ...TO.Monad, throwError: () => TO.none },
      ChainRec,
      test,
    )
    const result = await runTest()
    expect(result).toStrictEqual(O.none)
    expect(test).toHaveBeenCalledTimes(1)
  })
})
