"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTError = exports.UnsupportedOperationError = exports.InvalidSyntaxError = exports.IllegalCharError = exports.throw_error = void 0;
const constants_1 = require("./constants");
function throw_error(err, script) {
    console.error(constants_1.PAM_CONSOLE_IDENTITY + `${err.location.context}:${err.location.line}:${err.location.colum}: ${err.errorKind}: ${err.details}`);
    if (err.location.multiline) {
        console.error(constants_1.PAM_CONSOLE_IDENTITY + "/errors.ts IMPLEMENTATION_ERROR: Can't display multiline error yet");
        return;
    }
    let lines = (typeof script === "string") ? script.split('\n') : script;
    let line = lines[err.location.line];
    let subline = constants_1.PAM_CONSOLE_IDENTITY + ' '.repeat(err.location.colum) + '^'.repeat(1 + err.location.end_col - err.location.colum);
    // let subline = ' '.repeat(err.location.colum - 1) + '^'.repeat(1 + err.location.colum - err.location.end_col)
    console.error(constants_1.PAM_CONSOLE_IDENTITY + `${line}\n${subline}`);
}
exports.throw_error = throw_error;
class IllegalCharError {
    location;
    details;
    errorKind = "IllegalCharError";
    constructor(location, details) {
        this.location = location;
        this.details = details;
    }
    ;
}
exports.IllegalCharError = IllegalCharError;
;
class InvalidSyntaxError {
    location;
    details;
    errorKind = "InvalidSyntaxError";
    constructor(location, details) {
        this.location = location;
        this.details = details;
    }
    ;
}
exports.InvalidSyntaxError = InvalidSyntaxError;
;
class UnsupportedOperationError {
    location;
    details;
    errorKind = "UnsupportedOperationError";
    constructor(location, details) {
        this.location = location;
        this.details = details;
    }
    ;
}
exports.UnsupportedOperationError = UnsupportedOperationError;
;
class RTError {
    location;
    details;
    errorKind = "IllegalCharError";
    constructor(location, details) {
        this.location = location;
        this.details = details;
    }
    ;
}
exports.RTError = RTError;
;
//# sourceMappingURL=errors.js.map