import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as RIO from 'fp-ts/ReaderIO'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<RIO.URI>['chainRec'] = (a, f) => r => () => {
  let current = f(a)(r)()
  while (E.isLeft(current)) {
    current = f(current.left)(r)()
  }
  return current.right
}

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `ReaderIO`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<RIO.URI> = {
  ...RIO.Chain,
  chainRec,
}
