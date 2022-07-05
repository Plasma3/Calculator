import { TT } from "../tokens/tokens";

export const DOT 		= ".";
export const NEWLINE 	= "\n"
export const EMPTY_SKIP = " \t"
export const DIGITS 	= "1234567890"
export const LETTERS 	= "abcdefghijklmnopqrstuvwxyz"

export const LETTERS_DIGITS = DIGITS + LETTERS
export const DIGITS_DOT = DIGITS + DOT;

export const SIMPLE_TOKEN_IDENTIFIERS = new Map<string, TT>([
	["+", TT.Plus],
	["-", TT.Minus], 
	
	["*", TT.Mul],
	["/", TT.Div],
	
	["^", TT.Pow],

	["(", TT.OpenParen],
	[")", TT.CloseParen],

    ["\n", TT.EOL],
    ["\t", TT.TAB]
]);