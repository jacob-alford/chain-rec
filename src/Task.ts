import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as T from 'fp-ts/Task'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec1<T.URI>['chainRec'] = (a, f) => async () => {
  let current = await f(a)()
  while (E.isLeft(current)) {
    current = await f(current.left)()
  }
  return current.right
}

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `Task`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec1<T.URI> = {
  ...T.Chain,
  chainRec,
}
