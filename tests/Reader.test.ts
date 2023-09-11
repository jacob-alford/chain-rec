import * as R from 'fp-ts/Reader'

import { ChainRec } from '../src/Reader'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('Reader > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, R.Pointed, test)
    const result = runTest(100n)('')
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
