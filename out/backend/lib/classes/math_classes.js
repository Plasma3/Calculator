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
exports.NodeAtom = exports.NodePower = exports.NodeUnary = exports.NodeRatio = exports.NodeExpression = exports.NodeEquation = exports.NodeEqnSys = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node() {
    }
    return Node;
}());
exports.Node = Node;
var NodeEqnSys = /** @class */ (function (_super) {
    __extends(NodeEqnSys, _super);
    function NodeEqnSys() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeEqnSys;
}(Node));
exports.NodeEqnSys = NodeEqnSys;
var NodeEquation = /** @class */ (function (_super) {
    __extends(NodeEquation, _super);
    function NodeEquation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeEquation;
}(Node));
exports.NodeEquation = NodeEquation;
var NodeExpression = /** @class */ (function (_super) {
    __extends(NodeExpression, _super);
    function NodeExpression(terms) {
        var _this = _super.call(this) || this;
        _this.terms = terms;
        _this.terms = terms;
        return _this;
    }
    return NodeExpression;
}(Node));
exports.NodeExpression = NodeExpression;
var NodeRatio = /** @class */ (function (_super) {
    __extends(NodeRatio, _super);
    function NodeRatio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeRatio;
}(Node));
exports.NodeRatio = NodeRatio;
var NodeUnary = /** @class */ (function (_super) {
    __extends(NodeUnary, _super);
    function NodeUnary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodeUnary;
}(Node));
exports.NodeUnary = NodeUnary;
var NodePower = /** @class */ (function (_super) {
    __extends(NodePower, _super);
    function NodePower() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NodePower;
}(Node));
exports.NodePower = NodePower;
var NodeAtom = /** @class */ (function (_super) {
    __extends(NodeAtom, _super);
    function NodeAtom(valueType, value) {
        var _this = _super.call(this) || this;
        _this.valueType = valueType;
        _this.value = value;
        _this.valueType = valueType;
        _this.value = value;
        return _this;
    }
    return NodeAtom;
}(Node));
exports.NodeAtom = NodeAtom;
//# sourceMappingURL=math_classes.js.map