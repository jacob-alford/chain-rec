import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as TE from 'fp-ts/TaskEither'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec2<TE.URI>['chainRec'] =
  <E, A, B>(a: A, f: (a: A) => TE.TaskEither<E, E.Either<A, B>>) =>
  async () => {
    let current = await f(a)()
    while (true) {
      if (E.isRight(current) && E.isLeft(current.right)) {
        current = await f(current.right.left)()
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
 * ChainRec for `TaskEither`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec2<TE.URI> = {
  ...TE.Chain,
  chainRec,
}
