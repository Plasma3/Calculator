import { PAM_CONSOLE_IDENTITY } from "../lexer/constants";
export function throw_error(err, script, current_line) {
    if (current_line === void 0) { current_line = false; }
    console.error(PAM_CONSOLE_IDENTITY + "".concat(err.location.context, ":").concat(err.location.line, ":").concat(err.location.colum, ": ").concat(err.errorKind, ": ").concat(err.details));
    var line = "";
    if (current_line) {
        if (typeof script === "string") {
            line = script;
        }
    }
    else {
        if (err.location.multiline) {
            console.error(PAM_CONSOLE_IDENTITY + "/errors.ts IMPLEMENTATION_ERROR: Can't display multiline error yet");
            return;
        }
        var lines = (typeof script === "string") ? script.split('\n') : script;
        line = lines[err.location.line];
    }
    var subline = PAM_CONSOLE_IDENTITY + ' '.repeat(err.location.colum) + '^'.repeat(1 + err.location.end_col - err.location.colum);
    // let subline = ' '.repeat(err.location.colum - 1) + '^'.repeat(1 + err.location.colum - err.location.end_col)
    console.error(PAM_CONSOLE_IDENTITY + "".concat(line));
    console.error("".concat(subline));
}
var IllegalCharError = /** @class */ (function () {
    function IllegalCharError(location, details) {
        this.location = location;
        this.details = details;
        this.errorKind = "IllegalCharError";
    }
    ;
    return IllegalCharError;
}());
export { IllegalCharError };
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
export { InvalidSyntaxError };
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
export { UnsupportedOperationError };
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
export { RTError };
;
//# sourceMappingURL=errors.js.map