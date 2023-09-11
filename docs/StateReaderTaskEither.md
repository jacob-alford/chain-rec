---
title: StateReaderTaskEither.ts
nav_order: 15
permalink: /state-reader-task-either/
---

## StateReaderTaskEither overview

A ChainRec instance for StateReaderTaskEither

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
export declare const chainRec: <S, R, E, A, B>(
  a: A,
  f: (a: A) => SRTE.StateReaderTaskEither<S, R, E, E.Either<A, B>>
) => SRTE.StateReaderTaskEither<S, R, E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `StateReaderTaskEither`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec4<'StateReaderTaskEither'>
```

Added in v1.0.0
