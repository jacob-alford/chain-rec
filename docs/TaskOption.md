---
title: TaskOption.ts
nav_order: 17
permalink: /task-option/
---

## TaskOption overview

A ChainRec instance for TaskOption

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
export declare const chainRec: <A, B>(a: A, f: (a: A) => TO.TaskOption<E.Either<A, B>>) => TO.TaskOption<B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `TaskOption`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec1<'TaskOption'>
```

Added in v1.0.0
