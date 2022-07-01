"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_OP_TOKENS = exports.DIGITS_DOT = exports.LETTERS_DIGITS = exports.LETTERS = exports.DIGITS = exports.EMPTY_SKIP = exports.NEWLINE = exports.DOT = void 0;
const tokens_1 = require("../tokens/tokens");
exports.DOT = ".";
exports.NEWLINE = "\n";
exports.EMPTY_SKIP = " \t";
exports.DIGITS = "1234567890";
exports.LETTERS = "abcdefghijklmnopqrstuvwxyz";
exports.LETTERS_DIGITS = exports.DIGITS + exports.LETTERS;
exports.DIGITS_DOT = exports.DIGITS + exports.DOT;
exports.SIMPLE_OP_TOKENS = new Map([
    ["+", tokens_1.TT.PLUS],
    ["-", tokens_1.TT.MINUS],
    ["*", tokens_1.TT.MUL],
    ["/", tokens_1.TT.DIV],
    ["^", tokens_1.TT.POW],
    ["(", tokens_1.TT.lPAREN],
    [")", tokens_1.TT.rPAREN],
    ["\n", tokens_1.TT.EOL],
    ["\t", tokens_1.TT.TAB]
]);
//# sourceMappingURL=constants.js.map