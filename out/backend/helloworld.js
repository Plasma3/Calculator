"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_1 = require("./lib/lexer/lexer");
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
let input = "2* 2 +\t2  (4-2) ^   2 \n 1+1";
let x = new lexer_1.Lexer("test", input).make_tokens();
if (x[1] === null) {
    console.log("     no errors");
}
else {
    console.log(" --- ERRORS ---");
    console.debug(x[1]);
}
console.debug(x[0]);
console.log("===");
console.log(input);
console.log("===");
console.log((0, lexer_1.stringifyTokens)(x[0]));
console.log();
//# sourceMappingURL=helloworld.js.map