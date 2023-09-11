---
title: Home
permalink: /
has_children: false
nav_order: 0
---

<br>
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jacob-alford/chain-rec/main/assets/chainrec-black.png">
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jacob-alford/chain-rec/main/assets/chainrec-white.png">
    <img alt="schemata-ts" src="https://raw.githubusercontent.com/jacob-alford/chain-rec/main/assets/chainrec-blue.png">
  </picture>
</div>
<br>
<h1 align="center">
  chain-rec
</h1>

<p align="center">
Chain-rec instances and utilities for fp-ts
</p>

<br><br>

<div align="center">

<img alt="npm" src="https://img.shields.io/npm/v/@jacob-alford/chain-rec?style=for-the-badge&logo=npm">
&nbsp;
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.5%2B-blue?style=for-the-badge&logo=TypeScript">
&nbsp;

</div>
<div align="center">

<img alt="npm" src="https://img.shields.io/npm/dt/@jacob-alford/chain-rec?style=for-the-badge">
&nbsp;
<img alt="Coveralls branch" src="https://img.shields.io/coverallsCoverage/github/jacob-alford/chain-rec?style=for-the-badge">
&nbsp;
<img alt="GitHub" src="https://img.shields.io/github/license/jacob-alford/chain-rec?style=for-the-badge">
&nbsp;

</div>
<div align="center">

<img alt="Static Badge" src="https://img.shields.io/badge/ESM-Supported-success?style=for-the-badge&logo=JavaScript">
&nbsp;
<img alt="Static Badge" src="https://img.shields.io/badge/CJS-supported-success?style=for-the-badge&logo=Node.JS">
&nbsp;

</div>

<br><br>

<div align="center">
  <a href="https://jacob-alford.github.io/chain-rec/">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.npmjs.com/package/@jacob-alford/chain-rec">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/jacob-alford/chain-rec/issues/new">Issues</a>
  <br />
</div>

<br><br>

# Welcome

`ChainRec` is a typeclass that models tail-recursion in higher kinded types. However, `fp-ts` only exports instances for `Either`, `Array`, `ReadonlyArray`, `IO`, `Tuple`, and `ReadonlyTuple`. ChainRec can be particularly useful for effectful types such as Task, Reader, and State which is the purpose of this library, and to export various utilities from [purescript-tailrec](https://pursuit.purescript.org/packages/purescript-tailrec/6.1.0).

## Simple Example

This example constructs a program in the `StateIO` monad and will print the numbers 1 through 10 to the console.

### Imports

This example uses the following imports:

```ts
import * as ChnRec from '@jacob-alford/chain-rec/ChainRec'
import { ChainRec } from '@jacob-alford/chain-rec/StateIO'
import * as Cons from 'fp-ts/Console'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as SIO from 'fp-ts-contrib/StateIO'
```

### Construction

1. `SIO.get<number>()` - The program takes `number` as input
2. `SIO.chainFirst(n => SIO.fromIO(Cons.log(n)))` - Prints the current number to the console
3. `SIO.map(O.fromPredicate(n => n >= 10))` - Returns `none` if the number is less than 10
4. `SIO.chainFirst(() => SIO.modify(n => n + 1))` - Increments the number by 1

```ts
const program = pipe(
  SIO.get<number>(),
  SIO.chainFirst(n => SIO.fromIO(Cons.log(n))),
  SIO.map(O.fromPredicate(n => n >= 10)),
  SIO.chainFirst(() => SIO.modify(n => n + 1)),
)

const runProgram = ChnRec.untilSome(ChainRec)(program)

runProgram(0)()

// prints: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

## Installation

#### Yarn

```console
yarn add @jacob-alford/chain-rec
```

#### NPM

```console
npm install @jacob-alford/chain-rec
```

#### PNPM

```console
pnpm add @jacob-alford/chain-rec
```
