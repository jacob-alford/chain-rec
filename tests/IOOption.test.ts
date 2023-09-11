import * as IOO from 'fp-ts/IOOption'
import * as O from 'fp-ts/Option'

import { ChainRec } from '../src/IOOption'
import { fact100, testFactM, testShortCircuitM } from '../test-utils/test-utils'

describe('IOOption > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, IOO.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(O.some(fact100))
    expect(test).toHaveBeenCalledTimes(100)
  })
  it('short circuits', async () => {
    const test = jest.fn()
    const runTest = testShortCircuitM(
      { ...IOO.Monad, throwError: () => IOO.none },
      ChainRec,
      test,
    )
    const result = await runTest()
    expect(result).toStrictEqual(O.none)
    expect(test).toHaveBeenCalledTimes(1)
  })
})
