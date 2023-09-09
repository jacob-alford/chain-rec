---
title: Option.ts
nav_order: 7
permalink: /option/
---

## Option overview

A ChainRec instance for Option

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
export declare const chainRec: <A, B>(a: A, f: (a: A) => O.Option<E.Either<A, B>>) => O.Option<B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `Option`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec1<'Option'>
```

Added in v1.0.0
