---
title: Either.ts
nav_order: 2
permalink: /either/
---

## Either overview

Re-exports chainRec from fp-ts > Either

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Model](#model)
  - [chainRec](#chainrec)

---

# Model

## chainRec

A re-export of fp-ts > Either.chainRec

**Signature**

```ts
export declare const chainRec: <E, A, B>(a: A, f: (a: A) => Either<E, Either<A, B>>) => Either<E, B>
```

Added in v1.0.0
