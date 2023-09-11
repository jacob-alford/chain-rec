import * as RIO from 'fp-ts/ReaderIO'

import { ChainRec } from '../src/ReaderIO'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('ReaderIO > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, RIO.Pointed, test)
    const result = runTest(100n)('')()
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
