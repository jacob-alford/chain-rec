---
title: ReaderTask.ts
nav_order: 10
permalink: /reader-task/
---

## ReaderTask overview

A ChainRec instance for ReaderTask

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
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => RT.ReaderTask<E, E.Either<A, B>>) => RT.ReaderTask<E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `ReaderTask`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec2<'ReaderTask'>
```

Added in v1.0.0
