"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TT = void 0;
var position_1 = require("../classes/position");
var TT;
(function (TT) {
    TT[TT["INT"] = 0] = "INT";
    TT[TT["FLOAT"] = 1] = "FLOAT";
    TT[TT["PLUS"] = 2] = "PLUS";
    TT[TT["MINUS"] = 3] = "MINUS";
    TT[TT["MUL"] = 4] = "MUL";
    TT[TT["DIV"] = 5] = "DIV";
    TT[TT["POW"] = 6] = "POW";
    TT[TT["lPAREN"] = 7] = "lPAREN";
    TT[TT["rPAREN"] = 8] = "rPAREN";
    TT[TT["EOL"] = 9] = "EOL";
    TT[TT["EOF"] = 10] = "EOF";
})(TT = exports.TT || (exports.TT = {}));
var Token = /** @class */ (function () {
    function Token(tokenType, value, pos_start, pos_end) {
        if (value === void 0) { value = ""; }
        if (pos_start === void 0) { pos_start = null; }
        if (pos_end === void 0) { pos_end = null; }
        this.tokenType = tokenType;
        this.value = value;
        if (pos_start) {
            if (!pos_end) {
                pos_end = pos_start.advance(true);
            }
        }
        else {
            pos_start = (0, position_1.getEmptyPosition)();
            pos_end = (0, position_1.getEmptyPosition)();
        }
        this.pos_start = pos_start;
        this.pos_end = pos_end;
    }
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=tokens.js.map