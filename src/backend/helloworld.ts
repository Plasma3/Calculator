import Lexer from "./lib/lexer/lexer";
import { stringifyTokens } from "./lib/tokens/token";

let input =
`2+ 5 -2(2*2+2)=123
2 3,2.1
5-2^2-23+2.2=2`;

console.log(input);
console.log("===\n");
const ctx = "<TEST:helloworld.ts>";
const lexer = new Lexer();

let x = lexer.lex_string(ctx, input);

if (x[1] === null) {
    console.log("     no errors");
} else {
    console.error("\n --- ERRORS ---")
    console.debug(x[1]);
}
console.log("\n===");
console.log(stringifyTokens(x[0]));
