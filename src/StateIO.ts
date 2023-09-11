/**
 * A ChainRec instance for StateIO
 *
 * @since 1.0.0
 */
import * as SIO from '@jacob-alford/chain-rec/internal/state-io'
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'

// ---------------------
// Instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<SIO.URI>['chainRec'] =
  (a, f) => initialState => () => {
    let [current, state] = f(a)(initialState)()
    while (E.isLeft(current)) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;[current, state] = f(current.left)(state)()
    }
    return [current.right, state]
  }

// ---------------------
// Instances
// ---------------------

/**
 * ChainRec for `StateIO`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<SIO.URI> = {
  ...SIO.Monad,
  chainRec,
}
