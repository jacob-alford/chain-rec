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
 * @category Model
 */
export interface Loop<E> extends E.Left<E> {}

/**
 * A type which instructs `ChainRec` to stop looping
 *
 * @since 1.0.0
 * @category Model
 */
export interface Done<A> extends E.Right<A> {}

/**
 * An alias for `Either`
 *
 * @since 1.0.0
 * @category Model
 */
export type Step<E, A> = Loop<E> | Done<A>

// ---------------------
// Constructors
// ---------------------

/**
 * Constructs a `Loop` or `Left` value which instructs `ChainRec` to keep looping
 *
 * @since 1.0.0
 * @category Constructors
 */
export const loop: <E, A = never>(e: E) => Step<E, A> = E.left

/**
 * Constructs a `Done` or `Right` value which instructs `ChainRec` to stop looping
 *
 * @since 1.0.0
 * @category Constructors
 */
export const done: <A, E = never>(a: A) => Step<E, A> = E.right

/**
 * Similar to `E.fromPredicate`
 *
 * @since 1.0.0
 * @category Constructors
 */
export const stopIf: <Iterant>(
  shouldStop: (a: Iterant) => boolean,
  iterate: (a: Iterant) => Iterant,
) => (a: Iterant) => Step<Iterant, Iterant> = E.fromPredicate

/**
 * Alias for `stopIf`
 *
 * @since 1.0.0
 * @category Constructors
 */
export const loopUnless = stopIf

/**
 * Similar to `E.fromPredicate`, but the predicate is negated
 *
 * @since 1.0.0
 * @category Constructors
 */
export const loopIf: <Iterant>(
  shouldLoop: (a: Iterant) => boolean,
  iterate: (a: Iterant) => Iterant,
) => (a: Iterant) => Step<Iterant, Iterant> = (shouldLoop, iterate) =>
  stopIf(Pred.not(shouldLoop), iterate)

/**
 * Alias for `loopIf`
 *
 * @since 1.0.0
 * @category Constructors
 */
export const stopUnless = loopIf

// ---------------------
// Instance Methods
// ---------------------

/**
 * Same as `E.map`
 *
 * @since 1.1.0
 * @category Instance Methods
 */
export const mapResult: <A, B>(f: (a: A) => B) => <E>(step: Step<E, A>) => Step<E, B> =
  E.map

/**
 * Same as `E.mapLeft`
 *
 * @since 1.1.0
 * @category Instance Methods
 */
export const mapIterant: <E, F>(f: (e: E) => F) => <A>(step: Step<E, A>) => Step<F, A> =
  E.mapLeft

/**
 * Same as `E.bimap`
 *
 * @since 1.1.0
 * @category Instance Methods
 */
export const mapBoth: <E, F, A, B>(
  mapIterant: (e: E) => F,
  mapResult: (a: A) => B,
) => (step: Step<E, A>) => Step<F, B> = E.bimap
