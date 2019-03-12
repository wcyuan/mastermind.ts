// https://repl.it/@conan/mastermind

import * as mastermind from "./mastermind";

let g = new mastermind.Game();
let r = g.check_guess(['1', '1', '3', '4'], ['1', '1', '2', '2']);
console.log(g.zip(['1', '2', '3', '4'], ['1', '1', '2', '2']));
console.log("" + r.exact + ", " + r.partial);
g.play(mastermind.MaybeAutoPlayer);
//console.log(g.get_all_valid_guesses());
let p = new mastermind.AutoPlayer(g);
console.log(p.get_possible_guesses(
  [[['1', '1', '3', '3'], new mastermind.Result(3, 0)]]));

//console.log(p.get_possible_guesses([]));
