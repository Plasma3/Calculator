"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const position_1 = require("./position");
const token_1 = require("./token");
class Lexer {
    lex_file(filepath) {
        let file = ""; // TODO: #12 Add file loading
        return this.lex_string(filepath, file);
    }
    lex_string(context, script) {
        return [[{ location: new position_1.Location((0, position_1.getPos)("", 0, 0, 0), 0), tokenKind: token_1.TokenKind.Div, value: context }], null];
        return [[], null];
    }
    lex_line(n, line) {
        return;
    }
}
exports.default = Lexer;
const lexer = new Lexer();
let x = lexer.lex_file("aiusdgasid");
let y = lexer.lex_file("oaisdiaushd");
console.debug(x[0][0]);
console.debug(y[0][0]);
x;
//# sourceMappingURL=lexer-rewrite.js.map