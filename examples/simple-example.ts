import * as ChnRec from '@jacob-alford/chain-rec/ChainRec'
import { ChainRec } from '@jacob-alford/chain-rec/StateIO'
import * as Cons from 'fp-ts/Console'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as SIO from 'fp-ts-contrib/StateIO'

const program = pipe(
  SIO.get<number>(),
  SIO.chainFirst(n => SIO.fromIO(Cons.log(n))),
  SIO.map(O.fromPredicate(n => n >= 100)),
  SIO.chainFirst(() => SIO.modify(n => n + 1)),
)

const runProgram = ChnRec.untilSome(ChainRec)(program)

runProgram(0)()
