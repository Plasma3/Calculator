"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_TOKEN_IDENTIFIERS = exports.DIGITS_DOT = exports.LETTERS_DIGITS = exports.LETTERS = exports.DIGITS = exports.EMPTY_SKIP = exports.NEWLINE = exports.DOT = exports.PAM_CONSOLE_IDENTITY = void 0;
const token_1 = require("./token");
exports.PAM_CONSOLE_IDENTITY = "[PAM] : ";
exports.DOT = ".";
exports.NEWLINE = "\n";
exports.EMPTY_SKIP = " \t";
exports.DIGITS = "1234567890";
exports.LETTERS = "abcdefghijklmnopqrstuvwxyz";
exports.LETTERS_DIGITS = exports.DIGITS + exports.LETTERS;
exports.DIGITS_DOT = exports.DIGITS + exports.DOT;
exports.SIMPLE_TOKEN_IDENTIFIERS = new Map([
    ["+", token_1.TokenKind.Plus],
    ["-", token_1.TokenKind.Minus],
    ["*", token_1.TokenKind.Mul],
    ["/", token_1.TokenKind.Div],
    ["^", token_1.TokenKind.Pow],
    ["(", token_1.TokenKind.OpenParen],
    [")", token_1.TokenKind.CloseParen],
    ["\n", token_1.TokenKind.EOL],
    ["\t", token_1.TokenKind.TAB]
]);
//# sourceMappingURL=constants.js.map