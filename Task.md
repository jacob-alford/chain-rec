---
title: Task.ts
nav_order: 18
permalink: /task/
---

## Task overview

A ChainRec instance for Task

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
export declare const chainRec: <A, B>(a: A, f: (a: A) => T.Task<E.Either<A, B>>) => T.Task<B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `Task`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec1<'Task'>
```

Added in v1.0.0
