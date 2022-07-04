"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyTokens = exports.Lexer = void 0;
const errors_1 = require("../classes/errors");
const position_1 = require("../classes/position");
const tokens_1 = require("../tokens/tokens");
const constants_1 = require("./constants");
class Lexer {
    iter;
    char_current = null;
    char_next = null;
    sub_skiped = false;
    constructor(context, script) {
        this.iter = new position_1.Position(-1, 0, -1, context, script);
        this._advance();
    }
    _sub_advance() {
        this.sub_skiped = true;
        this._advance();
    }
    _advance() {
        this.iter.advance();
        this.char_current = ((this.iter.index < this.iter.script.length) ?
            this.iter.script[this.iter.index] : null);
        this.char_next = ((this.iter.index + 1 < this.iter.script.length) ?
            this.iter.script[this.iter.index + 1] : null);
    }
    _match(pattern) {
        return ((this.char_current === null) ? false : pattern.includes(this.char_current));
    }
    _make_number() {
        let num_str = '';
        let dot_count = false;
        let pos_start = this.iter;
        let continue_loop = false;
        do {
            if (this.char_current === constants_1.DOT) {
                if (dot_count) {
                    break;
                }
                dot_count = true;
                num_str += constants_1.DOT;
            }
            else {
                num_str += this.char_current;
            }
            continue_loop = false;
            if (this.char_next && constants_1.DIGITS_DOT.includes(this.char_next)) {
                this._advance();
                continue_loop = true;
            }
        } while (continue_loop);
        return new tokens_1.Token((dot_count) ? tokens_1.TT.FLOAT : tokens_1.TT.INT, num_str, pos_start, this.iter);
    }
    make_tokens() {
        let tokens = [];
        while (this.char_current !== null) {
            if (this._match(constants_1.EMPTY_SKIP)) {
                tokens;
            }
            else if (this._match(constants_1.DIGITS)) {
                tokens.push(this._make_number());
            }
            else if (constants_1.SIMPLE_TOKEN_IDENTIFIERS.has(this.char_current)) {
                tokens.push(new tokens_1.Token(constants_1.SIMPLE_TOKEN_IDENTIFIERS.get(this.char_current), this.iter));
            }
            else {
                let pos_start = this.iter;
                let char = this.char_current;
                this._advance();
                return [[], new errors_1.IllegalCharError(pos_start, this.iter, '"' + char + '"')];
            }
            // Check if other parts of lexer has peek next character
            (this.sub_skiped) ? this.sub_skiped = false : this._advance();
        }
        tokens.push(new tokens_1.Token(tokens_1.TT.EOF, this.iter));
        return [tokens, null];
    }
}
exports.Lexer = Lexer;
function stringifyTokens(tokens) {
    let out = '';
    tokens.forEach(i => {
        out += i.value + ' ';
        if (i.tokenType == tokens_1.TT.EOF) {
            out += "\n";
        }
        if (i.tokenType == tokens_1.TT.EOL) {
            out += '\n';
        }
    });
    return out;
}
exports.stringifyTokens = stringifyTokens;
//# sourceMappingURL=lexer.js.map