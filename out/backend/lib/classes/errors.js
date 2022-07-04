"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTError = exports.UnsupportedOperationError = exports.InvalidSyntaxError = exports.IllegalCharError = exports.display_error = exports.stringifyError = void 0;
function stringifyError(err) {
    return `${err.error_type}: ${err.details} at line ${err.pos_start.line} colum ${err.pos_start.colum}`;
    return err.error_type + ': ' + err.details + '\n';
}
exports.stringifyError = stringifyError;
function string_with_arrows(text, pos_start, pos_end) {
    let line = text.split('\n')[pos_start.line];
    let subline = ' '.repeat(pos_start.colum - 1) + '^'.repeat(1 + pos_end.colum - pos_start.colum);
    return `${line}\n${subline}`;
}
function display_error(err) {
    console.log(stringifyError(err));
    console.log(string_with_arrows(err.pos_start.script, err.pos_start, err.pos_end));
}
exports.display_error = display_error;
// class TemplateError implements ErrorBase {
//     error_type: string;
//     constructor(
//         public pos_start: Position, public pos_end: Position, public details: string
//     ) {this.error_type = "";}
// };
class IllegalCharError {
    pos_start;
    pos_end;
    details;
    error_type;
    constructor(pos_start, pos_end, details) {
        this.pos_start = pos_start;
        this.pos_end = pos_end;
        this.details = details;
        this.error_type = 'Illegal Character';
    }
}
exports.IllegalCharError = IllegalCharError;
;
class InvalidSyntaxError {
    pos_start;
    pos_end;
    details;
    error_type;
    constructor(pos_start, pos_end, details) {
        this.pos_start = pos_start;
        this.pos_end = pos_end;
        this.details = details;
        this.error_type = 'Invalid Syntax';
    }
}
exports.InvalidSyntaxError = InvalidSyntaxError;
;
class UnsupportedOperationError {
    pos_start;
    pos_end;
    details;
    error_type;
    constructor(pos_start, pos_end, details) {
        this.pos_start = pos_start;
        this.pos_end = pos_end;
        this.details = details;
        this.error_type = 'Unsupported Operation';
    }
}
exports.UnsupportedOperationError = UnsupportedOperationError;
;
class RTError {
    pos_start;
    pos_end;
    details;
    context;
    error_type;
    constructor(pos_start, pos_end, details, context) {
        this.pos_start = pos_start;
        this.pos_end = pos_end;
        this.details = details;
        this.context = context;
        this.error_type = 'Runtime Error';
    }
}
exports.RTError = RTError;
;
//# sourceMappingURL=errors.js.map