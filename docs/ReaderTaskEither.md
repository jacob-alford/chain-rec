---
title: ReaderTaskEither.ts
nav_order: 11
permalink: /reader-task-either/
---

## ReaderTaskEither overview

A ChainRec instance for ReaderTaskEither

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
  f: (a: A) => RTE.ReaderTaskEither<R, E, E.Either<A, B>>
) => RTE.ReaderTaskEither<R, E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `ReaderEither`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec3<'ReaderTaskEither'>
```

Added in v1.0.0
