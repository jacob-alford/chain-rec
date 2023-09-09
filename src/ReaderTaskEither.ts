import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as RTE from 'fp-ts/ReaderTaskEither'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec3<RTE.URI>['chainRec'] =
  <R, E, A, B>(a: A, f: (a: A) => RTE.ReaderTaskEither<R, E, E.Either<A, B>>) =>
  (r: R) =>
  async () => {
    let current = await f(a)(r)()
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = await f(current.right.left)(r)()
        continue
      }
      if (E.isLeft(current)) {
        return current as E.Either<E, B>
      }
      if (E.isRight(current.right)) {
        return E.right(current.right.right) as E.Either<E, B>
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
export const ChainRec: ChnRec.ChainRec3<RTE.URI> = {
  ...RTE.Chain,
  chainRec,
}
