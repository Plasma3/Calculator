import { display_error } from "./lib/classes/errors";
import { Lexer, stringifyTokens } from "./lib/lexer/lexer";


// let foo = c.getNodeExpression(
//     c.getBaseNode(),
//     [
//         c.getNodeAtom(
//             c.getBaseNode(),
//             c.getValueInteger(5),
//         ),
//         c.getNodeUnary(
//             c.getBaseNode(),
//             UnaryOperator.MINUS,
//             c.getNodeAtom(
//                 c.getBaseNode(),
//                 c.getValueInteger(3)
//             )
//         )
//     ]
// )

let input = "21*  2 ,\n 2,2";

let x = new Lexer("test", input).make_tokens();
if (x[1] === null) {
    console.log("     no errors");
} else {
    console.log(" --- ERRORS ---")
    console.debug(x[1]);
    display_error(x[1]);
}
console.debug(x[0]);

console.log("===");
console.log(input);
console.log("===");
console.log(stringifyTokens(x[0]));

console.log();