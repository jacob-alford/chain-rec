---
title: IOOption.ts
nav_order: 6
permalink: /io-option/
---

## IOOption overview

A ChainRec instance for IOOption

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
export declare const chainRec: <A, B>(a: A, f: (a: A) => IOO.IOOption<E.Either<A, B>>) => IOO.IOOption<B>
```

Added in v1.0.0

# Instances

## ChainRec

ChainRec for `IOOption`

**Signature**

```ts
export declare const ChainRec: ChnRec.ChainRec1<'IOOption'>
```

Added in v1.0.0
