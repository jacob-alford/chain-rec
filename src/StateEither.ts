/**
 * A ChainRec instance for StateEither
 *
 * @since 1.0.0
 */
import * as SE from '@jacob-alford/chain-rec/internal/state-either'
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec3<SE.URI>['chainRec'] =
  <S, E, A, B>(a: A, f: (a: A) => SE.StateEither<S, E, E.Either<A, B>>) =>
  (initialState: S) => {
    let current = f(a)(initialState)
    while (true) {
      if (E.isLeft(current)) {
        return current as E.Either<E, [B, S]>
      }
      const [result, state] = current.right
      if (E.isLeft(result)) {
        current = f(result.left)(state)
        continue
      } else {
        return E.right([result.right, state]) as E.Either<E, [B, S]>
      }
    }
  }

// ---------------------
// instances
// ---------------------

/**
 * ChainRec for `StateEither`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec3<SE.URI> = {
  ...SE.Monad,
  chainRec,
}
