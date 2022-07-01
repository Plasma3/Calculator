"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTError = exports.UnsupportedOperationError = exports.InvalidSyntaxError = exports.IllegalCharError = void 0;
// class TemplateError implements ErrorBase {
//     error_type: string;
//     constructor(
//         public pos_start: Position, public pos_end: Position, public details: string
//     ) {this.error_type = "";}
// };
class IllegalCharError {
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