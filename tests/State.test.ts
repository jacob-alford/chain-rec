import * as St from 'fp-ts/State'

import { ChainRec } from '../src/State'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('State > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, St.Pointed, test)
    const [result] = runTest(100n)('')
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
