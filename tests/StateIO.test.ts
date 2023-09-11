import * as SIO from 'fp-ts-contrib/StateIO'

import { ChainRec } from '../src/StateIO'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('StateIO > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, { URI: SIO.URI, of: SIO.of }, test)
    const [result] = runTest(100n)('')()
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
