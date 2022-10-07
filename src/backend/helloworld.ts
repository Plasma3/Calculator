import Lexer from "./lib/lexer/lexer";
import Parser from "./lib/parser/parser";
import { stringifyTokens } from "./lib/tokens/token";

let input =
`2+ 5 -2(2*2+2)=123
2 3,2.1
5-2^2-23+2.2=2`;
input = `2+5-2*3`;

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

const parser = new Parser();
let ast = parser.parseTokens(ctx, x[0]);

console.log(ast);
