"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmptyPosition = exports.Position = void 0;
const constants_1 = require("../lexer/constants");
class Position {
    index;
    line;
    colum;
    context;
    script;
    constructor(index, line, colum, context, script) {
        this.index = index;
        this.line = line;
        this.colum = colum;
        this.context = context;
        this.script = script;
    }
    advance(force = false) {
        this.index += 1;
        this.colum += 1;
        if (!force) {
            if (this.script[this.index] == constants_1.NEWLINE) {
                this.line += 1;
                this.colum = 0;
            }
        }
        return this;
    }
    copy() {
        return new Position(this.index, this.line, this.colum, this.context, this.script);
    }
}
exports.Position = Position;
function getEmptyPosition(index = 0, line = 0, colum = 0, context = "", script = "") {
    return new Position(index, line, colum, context, script);
}
exports.getEmptyPosition = getEmptyPosition;
//# sourceMappingURL=position.js.map