---
title: Reader.ts
nav_order: 8
permalink: /reader/
---

## Reader overview

A ChainRec instance for Reader

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
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => R.Reader<E, E.Either<A, B>>) => R.Reader<E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `Reader`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec2<'Reader'>
```

Added in v1.0.0
