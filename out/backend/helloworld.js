"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lexer_rewrite_1 = __importDefault(require("./lib/lexer-rewrite/lexer-rewrite"));
const token_1 = require("./lib/lexer-rewrite/token");
let input = `2+ 5 -2(2*2+2)=123
23,
2.1
5-2^2-23+2.2=2`;
console.log(input);
console.log("\n===\n");
const ctx = "<TEST:helloworld.ts>";
const lexer = new lexer_rewrite_1.default();
let x = lexer.lex_string(ctx, input);
if (x[1] === null) {
    console.log("     no errors");
}
else {
    console.error("\n --- ERRORS ---");
    console.debug(x[1]);
}
console.log("\n===\n");
console.log((0, token_1.stringifyTokens)(x[0]));
//# sourceMappingURL=helloworld.js.map