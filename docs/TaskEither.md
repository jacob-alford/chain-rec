---
title: TaskEither.ts
nav_order: 16
permalink: /task-either/
---

## TaskEither overview

A ChainRec instance for TaskEither

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
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => TE.TaskEither<E, E.Either<A, B>>) => TE.TaskEither<E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `TaskEither`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec2<'TaskEither'>
```

Added in v1.0.0
