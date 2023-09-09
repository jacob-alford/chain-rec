/**
 * A ChainRec instance for StateReaderTaskEither
 *
 * @since 1.0.0
 */
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as SRTE from 'fp-ts/StateReaderTaskEither'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec4<SRTE.URI>['chainRec'] =
  <S, R, E, A, B>(
    a: A,
    f: (a: A) => SRTE.StateReaderTaskEither<S, R, E, E.Either<A, B>>,
  ) =>
  (initialState: S) =>
  (r: R) =>
  async () => {
    let current = await f(a)(initialState)(r)()
    while (true) {
      if (E.isLeft(current)) {
        return current as E.Either<E, [B, S]>
      }
      const [result, state] = current.right
      if (E.isLeft(result)) {
        current = await f(result.left)(state)(r)()
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
 * ChainRec for `ReaderEither`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec4<SRTE.URI> = {
  ...SRTE.Chain,
  chainRec,
}
