import { TokenKind } from "./token";

export const PAM_CONSOLE_IDENTITY = "[PAM] : ";

export const DOT = ".";
export const NEWLINE = "\n"
export const EMPTY_SKIP = " \t"
export const DIGITS = "1234567890"
export const LETTERS = "abcdefghijklmnopqrstuvwxyz"

export const LETTERS_DIGITS = DIGITS + LETTERS
export const DIGITS_DOT = DIGITS + DOT;

export const SIMPLE_TOKEN_IDENTIFIERS = new Map<string, TokenKind>([
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