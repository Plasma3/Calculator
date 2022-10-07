"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var errors_1 = require("../classes/errors");
var position_1 = require("../classes/position");
var token_1 = require("../tokens/token");
var Lexer = /** @class */ (function () {
    function Lexer() {
        this.line = "";
        this.current_char = null;
        this.next_char = null;
        this.previous_char = null;
        this.iter = (0, position_1.getPos)('', 0, 0, 0);
    }
    // private line_index: number = 0;
    Lexer.prototype.lex_file = function (filepath) {
        var file = ""; // TODO: #12 Add file loading
        return this.lex_string(filepath, file);
    };
    Lexer.prototype.lex_string = function (context, script) {
        this.iter.context = context;
        var lines = script.split('\n');
        var acc_index = 0;
        var line_tokens = [];
        var tokens = [];
        var line_number = 0;
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            line_tokens = this.lex_line(line_number, acc_index, line);
            if (Array.isArray(line_tokens)) {
                tokens.push.apply(tokens, line_tokens);
            }
            else {
                return [tokens, line_tokens];
            }
            acc_index += line.length + 1;
            line_number++;
        }
        tokens.push({
            tokenKind: token_1.TokenKind.EOF,
            location: new position_1.Location(this.iter, this.iter.colum)
        });
        return [tokens, null];
    };
    Lexer.prototype.lex_line = function (line_number, acc_offset, line) {
        var tokens = [];
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
                var err = new errors_1.IllegalCharError(this.loc_current_char(), "\"".concat(this.current_char, "\""));
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
    };
    Lexer.prototype.init_line = function (line_number, acc_offset, line) {
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
    };
    ;
    Lexer.prototype.advance = function () {
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
    };
    ;
    Lexer.prototype.match = function (pattern) {
        return ((this.current_char === null) ? false : pattern.includes(this.current_char));
    };
    ;
    Lexer.prototype.loc_current_char = function () {
        return new position_1.Location(this.iter, this.iter.colum);
    };
    Lexer.prototype.make_number = function () {
        var num_str = '';
        var dot_count = false;
        var pos_start = __assign({}, this.iter);
        var continue_loop = false;
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
    };
    ;
    return Lexer;
}());
exports.default = Lexer;
//# sourceMappingURL=lexer.js.map