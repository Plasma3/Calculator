"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPos = exports.Location = exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(pos) {
        this.context = pos.context;
        this.index = pos.index;
        this.line = pos.line;
        this.colum = pos.colum;
    }
    Position.prototype.advance = function () { };
    Position.prototype.copy = function () { };
    return Position;
}());
exports.Position = Position;
var Location = /** @class */ (function (_super) {
    __extends(Location, _super);
    function Location(pos, end_col, end_line) {
        var _this = _super.call(this, pos) || this;
        _this.end_col = end_col;
        _this.end_line = end_line;
        _this.advance = function () { };
        _this.multiline = (end_line != undefined);
        return _this;
    }
    return Location;
}(Position));
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