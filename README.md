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
  <a href="https://www.npmjs.com/package/chain-rec">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/jacob-alford/chain-rec/issues/new">Issues</a>
  <br />
</div>

<br><br>

# Welcome

`ChainRec` is a typeclass that models tail-recursion in higher kinded types.  However, `fp-ts` only exports instances for `Either`, `Array`, `ReadonlyArray`, `IO`, `Tuple`, and `ReadonlyTuple`.  ChainRec can be particularly useful for effectful types such as Task, Reader, and State which is the purpose of this library, and to export various utilities from [purescrip-tailrec](https://pursuit.purescript.org/packages/purescript-tailrec/6.1.0).

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
