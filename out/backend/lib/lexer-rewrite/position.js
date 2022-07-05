"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPos = exports.Location = exports.Position = void 0;
class Position {
    context;
    index;
    line;
    colum;
    constructor(pos) {
        this.context = pos.context;
        this.index = pos.index;
        this.line = pos.line;
        this.colum = pos.colum;
    }
    advance() { }
    copy() { }
}
exports.Position = Position;
class Location extends Position {
    end_col;
    end_line;
    multiline;
    constructor(pos, end_col, end_line) {
        super(pos);
        this.end_col = end_col;
        this.end_line = end_line;
        this.multiline = (end_line != undefined);
    }
    advance = () => { };
}
exports.Location = Location;
function getPos(context, index, line, colum) {
    return {
        context: context,
        index: index,
        line: line,
        colum: colum
    };
}
exports.getPos = getPos;
// let y = new Location({context: "", colum: 0, index: 0, line: 0}, 0);
// let z = {...y};
// z.colum = 1;
// console.log(y);
// console.log(z);
// console.log(z == y);
//# sourceMappingURL=position.js.map