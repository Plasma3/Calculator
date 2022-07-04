"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_TOKEN_IDENTIFIERS = exports.DIGITS_DOT = exports.LETTERS_DIGITS = exports.LETTERS = exports.DIGITS = exports.EMPTY_SKIP = exports.NEWLINE = exports.DOT = void 0;
const tokens_1 = require("../tokens/tokens");
exports.DOT = ".";
exports.NEWLINE = "\n";
exports.EMPTY_SKIP = " \t";
exports.DIGITS = "1234567890";
exports.LETTERS = "abcdefghijklmnopqrstuvwxyz";
exports.LETTERS_DIGITS = exports.DIGITS + exports.LETTERS;
exports.DIGITS_DOT = exports.DIGITS + exports.DOT;
exports.SIMPLE_TOKEN_IDENTIFIERS = new Map([
    ["+", tokens_1.TT.Plus],
    ["-", tokens_1.TT.Minus],
    ["*", tokens_1.TT.Mul],
    ["/", tokens_1.TT.Div],
    ["^", tokens_1.TT.Pow],
    ["(", tokens_1.TT.OpenParen],
    [")", tokens_1.TT.CloseParen],
    ["\n", tokens_1.TT.EOL],
    ["\t", tokens_1.TT.TAB]
]);
//# sourceMappingURL=constants.js.map