/**
 * A ChainRec instance for ReaderTask
 *
 * @since 1.0.0
 */
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as RT from 'fp-ts/ReaderTask'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<RT.URI>['chainRec'] = (a, f) => r => async () => {
  let current = await f(a)(r)()
  while (E.isLeft(current)) {
    current = await f(current.left)(r)()
  }
  return current.right
}

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `ReaderTask`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<RT.URI> = {
  ...RT.Chain,
  chainRec,
}
