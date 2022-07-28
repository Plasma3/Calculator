import Lexer from "./lib/lexer/lexer";
import { stringifyTokens } from "./lib/tokens/token";
export default function calc(input) {
    // let input =
    // `2+ 5 -2(2*2+2)=123
    // 2 3,2.1
    // 5-2^2-23+2.2=2`;
    var ctx = "<TEST:helloworld.ts>";
    console.group("New instance of ".concat(ctx, " at ").concat((new Date()).toLocaleString()));
    console.log("> ".concat(input));
    console.log("===");
    var lexer = new Lexer();
    var x = lexer.lex_string(ctx, input);
    var output = "";
    if (x[1] === null) {
        console.log("     no errors");
        console.log("===");
        output = stringifyTokens(x[0]);
        console.log(output);
    }
    else {
        console.error("--- ERRORS ---");
        console.debug(x[1]);
        console.log("===");
    }
    console.groupEnd();
    return output;
}
//# sourceMappingURL=calc.js.map