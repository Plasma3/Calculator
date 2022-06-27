"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyPosition = exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(index, line, colum, func, functionText) {
        this.index = index;
        this.line = line;
        this.colum = colum;
        this.func = func;
        this.functionText = functionText;
    }
    Position.prototype.advance = function (force) {
        if (force === void 0) { force = false; }
        this.index += 1;
        this.colum += 1;
        if (!force) {
            if (this.functionText[this.index]) {
                this.line += 1;
                this.colum = 0;
            }
        }
        return this;
    };
    return Position;
}());
exports.Position = Position;
function getEmptyPosition(index, line, colum, func, functionText) {
    if (index === void 0) { index = 0; }
    if (line === void 0) { line = 0; }
    if (colum === void 0) { colum = 0; }
    if (func === void 0) { func = ""; }
    if (functionText === void 0) { functionText = ""; }
    return new Position(index, line, colum, func, functionText);
}
exports.getEmptyPosition = getEmptyPosition;
//# sourceMappingURL=position.js.map