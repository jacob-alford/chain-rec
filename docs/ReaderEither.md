---
title: ReaderEither.ts
nav_order: 9
permalink: /reader-either/
---

## ReaderEither overview

A ChainRec instance for ReaderEither

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Instance methods](#instance-methods)
  - [chainRec](#chainrec)
- [Instances](#instances)
  - [ChainRec](#chainrec)

---

# Instance methods

## chainRec

**Signature**

```ts
export declare const chainRec: <R, E, A, B>(
  a: A,
  f: (a: A) => RE.ReaderEither<R, E, E.Either<A, B>>
) => RE.ReaderEither<R, E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `ReaderEither`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec3<'ReaderEither'>
```

Added in v1.0.0
