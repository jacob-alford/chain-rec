---
title: IO.ts
nav_order: 4
permalink: /io/
---

## IO overview

Re-exports chainRec from fp-ts > IO

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Model](#model)
  - [chainRec](#chainrec)

---

# Model

## chainRec

A re-export of fp-ts > IO.chainRec

**Signature**

```ts
export declare const chainRec: <A, B>(a: A, f: (a: A) => IO<Either<A, B>>) => IO<B>
```

Added in v1.0.0
