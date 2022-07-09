"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const errors_1 = require("./errors");
const position_1 = require("./position");
const token_1 = require("./token");
class Lexer {
    line = "";
    current_char = null;
    next_char = null;
    previous_char = null;
    iter = (0, position_1.getPos)('', 0, 0, 0);
    // private line_index: number = 0;
    lex_file(filepath) {
        let file = ""; // TODO: #12 Add file loading
        return this.lex_string(filepath, file);
    }
    lex_string(context, script) {
        this.iter.context = context;
        let lines = script.split('\n');
        let acc_index = 0;
        let line_tokens = [];
        let tokens = [];
        let line_number = 0;
        for (let line of lines) {
            line_tokens = this.lex_line(line_number, acc_index, line);
            if (Array.isArray(line_tokens)) {
                tokens.push(...line_tokens);
            }
            else {
                return [tokens, line_tokens];
            }
            acc_index += line.length + 1;
            line_number++;
        }
        // lines.forEach((line, line_number) => { // TODO Rewrite for-loop so it can call return on line 36 and exit this.lex_string()
        // 	line_tokens = this.lex_line(line_number, acc_index, line);
        // 	if (Array.isArray(line_tokens)) {
        // 		tokens.push(...line_tokens);
        // 	}
        // 	else {
        // 		return [tokens, line_tokens]
        // 	}
        // });
        tokens.push({
            tokenKind: token_1.TokenKind.EOF,
            location: new position_1.Location(this.iter, this.iter.colum)
        });
        return [tokens, null];
    }
    lex_line(line_number, acc_offset, line) {
        let tokens = [];
        this.init_line(line_number, acc_offset, line);
        while (this.current_char !== null) {
            if (this.match(constants_1.EMPTY_SKIP)) { }
            else if (this.match(constants_1.DIGITS_DOT)) {
                tokens.push(this.make_number());
            }
            else if (constants_1.SIMPLE_TOKEN_IDENTIFIERS.has(this.current_char)) {
                tokens.push({
                    tokenKind: constants_1.SIMPLE_TOKEN_IDENTIFIERS.get(this.current_char),
                    location: new position_1.Location(this.iter, this.iter.colum),
                    value: this.current_char
                });
            }
            else {
                let err = new errors_1.IllegalCharError(this.loc_current_char(), `"${this.current_char}"`);
                (0, errors_1.throw_error)(err, line, true);
                return err;
            }
            this.advance();
        }
        tokens.push({
            tokenKind: token_1.TokenKind.EOL,
            location: new position_1.Location(this.iter, this.iter.colum)
        });
        return tokens;
    }
    init_line(line_number, acc_offset, line) {
        if (line.length > 0) {
            this.previous_char = null;
            this.current_char = line[0];
            if (line.length > 1) {
                this.next_char = line[1];
            }
            this.line = line;
            this.iter.index = acc_offset;
            this.iter.line = line_number;
            this.iter.colum = 0;
        }
    }
    ;
    advance() {
        this.iter.index += 1;
        this.iter.colum += 1;
        this.previous_char = this.current_char;
        if (this.iter.colum < this.line.length) {
            this.current_char = this.line[this.iter.colum];
            if (this.iter.colum + 1 < this.line.length) {
                this.next_char = this.line[this.iter.colum + 1];
            }
            else {
                this.next_char = null;
            }
        }
        else {
            this.current_char = null;
        }
    }
    ;
    match(pattern) {
        return ((this.current_char === null) ? false : pattern.includes(this.current_char));
    }
    ;
    loc_current_char() {
        return new position_1.Location(this.iter, this.iter.colum);
    }
    make_number() {
        let num_str = '';
        let dot_count = false;
        let pos_start = { ...this.iter };
        let continue_loop = false;
        do {
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
            continue_loop = false;
            if (this.next_char && constants_1.DIGITS_DOT.includes(this.next_char)) {
                this.advance();
                continue_loop = true;
            }
        } while (continue_loop);
        return {
            tokenKind: (dot_count) ? token_1.TokenKind.FLOAT : token_1.TokenKind.INT,
            location: new position_1.Location(pos_start, this.iter.colum),
            value: num_str
        };
    }
    ;
}
exports.default = Lexer;
//# sourceMappingURL=lexer-rewrite.js.map