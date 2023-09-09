import type * as ChnRec from 'fp-ts/ChainRec'
import { constVoid, flow } from 'fp-ts/function'
import type * as hkt from 'fp-ts/HKT'
import type * as MT from 'fp-ts/MonadThrow'
import type * as P from 'fp-ts/Pointed'

import * as Step from '../src/Step'

type FibAcc = readonly [current: bigint, acc: bigint]

export const fibStart: (n: bigint) => FibAcc = n => [n, 1n]

export const fib: (fibAcc: FibAcc) => Step.Step<FibAcc, FibAcc> = Step.loopIf(
  ([n]) => n > 1n,
  ([n, acc]) => [n - 1n, acc * n],
)

export const fib100 =
  93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n

export function testFibM<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>,
  P: P.Pointed4<M>,
  test?: () => void,
): <S, R, E>(n: bigint) => hkt.Kind4<M, S, R, E, bigint>
export function testFibM<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>,
  P: P.Pointed3<M>,
  test?: () => void,
): <R, E>(n: bigint) => hkt.Kind3<M, R, E, bigint>
export function testFibM<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>,
  P: P.Pointed3C<M, E>,
  test?: () => void,
): <R>(n: bigint) => hkt.Kind3<M, R, E, bigint>
export function testFibM<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>,
  P: P.Pointed2<M>,
  test?: () => void,
): <E>(n: bigint) => hkt.Kind2<M, E, bigint>
export function testFibM<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>,
  P: P.Pointed2C<M, E>,
  test?: () => void,
): (n: bigint) => hkt.Kind2<M, E, bigint>
export function testFibM<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>,
  P: P.Pointed1<M>,
  test?: () => void,
): (n: bigint) => hkt.Kind<M, bigint>
export function testFibM<M>(
  M: ChnRec.ChainRec<M>,
  P: P.Pointed<M>,
  test: () => void = constVoid,
): (n: bigint) => hkt.HKT<M, bigint> {
  return n =>
    M.map(
      M.chainRec(
        fibStart(n),
        flow(fib, P.of, _ =>
          M.chain(_, _ => {
            test()
            return P.of(_)
          }),
        ),
      ),
      ([, result]) => result,
    )
}

export function testShortCircuitM<M extends hkt.URIS4, S, R, E>(
  M: MT.MonadThrow4<M>,
  C: ChnRec.ChainRec4<M>,
  test?: () => void,
): hkt.Kind4<M, S, R, E, never>
export function testShortCircuitM<M extends hkt.URIS3, R, E>(
  M: MT.MonadThrow3<M>,
  C: ChnRec.ChainRec3<M>,
  test?: () => void,
): hkt.Kind3<M, R, E, never>
export function testShortCircuitM<M extends hkt.URIS3, R, E>(
  M: MT.MonadThrow3C<M, E>,
  C: ChnRec.ChainRec3C<M, E>,
  test?: () => void,
): hkt.Kind3<M, R, E, never>
export function testShortCircuitM<M extends hkt.URIS2, E>(
  M: MT.MonadThrow2<M>,
  C: ChnRec.ChainRec2<M>,
  test?: () => void,
): hkt.Kind2<M, E, never>
export function testShortCircuitM<M extends hkt.URIS2, E>(
  M: MT.MonadThrow2C<M, E>,
  C: ChnRec.ChainRec2C<M, E>,
  test?: () => void,
): hkt.Kind2<M, E, never>
export function testShortCircuitM<M extends hkt.URIS>(
  M: MT.MonadThrow1<M>,
  C: ChnRec.ChainRec1<M>,
  test?: () => void,
): hkt.Kind<M, never>
export function testShortCircuitM<M>(
  M: MT.MonadThrow<M>,
  C: ChnRec.ChainRec<M>,
  test: () => void = constVoid,
): hkt.HKT<M, never> {
  return C.chainRec(0, () => {
    test()
    return M.throwError('short circuit')
  })
}
