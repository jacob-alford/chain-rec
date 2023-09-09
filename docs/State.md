---
title: State.ts
nav_order: 12
permalink: /state/
---

## State overview

A ChainRec instance for State

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
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => S.State<E, E.Either<A, B>>) => S.State<E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `State`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec2<'State'>
```

Added in v1.0.0
