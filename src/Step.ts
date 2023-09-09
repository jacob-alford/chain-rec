/**
 * A slightly nicer way to conceptualize tail-rec. This is really just `Either`, but
 * contains helpers with friendly names
 *
 * @since 1.0.0
 */
import * as E from 'fp-ts/Either'
import * as Pred from 'fp-ts/Predicate'

// ---------------------
// Models
// ---------------------

/**
 * A type which instructs `ChainRec` to keep looping
 *
 * @since 1.0.0
 */
export interface Loop<E> extends E.Left<E> {}

/**
 * A type which instructs `ChainRec` to stop looping
 *
 * @since 1.0.0
 */
export interface Done<A> extends E.Right<A> {}

/**
 * An alias for `Either`
 *
 * @since 1.0.0
 */
export type Step<E, A> = Loop<E> | Done<A>

// ---------------------
// Constructors
// ---------------------

/**
 * Constructs a `Loop` or `Left` value which instructs `ChainRec` to keep looping
 *
 * @since 1.0.0
 */
export const loop: <E, A = never>(e: E) => Step<E, A> = E.left

/**
 * Constructs a `Done` or `Right` value which instructs `ChainRec` to stop looping
 *
 * @since 1.0.0
 */
export const done: <A, E = never>(a: A) => Step<E, A> = E.right

/**
 * Similar to `E.fromPredicate`
 *
 * @since 1.0.0
 */
export const stopIf: <A>(
  shouldStop: (a: A) => boolean,
  iterate: (a: A) => A,
) => (a: A) => Step<A, A> = E.fromPredicate

/**
 * Alias for `stopIf`
 *
 * @since 1.0.0
 */
export const loopUnless = stopIf

/**
 * Similar to `E.fromPredicate`, but the predicate is negated
 *
 * @since 1.0.0
 */
export const loopIf: <A>(
  shouldLoop: (a: A) => boolean,
  iterate: (a: A) => A,
) => (a: A) => Step<A, A> = (shouldLoop, iterate) => stopIf(Pred.not(shouldLoop), iterate)

/**
 * Alias for `loopIf`
 *
 * @since 1.0.0
 */
export const stopUnless = loopIf
