"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = __importDefault(require("./lib/lexer/lexer"));
var token_1 = require("./lib/tokens/token");
function calc(input) {
    // let input =
    // `2+ 5 -2(2*2+2)=123
    // 2 3,2.1
    // 5-2^2-23+2.2=2`;
    var ctx = "<TEST:helloworld.ts>";
    console.group("New instance of ".concat(ctx, " at ").concat((new Date()).toLocaleString()));
    console.log("> ".concat(input));
    console.log("===");
    var lexer = new lexer_1.default();
    var x = lexer.lex_string(ctx, input);
    var output = "";
    if (x[1] === null) {
        console.log("     no errors");
        console.log("===");
        output = (0, token_1.stringifyTokens)(x[0]);
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
exports.default = calc;
//# sourceMappingURL=calc.js.map