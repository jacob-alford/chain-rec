import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as RE from 'fp-ts/ReaderEither'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec3<RE.URI>['chainRec'] =
  <R2, E, A, B>(a: A, f: (a: A) => RE.ReaderEither<R2, E, E.Either<A, B>>) =>
  <R1>(r: R1 & R2) => {
    let current = f(a)(r)
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = f(current.right.left)(r)
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
export const ChainRec: ChnRec.ChainRec3<RE.URI> = {
  ...RE.Chain,
  chainRec,
}
