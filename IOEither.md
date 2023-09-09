---
title: IOEither.ts
nav_order: 5
permalink: /io-either/
---

## IOEither overview

A ChainRec instance for IOEither

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
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => IOE.IOEither<E, E.Either<A, B>>) => IOE.IOEither<E, B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `IOEither`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec2<'IOEither'>
```

Added in v1.0.0
