import Lexer from "./lib/lexer/lexer";
import { stringifyTokens } from "./lib/tokens/token";

export default function calc(input: string): string {
    // let input =
    // `2+ 5 -2(2*2+2)=123
    // 2 3,2.1
    // 5-2^2-23+2.2=2`;
    
    const ctx = "<TEST:helloworld.ts>";

    console.group(`New instance of ${ctx} at ${(new Date()).toLocaleString()}`);
    console.log(`> ${input}`);
    console.log("===");
    
    const lexer = new Lexer();
    let x = lexer.lex_string(ctx, input);
    
    let output = "";
    if (x[1] === null) {
        console.log("     no errors");
        console.log("===");
        output = stringifyTokens(x[0]);
        console.log(output);
    } else {
        console.error("--- ERRORS ---")
        console.debug(x[1]);
        console.log("===");
    }
    
    console.groupEnd();
    return output;
}
