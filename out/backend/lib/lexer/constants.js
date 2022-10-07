import { TokenKind } from "../tokens/token";
export var PAM_CONSOLE_IDENTITY = "[PAM] : ";
export var DOT = ".";
export var NEWLINE = "\n";
export var EMPTY_SKIP = " \t";
export var DIGITS = "1234567890";
export var LETTERS = "abcdefghijklmnopqrstuvwxyz";
export var UNDERLINE = "_";
export var LETTERS_DIGITS = DIGITS + LETTERS;
export var DIGITS_DOT = DIGITS + DOT;
export var WORD_START = LETTERS + UNDERLINE;
export var WORD_LETTERS = LETTERS_DIGITS + UNDERLINE;
export var SIMPLE_TOKEN_IDENTIFIERS = new Map([
    ["+", TokenKind.Plus],
    ["-", TokenKind.Minus],
    ["*", TokenKind.Mul],
    ["/", TokenKind.Div],
    ["^", TokenKind.Pow],
    ["(", TokenKind.OpenParen],
    [")", TokenKind.CloseParen],
    ["=", TokenKind.Equal],
    [",", TokenKind.Comma],
    ["\n", TokenKind.EOL],
    ["\t", TokenKind.TAB],
]);
//# sourceMappingURL=constants.js.map