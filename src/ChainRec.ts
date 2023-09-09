import type * as ChnRec from 'fp-ts/ChainRec'
import * as E from 'fp-ts/Either'
import { constUndefined, tuple } from 'fp-ts/function'
import type * as hkt from 'fp-ts/HKT'
import type * as Mn from 'fp-ts/Monoid'
import * as O from 'fp-ts/Option'

/**
 * @since 1.0.0
 * @category Utils
 */
export function forever<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>,
): <S, R, E, A, B>(ma: hkt.Kind4<M, S, R, E, A>) => hkt.Kind4<M, S, R, E, B>
export function forever<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>,
): <R, E, A, B>(ma: hkt.Kind3<M, R, E, A>) => hkt.Kind3<M, R, E, B>
export function forever<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
): <R, A, B>(ma: hkt.Kind3<M, R, E, A>) => hkt.Kind3<M, R, E, B>
export function forever<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>,
): <E, A, B>(ma: hkt.Kind2<M, E, A>) => hkt.Kind2<M, E, B>
export function forever<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
): <A, B>(ma: hkt.Kind2<M, E, A>) => hkt.Kind2<M, E, B>
export function forever<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>,
): <A, B>(ma: hkt.Kind<M, A>) => hkt.Kind<M, B>
export function forever<M>(
  M: ChnRec.ChainRec<M>,
): <A, B>(ma: hkt.HKT<M, A>) => hkt.HKT<M, B> {
  return ma => M.chainRec(void 0, () => M.map(ma, E.left))
}

/**
 * @since 1.0.0
 * @category Utils
 */
export function whileSome<M extends hkt.URIS4, A>(
  M: ChnRec.ChainRec4<M>,
  Mn: Mn.Monoid<A>,
): <S, R, E>(ma: hkt.Kind4<M, S, R, E, O.Option<A>>) => hkt.Kind4<M, S, R, E, A>
export function whileSome<M extends hkt.URIS3, A>(
  M: ChnRec.ChainRec3<M>,
  Mn: Mn.Monoid<A>,
): <R, E>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export function whileSome<M extends hkt.URIS3, E, A>(
  M: ChnRec.ChainRec3C<M, E>,
  Mn: Mn.Monoid<A>,
): <R>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export function whileSome<M extends hkt.URIS2, A>(
  M: ChnRec.ChainRec2<M>,
  Mn: Mn.Monoid<A>,
): <E>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export function whileSome<M extends hkt.URIS2, E, A>(
  M: ChnRec.ChainRec2C<M, E>,
  Mn: Mn.Monoid<A>,
): (ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export function whileSome<M extends hkt.URIS, A>(
  M: ChnRec.ChainRec1<M>,
  Mn: Mn.Monoid<A>,
): (ma: hkt.Kind<M, O.Option<A>>) => hkt.Kind<M, A>
export function whileSome<M, A>(
  M: ChnRec.ChainRec<M>,
  Mn: Mn.Monoid<A>,
): (ma: hkt.HKT<M, O.Option<A>>) => hkt.HKT<M, A> {
  return ma =>
    M.chainRec(Mn.empty, v =>
      M.map(
        ma,
        O.fold(
          () => E.right(v),
          x => E.left(Mn.concat(v, x)),
        ),
      ),
    )
}

/**
 * @since 1.0.0
 * @category Utils
 */
export function untilSome<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>,
): <S, R, E, A>(ma: hkt.Kind4<M, S, R, E, O.Option<A>>) => hkt.Kind4<M, S, R, E, A>
export function untilSome<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>,
): <R, E, A>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export function untilSome<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
): <R, A>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export function untilSome<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>,
): <E, A>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export function untilSome<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
): <A>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export function untilSome<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>,
): <A>(ma: hkt.Kind<M, O.Option<A>>) => hkt.Kind<M, A>
export function untilSome<M>(
  M: ChnRec.ChainRec<M>,
): <A>(ma: hkt.HKT<M, O.Option<A>>) => hkt.HKT<M, A> {
  return ma => M.chainRec(void 0, () => M.map(ma, E.fromOption(constUndefined)))
}

/**
 * @since 1.0.0
 * @category Utils
 */
export function chainRec2<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>,
): <S, R, E, A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind4<M, S, R, E, E.Either<[A, B], C>>,
) => hkt.Kind4<M, S, R, E, C>
export function chainRec2<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>,
): <R, E, A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind3<M, R, E, E.Either<[A, B], C>>,
) => hkt.Kind3<M, R, E, C>
export function chainRec2<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
): <R, A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind3<M, R, E, E.Either<[A, B], C>>,
) => hkt.Kind3<M, R, E, C>
export function chainRec2<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>,
): <E, A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind2<M, E, E.Either<[A, B], C>>,
) => hkt.Kind2<M, E, C>
export function chainRec2<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
): <A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind2<M, E, E.Either<[A, B], C>>,
) => hkt.Kind2<M, E, C>
export function chainRec2<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>,
): <A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind<M, E.Either<[A, B], C>>,
) => hkt.Kind<M, C>
export function chainRec2<M>(
  M: ChnRec.ChainRec<M>,
): <A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.HKT<M, E.Either<[A, B], C>>,
) => hkt.HKT<M, C> {
  return (a, b, f) => M.chainRec(tuple(a, b), ([a, b]) => f(a, b))
}

/**
 * @since 1.0.0
 * @category Utils
 */
export function chainRec3<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>,
): <S, R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind4<M, S, R, E, E.Either<[A, B, C], D>>,
) => hkt.Kind4<M, S, R, E, D>
export function chainRec3<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>,
): <R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => hkt.Kind3<M, R, E, D>
export function chainRec3<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
): <R, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind3<M, R, E, E.Either<[A, B, C], D>>,
) => hkt.Kind3<M, R, E, D>
export function chainRec3<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>,
): <E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind2<M, E, E.Either<[A, B, C], D>>,
) => hkt.Kind2<M, E, D>
export function chainRec3<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
): <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind2<M, E, E.Either<[A, B, C], D>>,
) => hkt.Kind2<M, E, D>
export function chainRec3<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>,
): <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind<M, E.Either<[A, B, C], D>>,
) => hkt.Kind<M, D>
export function chainRec3<M>(
  M: ChnRec.ChainRec<M>,
): <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.HKT<M, E.Either<[A, B, C], D>>,
) => hkt.HKT<M, D> {
  return (a, b, c, f) => M.chainRec(tuple(a, b, c), ([a, b, c]) => f(a, b, c))
}

/**
 * @since 1.0.0
 * @category Utils
 */
export const tailRec2: <A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => E.Either<readonly [A, B], C>,
) => C = (ai, bi, f) => {
  let result = f(ai, bi)
  while (E.isLeft(result)) {
    const [a, b] = result.left
    result = f(a, b)
  }
  return result.right
}

/**
 * @since 1.0.0
 * @category Utils
 */
export const tailRec3: <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => E.Either<readonly [A, B, C], D>,
) => D = (ai, bi, ci, f) => {
  let result = f(ai, bi, ci)
  while (E.isLeft(result)) {
    const [a, b, c] = result.left
    result = f(a, b, c)
  }
  return result.right
}
