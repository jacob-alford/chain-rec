/**
 * A ChainRec instance for StateTaskEither
 *
 * @since 1.0.0
 */
import * as STE from '@jacob-alford/chain-rec/internal/state-task-either'
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec3<STE.URI>['chainRec'] =
  <S, E, A, B>(a: A, f: (a: A) => STE.StateTaskEither<S, E, E.Either<A, B>>) =>
  (initialState: S) =>
  async () => {
    let current = await f(a)(initialState)()
    while (true) {
      if (E.isLeft(current)) {
        return current as E.Either<E, [B, S]>
      }
      const [result, state] = current.right
      if (E.isLeft(result)) {
        current = await f(result.left)(state)()
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
 * ChainRec for `StateTaskEither`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec3<STE.URI> = {
  ...STE.Monad,
  chainRec,
}
