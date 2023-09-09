import * as IOO from 'fp-ts/IOOption'
import * as O from 'fp-ts/Option'

import { ChainRec } from '../src/IOOption'
import { fib100, testFibM, testShortCircuitM } from '../test-utils/test-utils'

describe('IOOption > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFibM(ChainRec, IOO.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(O.some(fib100))
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
