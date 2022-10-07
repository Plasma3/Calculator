"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RTError = exports.UnsupportedOperationError = exports.InvalidSyntaxError = exports.IllegalCharError = exports.throw_error = void 0;
var constants_1 = require("../lexer/constants");
function throw_error(err, script, current_line) {
    if (current_line === void 0) { current_line = false; }
    console.error(constants_1.PAM_CONSOLE_IDENTITY + "".concat(err.location.context, ":").concat(err.location.line, ":").concat(err.location.colum, ": ").concat(err.errorKind, ": ").concat(err.details));
    var line = "";
    if (current_line) {
        if (typeof script === "string") {
            line = script;
        }
    }
    else {
        if (err.location.multiline) {
            console.error(constants_1.PAM_CONSOLE_IDENTITY + "/errors.ts IMPLEMENTATION_ERROR: Can't display multiline error yet");
            return;
        }
        var lines = (typeof script === "string") ? script.split('\n') : script;
        line = lines[err.location.line];
    }
    var subline = constants_1.PAM_CONSOLE_IDENTITY + ' '.repeat(err.location.colum) + '^'.repeat(1 + err.location.end_col - err.location.colum);
    // let subline = ' '.repeat(err.location.colum - 1) + '^'.repeat(1 + err.location.colum - err.location.end_col)
    console.error(constants_1.PAM_CONSOLE_IDENTITY + "".concat(line));
    console.error("".concat(subline));
}
exports.throw_error = throw_error;
var IllegalCharError = /** @class */ (function () {
    function IllegalCharError(location, details) {
        this.location = location;
        this.details = details;
        this.errorKind = "IllegalCharError";
    }
    ;
    return IllegalCharError;
}());
exports.IllegalCharError = IllegalCharError;
;
var InvalidSyntaxError = /** @class */ (function () {
    function InvalidSyntaxError(location, details) {
        this.location = location;
        this.details = details;
        this.errorKind = "InvalidSyntaxError";
    }
    ;
    return InvalidSyntaxError;
}());
exports.InvalidSyntaxError = InvalidSyntaxError;
;
var UnsupportedOperationError = /** @class */ (function () {
    function UnsupportedOperationError(location, details) {
        this.location = location;
        this.details = details;
        this.errorKind = "UnsupportedOperationError";
    }
    ;
    return UnsupportedOperationError;
}());
exports.UnsupportedOperationError = UnsupportedOperationError;
;
var RTError = /** @class */ (function () {
    function RTError(location, details) {
        this.location = location;
        this.details = details;
        this.errorKind = "IllegalCharError";
    }
    ;
    return RTError;
}());
exports.RTError = RTError;
;
//# sourceMappingURL=errors.js.map