---
title: ChainRec.ts
nav_order: 1
permalink: /chain-rec/
---

## ChainRec overview

Utilities for working with `ChainRec` instances.

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [Utils](#utils)
  - [chainRec2](#chainrec2)
  - [chainRec3](#chainrec3)
  - [forever](#forever)
  - [tailRec2](#tailrec2)
  - [tailRec3](#tailrec3)
  - [untilSome](#untilsome)
  - [whileSome](#whilesome)

---

# Utils

## chainRec2

**Signature**

```ts
export declare function chainRec2<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>
): <S, R, E, A, B, C>(
  a: A,
  b: B,
  f: (a: A, b: B) => hkt.Kind4<M, S, R, E, E.Either<[A, B], C>>
) => hkt.Kind4<M, S, R, E, C>
export declare function chainRec2<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>
): <R, E, A, B, C>(a: A, b: B, f: (a: A, b: B) => hkt.Kind3<M, R, E, E.Either<[A, B], C>>) => hkt.Kind3<M, R, E, C>
export declare function chainRec2<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>
): <R, A, B, C>(a: A, b: B, f: (a: A, b: B) => hkt.Kind3<M, R, E, E.Either<[A, B], C>>) => hkt.Kind3<M, R, E, C>
export declare function chainRec2<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>
): <E, A, B, C>(a: A, b: B, f: (a: A, b: B) => hkt.Kind2<M, E, E.Either<[A, B], C>>) => hkt.Kind2<M, E, C>
export declare function chainRec2<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => hkt.Kind2<M, E, E.Either<[A, B], C>>) => hkt.Kind2<M, E, C>
export declare function chainRec2<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>
): <A, B, C>(a: A, b: B, f: (a: A, b: B) => hkt.Kind<M, E.Either<[A, B], C>>) => hkt.Kind<M, C>
```

Added in v1.0.0

## chainRec3

**Signature**

```ts
export declare function chainRec3<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>
): <S, R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind4<M, S, R, E, E.Either<[A, B, C], D>>
) => hkt.Kind4<M, S, R, E, D>
export declare function chainRec3<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>
): <R, E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind3<M, R, E, E.Either<[A, B, C], D>>
) => hkt.Kind3<M, R, E, D>
export declare function chainRec3<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>
): <R, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind3<M, R, E, E.Either<[A, B, C], D>>
) => hkt.Kind3<M, R, E, D>
export declare function chainRec3<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>
): <E, A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind2<M, E, E.Either<[A, B, C], D>>
) => hkt.Kind2<M, E, D>
export declare function chainRec3<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>
): <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => hkt.Kind2<M, E, E.Either<[A, B, C], D>>
) => hkt.Kind2<M, E, D>
export declare function chainRec3<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>
): <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => hkt.Kind<M, E.Either<[A, B, C], D>>) => hkt.Kind<M, D>
```

Added in v1.0.0

## forever

**Signature**

```ts
export declare function forever<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>
): <S, R, E, A, B>(ma: hkt.Kind4<M, S, R, E, A>) => hkt.Kind4<M, S, R, E, B>
export declare function forever<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>
): <R, E, A, B>(ma: hkt.Kind3<M, R, E, A>) => hkt.Kind3<M, R, E, B>
export declare function forever<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>
): <R, A, B>(ma: hkt.Kind3<M, R, E, A>) => hkt.Kind3<M, R, E, B>
export declare function forever<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>
): <E, A, B>(ma: hkt.Kind2<M, E, A>) => hkt.Kind2<M, E, B>
export declare function forever<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>
): <A, B>(ma: hkt.Kind2<M, E, A>) => hkt.Kind2<M, E, B>
export declare function forever<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>
): <A, B>(ma: hkt.Kind<M, A>) => hkt.Kind<M, B>
```

Added in v1.0.0

## tailRec2

**Signature**

```ts
export declare const tailRec2: <A, B, C>(a: A, b: B, f: (a: A, b: B) => E.Either<readonly [A, B], C>) => C
```

Added in v1.0.0

## tailRec3

**Signature**

```ts
export declare const tailRec3: <A, B, C, D>(
  a: A,
  b: B,
  c: C,
  f: (a: A, b: B, c: C) => E.Either<readonly [A, B, C], D>
) => D
```

Added in v1.0.0

## untilSome

**Signature**

```ts
export declare function untilSome<M extends hkt.URIS4>(
  M: ChnRec.ChainRec4<M>
): <S, R, E, A>(ma: hkt.Kind4<M, S, R, E, O.Option<A>>) => hkt.Kind4<M, S, R, E, A>
export declare function untilSome<M extends hkt.URIS3>(
  M: ChnRec.ChainRec3<M>
): <R, E, A>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export declare function untilSome<M extends hkt.URIS3, E>(
  M: ChnRec.ChainRec3C<M, E>
): <R, A>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export declare function untilSome<M extends hkt.URIS2>(
  M: ChnRec.ChainRec2<M>
): <E, A>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export declare function untilSome<M extends hkt.URIS2, E>(
  M: ChnRec.ChainRec2C<M, E>
): <A>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export declare function untilSome<M extends hkt.URIS>(
  M: ChnRec.ChainRec1<M>
): <A>(ma: hkt.Kind<M, O.Option<A>>) => hkt.Kind<M, A>
```

Added in v1.0.0

## whileSome

**Signature**

```ts
export declare function whileSome<M extends hkt.URIS4, A>(
  M: ChnRec.ChainRec4<M>,
  Mn: Mn.Monoid<A>
): <S, R, E>(ma: hkt.Kind4<M, S, R, E, O.Option<A>>) => hkt.Kind4<M, S, R, E, A>
export declare function whileSome<M extends hkt.URIS3, A>(
  M: ChnRec.ChainRec3<M>,
  Mn: Mn.Monoid<A>
): <R, E>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export declare function whileSome<M extends hkt.URIS3, E, A>(
  M: ChnRec.ChainRec3C<M, E>,
  Mn: Mn.Monoid<A>
): <R>(ma: hkt.Kind3<M, R, E, O.Option<A>>) => hkt.Kind3<M, R, E, A>
export declare function whileSome<M extends hkt.URIS2, A>(
  M: ChnRec.ChainRec2<M>,
  Mn: Mn.Monoid<A>
): <E>(ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export declare function whileSome<M extends hkt.URIS2, E, A>(
  M: ChnRec.ChainRec2C<M, E>,
  Mn: Mn.Monoid<A>
): (ma: hkt.Kind2<M, E, O.Option<A>>) => hkt.Kind2<M, E, A>
export declare function whileSome<M extends hkt.URIS, A>(
  M: ChnRec.ChainRec1<M>,
  Mn: Mn.Monoid<A>
): (ma: hkt.Kind<M, O.Option<A>>) => hkt.Kind<M, A>
```

Added in v1.0.0
