"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyTokens = exports.Lexer = void 0;
const errors_1 = require("../classes/errors");
const position_1 = require("../classes/position");
const tokens_1 = require("../tokens/tokens");
const constants_1 = require("./constants");
class Lexer {
    constructor(context, script) {
        this.current_char = null;
        this.sub_skiped = false;
        this.iter = new position_1.Position(-1, 0, -1, context, script);
        this._advance();
    }
    _full_advance() {
        if (this.sub_skiped) {
            this.sub_skiped = false;
        }
        else {
            this._advance();
        }
    }
    _sub_advance() {
        this.sub_skiped = true;
        this._advance();
    }
    _advance() {
        this.iter.advance();
        this.current_char = ((this.iter.index < this.iter.script.length) ?
            this.iter.script[this.iter.index] : null);
    }
    _match(pattern) {
        return ((this.current_char === null) ? false : pattern.includes(this.current_char));
    }
    _make_number() {
        let num_str = '';
        let dot_count = false;
        let pos_start = this.iter;
        while (this.current_char && constants_1.DIGITS_DOT.includes(this.current_char)) {
            if (this.current_char === constants_1.DOT) {
                if (dot_count) {
                    break;
                }
                dot_count = true;
                num_str += constants_1.DOT;
            }
            else {
                num_str += this.current_char;
            }
            this._sub_advance();
        }
        return new tokens_1.Token((dot_count) ? tokens_1.TT.FLOAT : tokens_1.TT.INT, num_str, pos_start, this.iter);
    }
    make_tokens() {
        let tokens = [];
        while (this.current_char !== null) {
            if (this._match(constants_1.DIGITS)) {
                tokens.push(this._make_number());
            }
            else if (constants_1.SIMPLE_OP_TOKENS.has(this.current_char)) {
                tokens.push(new tokens_1.Token(constants_1.SIMPLE_OP_TOKENS.get(this.current_char), this.iter));
            }
            else if (this._match(constants_1.EMPTY_SKIP)) {
            }
            else {
                let pos_start = this.iter;
                let char = this.current_char;
                this._advance();
                return [[], new errors_1.IllegalCharError(pos_start, this.iter, '"' + char + '"')];
            }
            this._full_advance();
        }
        tokens.push(new tokens_1.Token(tokens_1.TT.EOF, this.iter));
        return [tokens, null];
    }
}
exports.Lexer = Lexer;
function stringifyTokens(tokens) {
    let out = '';
    tokens.forEach(i => {
        if (i.tokenType == tokens_1.TT.EOF) {
            out += "\n";
        }
        out += i.value + ' ';
        if (i.tokenType == tokens_1.TT.EOL) {
            out += '\n';
        }
    });
    return out;
}
exports.stringifyTokens = stringifyTokens;
//# sourceMappingURL=lexer.js.map