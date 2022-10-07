import Lexer from "./lib/lexer/lexer";
import Parser from "./lib/parser/parser";
import { stringifyTokens } from "./lib/tokens/token";
var input = "2+ 5 -2(2*2+2)=123\n2 3,2.1\n5-2^2-23+2.2=2";
input = "2+5-2*3";
console.log(input);
console.log("===\n");
var ctx = "<TEST:helloworld.ts>";
var lexer = new Lexer();
var x = lexer.lex_string(ctx, input);
if (x[1] === null) {
    console.log("     no errors");
}
else {
    console.error("\n --- ERRORS ---");
    console.debug(x[1]);
}
console.log("\n===");
console.log(stringifyTokens(x[0]));
var parser = new Parser();
var ast = parser.parseTokens(ctx, x[0]);
console.log(ast);
//# sourceMappingURL=helloworld.js.map