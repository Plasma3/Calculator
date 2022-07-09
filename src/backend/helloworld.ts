import Lexer from "./lib/lexer-rewrite/lexer-rewrite";
import { stringifyTokens } from "./lib/lexer-rewrite/token";

let input =
    `2+ 5 -2(2*2+2)=123
23,
2.1
5-2^2-23+2.2=2`;

console.log(input);
console.log("\n===\n");
const ctx = "<TEST:helloworld.ts>";
const lexer = new Lexer();

let x = lexer.lex_string(ctx, input);

if (x[1] === null) {
    console.log("     no errors");
} else {
    console.error("\n --- ERRORS ---")
    console.debug(x[1]);
}
console.log("\n===\n");
console.log(stringifyTokens(x[0]));
