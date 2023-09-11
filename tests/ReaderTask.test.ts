import * as RT from 'fp-ts/ReaderTask'

import { ChainRec } from '../src/ReaderTask'
import { fact100, testFactM } from '../test-utils/test-utils'

describe('ReaderTask > chainRec', () => {
  it('calculates large factorials', async () => {
    const test = jest.fn()
    const runTest = testFactM(ChainRec, RT.Pointed, test)
    const result = await runTest(100n)('')()
    expect(result).toStrictEqual(fact100)
    expect(test).toHaveBeenCalledTimes(100)
  })
})
