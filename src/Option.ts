/**
 * A ChainRec instance for Option
 *
 * @since 1.0.0
 */
import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'

// ---------------------
// instance Methods
// ---------------------

/**
 * @since 1.0.0
 * @category Instance methods
 */
export const chainRec: ChnRec.ChainRec1<O.URI>['chainRec'] = <A, B>(
  a: A,
  f: (a: A) => O.Option<E.Either<A, B>>,
) => {
  let current = f(a)
  while (true) {
    if (O.isSome(current) && E.isLeft(current.value)) {
      current = f(current.value.left)
      continue
    }
    if (O.isNone(current)) {
      return current as O.Option<B>
    }
    if (E.isRight(current.value)) {
      return O.some(current.value.right) as O.Option<B>
    }
  }
}

// ---------------------
// instances
// ---------------------

/**
 * ChainRec for `Option`
 *
 * @since 1.0.0
 * @category Instances
 */
export const ChainRec: ChnRec.ChainRec1<O.URI> = {
  ...O.Chain,
  chainRec,
}
