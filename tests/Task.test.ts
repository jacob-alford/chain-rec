import * as T from 'fp-ts/Task'

import { ChainRec } from '../src/Task'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('Task > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, T.Pointed, test)
    const result = await runTest(100n)()
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
