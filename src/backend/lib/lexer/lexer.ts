import { ErrorBase, IllegalCharError } from "../classes/errors";
import { Position } from "../classes/position";
import { Token, Tokens, TT } from "../tokens/tokens";
import { DIGITS, DIGITS_DOT, DOT, EMPTY_SKIP, SIMPLE_TOKEN_IDENTIFIERS } from "./constants";

export type LexerResult = [Tokens, ErrorBase | null]
export class Lexer {
    iter: Position;
    char_current: string | null = null;
    char_next: string | null = null;
    sub_skiped: boolean = false;

    constructor(
        context: string,
        script: string
    ) {
        this.iter = new Position(-1, 0, -1, context, script);
        this._advance();
    }
    _sub_advance() {
        this.sub_skiped = true;
        this._advance();
    }
    _advance() {
        this.iter.advance();
        this.char_current = (
            (this.iter.index < this.iter.script.length) ?
            this.iter.script[this.iter.index] : null
        )
        this.char_next = (
            (this.iter.index + 1 < this.iter.script.length) ?
            this.iter.script[this.iter.index + 1] : null
        )
    }
    _match(pattern: string): boolean {
        return ((this.char_current === null) ? false : pattern.includes(this.char_current))
    }
    _make_number():Token {
        let num_str = '';
        let dot_count = false;
        let pos_start = this.iter;
        let continue_loop = false;

        do {
            if (this.char_current === DOT) {
                if (dot_count) {break;}
                dot_count = true;
                num_str += DOT;
            } else {
                num_str += this.char_current;
            }
            continue_loop = false;
            if (this.char_next && DIGITS_DOT.includes(this.char_next))
            {
                this._advance();
                continue_loop = true;
            }
        }
        while (continue_loop);
        return new Token((dot_count) ? TT.FLOAT : TT.INT, num_str, pos_start, this.iter)
    }

    make_tokens(): LexerResult {
        let tokens: Tokens = []

        while (this.char_current !== null) {
            if (this._match(EMPTY_SKIP)) {
                tokens;
            } 
            else if (this._match(DIGITS)) {
                tokens.push(this._make_number());
            } 
            else if (SIMPLE_TOKEN_IDENTIFIERS.has(this.char_current)) {
                tokens.push(new Token(SIMPLE_TOKEN_IDENTIFIERS.get(this.char_current)!, this.iter));
            } 
            else {
                let pos_start = this.iter;
                let char = this.char_current;
                this._advance();
                return [[], new IllegalCharError(pos_start, this.iter, '"' + char + '"')]
            }

            // Check if other parts of lexer has peek next character
            (this.sub_skiped) ? this.sub_skiped = false : this._advance()
        }

        tokens.push(new Token(TT.EOF, this.iter))
        return [tokens, null];
    }
}

export function stringifyTokens(tokens: Tokens): string {
    let out = '';
    tokens.forEach(i => {
        out += i.value + ' ';
        if (i.tokenType == TT.EOF) {out += "\n"}
        if (i.tokenType == TT.EOL) {out += '\n'}
    });
    return out;
}