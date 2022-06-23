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
exports.nodeNumber = exports.node = exports.expression = void 0;
var expression = /** @class */ (function () {
    function expression(terms) {
        this.terms = terms;
        this.terms = terms;
    }
    return expression;
}());
exports.expression = expression;
var node = /** @class */ (function () {
    function node() {
    }
    return node;
}());
exports.node = node;
var nodeNumber = /** @class */ (function (_super) {
    __extends(nodeNumber, _super);
    function nodeNumber(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        _this.value = value;
        return _this;
    }
    return nodeNumber;
}(node));
exports.nodeNumber = nodeNumber;
//# sourceMappingURL=mathclasses.js.map