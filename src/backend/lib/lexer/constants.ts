import { TT } from "../tokens/tokens";

export const DOT = ".";
export const NEWLINE = "\n"
export const EMPTY_SKIP = " \t"
export const DIGITS = "1234567890"
export const LETTERS = "abcdefghijklmnopqrstuvwxyz"

export const LETTERS_DIGITS = DIGITS + LETTERS
export const DIGITS_DOT = DIGITS + DOT;

export const SIMPLE_OP_TOKENS = new Map<string, TT>([
	["+", TT.PLUS],
	["-", TT.MINUS], 
	
	["*", TT.MUL],
	["/", TT.DIV],
	
	["^", TT.POW],

	["(", TT.lPAREN],
	[")", TT.rPAREN],

    ["\n", TT.EOL],
    ["\t", TT.TAB]
]);