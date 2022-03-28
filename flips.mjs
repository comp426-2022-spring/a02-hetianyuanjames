import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

let args = min(process.argv.slice(2))

if (args['number']) {
    let results = coinFlips(args['number']);
    console.log(results);
    console.log(countFlips(results));
} else {
    let results = coinFlips(1)
    console.log(results);
    console.log(countFlips(results));
}