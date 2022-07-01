import { ErrorBase, IllegalCharError } from "../classes/errors";
import { Position } from "../classes/position";
import { Token, Tokens, TT } from "../tokens/tokens";
import { DIGITS, DIGITS_DOT, DOT, EMPTY_SKIP, SIMPLE_OP_TOKENS } from "./constants";

export type LexerResult = [Tokens, ErrorBase | null]
export class Lexer {
    iter: Position;
    current_char: string | null = null;
    sub_skiped: boolean = false;

    constructor(
        context: string,
        script: string
    ) {
        this.iter = new Position(-1, 0, -1, context, script);
        this._advance();
    }
    _full_advance() {
        if (this.sub_skiped) {
            this.sub_skiped = false;
        } else {
            this._advance();
        }
    }
    _sub_advance() {
        this.sub_skiped = true;
        this._advance();
    }
    _advance() {
        this.iter.advance();
        this.current_char = (
            (this.iter.index < this.iter.script.length) ?
            this.iter.script[this.iter.index] : null
        )
    }
    _match(pattern: string): boolean {
        return ((this.current_char === null) ? false : pattern.includes(this.current_char))
    }
    _make_number():Token {
        let num_str = '';
        let dot_count = false;
        let pos_start = this.iter;

        while (this.current_char && DIGITS_DOT.includes(this.current_char)) {
            if (this.current_char === DOT) {
                if (dot_count) {break;}
                dot_count = true;
                num_str += DOT;
            } else {
                num_str += this.current_char;
            }
            this._sub_advance();
        }
        return new Token((dot_count) ? TT.FLOAT : TT.INT, num_str, pos_start, this.iter)
    }

    make_tokens(): LexerResult {
        let tokens: Tokens = []

        while (this.current_char !== null) {
            if (this._match(DIGITS)) {
                tokens.push(this._make_number());
            } else if (SIMPLE_OP_TOKENS.has(this.current_char)) {
                tokens.push(new Token(SIMPLE_OP_TOKENS.get(this.current_char)!, this.iter));
            } else if (this._match(EMPTY_SKIP)) {

            } else {
                let pos_start = this.iter;
                let char = this.current_char;
                this._advance();
                return [[], new IllegalCharError(pos_start, this.iter, '"' + char + '"')]
            }
            this._full_advance();
        }

        tokens.push(new Token(TT.EOF, this.iter))
        return [tokens, null];
    }
}

export function stringifyTokens(tokens: Tokens): string {
    let out = '';
    tokens.forEach(i => {
        if (i.tokenType == TT.EOF) {out += "\n"}
        out += i.value + ' ';
        if (i.tokenType == TT.EOL) {out += '\n'}
    });
    return out;
}