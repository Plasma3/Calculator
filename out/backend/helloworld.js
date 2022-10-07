"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lexer_1 = __importDefault(require("./lib/lexer/lexer"));
var parser_1 = __importDefault(require("./lib/parser/parser"));
var token_1 = require("./lib/tokens/token");
var input = "2+ 5 -2(2*2+2)=123\n2 3,2.1\n5-2^2-23+2.2=2";
input = "2+5-2*3";
console.log(input);
console.log("===\n");
var ctx = "<TEST:helloworld.ts>";
var lexer = new lexer_1.default();
var x = lexer.lex_string(ctx, input);
if (x[1] === null) {
    console.log("     no errors");
}
else {
    console.error("\n --- ERRORS ---");
    console.debug(x[1]);
}
console.log("\n===");
console.log((0, token_1.stringifyTokens)(x[0]));
var parser = new parser_1.default();
var ast = parser.parseTokens(ctx, x[0]);
console.log(ast);
//# sourceMappingURL=helloworld.js.map