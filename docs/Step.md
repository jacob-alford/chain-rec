---
title: Step.ts
nav_order: 14
permalink: /step/
---

## Step overview

A slightly nicer way to conceptualize tail-rec. This is really just `Either`, but
contains helpers with friendly names

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Constructors](#constructors)
  - [done](#done)
  - [loop](#loop)
  - [loopIf](#loopif)
  - [loopUnless](#loopunless)
  - [stopIf](#stopif)
  - [stopUnless](#stopunless)
- [Instance Methods](#instance-methods)
  - [mapBoth](#mapboth)
  - [mapIterant](#mapiterant)
  - [mapResult](#mapresult)
- [Model](#model)
  - [Done (interface)](#done-interface)
  - [Loop (interface)](#loop-interface)
  - [Step (type alias)](#step-type-alias)

---

# Constructors

## done

Constructs a `Done` or `Right` value which instructs `ChainRec` to stop looping

**Signature**

```ts
export declare const done: <A, E = never>(a: A) => Step<E, A>
```

Added in v1.0.0

## loop

Constructs a `Loop` or `Left` value which instructs `ChainRec` to keep looping

**Signature**

```ts
export declare const loop: <E, A = never>(e: E) => Step<E, A>
```

Added in v1.0.0

## loopIf

Similar to `E.fromPredicate`, but the predicate is negated

**Signature**

```ts
export declare const loopIf: <In, Iterate = In>(
  shouldLoop: (a: In) => boolean,
  iterate: (a: In) => Iterate
) => (a: In) => Step<Iterate, In>
```

Added in v1.0.0

## loopUnless

Alias for `stopIf`

**Signature**

```ts
export declare const loopUnless: <In, Iterate = In>(
  shouldStop: (a: In) => boolean,
  iterate: (a: In) => Iterate
) => (a: In) => Step<Iterate, In>
```

Added in v1.0.0

## stopIf

Similar to `E.fromPredicate`

**Signature**

```ts
export declare const stopIf: <In, Iterate = In>(
  shouldStop: (a: In) => boolean,
  iterate: (a: In) => Iterate
) => (a: In) => Step<Iterate, In>
```

Added in v1.0.0

## stopUnless

Alias for `loopIf`

**Signature**

```ts
export declare const stopUnless: <In, Iterate = In>(
  shouldLoop: (a: In) => boolean,
  iterate: (a: In) => Iterate
) => (a: In) => Step<Iterate, In>
```

Added in v1.0.0

# Instance Methods

## mapBoth

Same as `E.bimap`

**Signature**

```ts
export declare const mapBoth: <E, F, A, B>(
  mapIterant: (e: E) => F,
  mapResult: (a: A) => B
) => (step: Step<E, A>) => Step<F, B>
```

Added in v1.1.0

## mapIterant

Same as `E.mapLeft`

**Signature**

```ts
export declare const mapIterant: <E, F>(f: (e: E) => F) => <A>(step: Step<E, A>) => Step<F, A>
```

Added in v1.1.0

## mapResult

Same as `E.map`

**Signature**

```ts
export declare const mapResult: <A, B>(f: (a: A) => B) => <E>(step: Step<E, A>) => Step<E, B>
```

Added in v1.1.0

# Model

## Done (interface)

A type which instructs `ChainRec` to stop looping

**Signature**

```ts
export interface Done<A> extends E.Right<A> {}
```

Added in v1.0.0

## Loop (interface)

A type which instructs `ChainRec` to keep looping

**Signature**

```ts
export interface Loop<E> extends E.Left<E> {}
```

Added in v1.0.0

## Step (type alias)

An alias for `Either`

**Signature**

```ts
export type Step<E, A> = Loop<E> | Done<A>
```

Added in v1.0.0
