import { Location } from "./position";

export type Tokens = Token[];
export enum TokenKind {
    INT, FLOAT,

    Plus, Minus, Mul, Div, Pow,

    OpenParen, CloseParen,

    EOL, EOF, TAB
}

export type Token = {
    tokenKind: TokenKind;
    location: Location;
    value?: string;
}