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

- [utils](#utils)
  - [Done (interface)](#done-interface)
  - [Loop (interface)](#loop-interface)
  - [Step (type alias)](#step-type-alias)
  - [done](#done)
  - [loop](#loop)
  - [loopIf](#loopif)
  - [loopUnless](#loopunless)
  - [stopIf](#stopif)
  - [stopUnless](#stopunless)

---

# utils

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
export declare const loopIf: <A>(shouldLoop: (a: A) => boolean, iterate: (a: A) => A) => (a: A) => Step<A, A>
```

Added in v1.0.0

## loopUnless

Alias for `stopIf`

**Signature**

```ts
export declare const loopUnless: <A>(shouldStop: (a: A) => boolean, iterate: (a: A) => A) => (a: A) => Step<A, A>
```

Added in v1.0.0

## stopIf

Similar to `E.fromPredicate`

**Signature**

```ts
export declare const stopIf: <A>(shouldStop: (a: A) => boolean, iterate: (a: A) => A) => (a: A) => Step<A, A>
```

Added in v1.0.0

## stopUnless

Alias for `loopIf`

**Signature**

```ts
export declare const stopUnless: <A>(shouldLoop: (a: A) => boolean, iterate: (a: A) => A) => (a: A) => Step<A, A>
```

Added in v1.0.0
