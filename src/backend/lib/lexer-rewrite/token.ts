import { Location } from "./position";

export type Tokens = Token[];
export enum TokenKind {
    INT, FLOAT,

    Plus, Minus, Mul, Div, Pow,

    OpenParen, CloseParen,

    Equal, Comma,

    EOL, EOF, TAB
}

export type Token = {
    tokenKind: TokenKind;
    location: Location;
    value?: string;
}

export function stringifyTokens(tokens: Tokens): string {
	let out = '';
	tokens.forEach(i => {
		if (i.tokenKind === TokenKind.EOF) { out += "\n" }
		else if (i.tokenKind === TokenKind.EOL) { out += '\n' }
        else {
            out += ((i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) ? i.value : TokenKind[i.tokenKind]) + ' '
        }
		// else if (i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) {
		// 	out += i.value + ' ';	
		// } else {
		// 	out += TokenKind[i.tokenKind] + ' ';
		// }
	});
	return out;
}