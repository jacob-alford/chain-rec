/**
 * A ChainRec instance for IOEither
 *
 * @since 1.0.0
 */
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as IOE from 'fp-ts/IOEither'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<IOE.URI>['chainRec'] =
  <E, A, B>(a: A, f: (a: A) => IOE.IOEither<E, E.Either<A, B>>) =>
  () => {
    let current = f(a)()
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = f(current.right.left)()
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
 * ChainRec for `IOEither`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<IOE.URI> = {
  ...IOE.Chain,
  chainRec,
}
