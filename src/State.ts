import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as S from 'fp-ts/State'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<S.URI>['chainRec'] = (a, f) => initialState => {
  let [current, state] = f(a)(initialState)
  while (E.isLeft(current)) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[current, state] = f(current.left)(state)
  }
  return [current.right, state]
}

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `State`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<S.URI> = {
  ...S.Chain,
  chainRec,
}
