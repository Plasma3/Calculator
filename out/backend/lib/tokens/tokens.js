"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.TT = void 0;
const position_1 = require("../classes/position");
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
    TT[TT["TAB"] = 11] = "TAB";
})(TT = exports.TT || (exports.TT = {}));
class Token {
    constructor(tokenTypeOrToken, valueOrPosStart = "", pos_start, pos_end) {
        // Calculate which Constructor is being used
        if (determineIfTok(tokenTypeOrToken)) {
            // Constructor 1
            this.tokenType = tokenTypeOrToken.tokenType;
            this.value = tokenTypeOrToken.value;
            pos_start = tokenTypeOrToken.pos_start;
            pos_end = tokenTypeOrToken.pos_end;
        }
        else {
            // First parameter is of type TT
            this.tokenType = tokenTypeOrToken;
            if (typeof valueOrPosStart === 'string') {
                // Constructor 2
                this.value = valueOrPosStart;
            }
            else {
                // Constructor 3
                this.value = TT[tokenTypeOrToken];
                // pos_start = valueOrPosStart;
                pos_start = valueOrPosStart.copy();
            }
        }
        if (pos_start) {
            if (!pos_end) {
                pos_end = pos_start.copy();
                pos_end.advance(true);
            }
        }
        else {
            pos_start = (0, position_1.getEmptyPosition)();
            pos_end = (0, position_1.getEmptyPosition)();
        }
        this.pos_start = pos_start;
        this.pos_end = pos_end;
    }
}
exports.Token = Token;
function determineIfTok(toBeDetermined) {
    return (toBeDetermined.tokenType) ? true : false;
}
//# sourceMappingURL=tokens.js.map