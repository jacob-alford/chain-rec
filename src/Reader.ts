import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as R from 'fp-ts/Reader'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<R.URI>['chainRec'] = (a, f) => r => {
  let current = f(a)(r)
  while (E.isLeft(current)) {
    current = f(current.left)(r)
  }
  return current.right
}

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `Reader`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<R.URI> = {
  ...R.Chain,
  chainRec,
}
