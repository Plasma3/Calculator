"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueBase = exports.getNodeAtom = exports.getNodePower = exports.getNodeUnary = exports.getNodeRatio = exports.getNodeExpression = exports.getBaseNode = exports.getPosition = void 0;
var value_classes_1 = require("./value_classes");
function getPosition(index, line, colum, func, functionText) {
    if (index === void 0) { index = 0; }
    if (line === void 0) { line = 0; }
    if (colum === void 0) { colum = 0; }
    if (func === void 0) { func = "<test>"; }
    if (functionText === void 0) { functionText = "test"; }
    return {
        index: index,
        line: line,
        colum: colum,
        func: func,
        functionText: functionText
    };
}
exports.getPosition = getPosition;
function getBaseNode(pos_start, pos_end) {
    if (pos_start === void 0) { pos_start = getPosition(); }
    if (pos_end === void 0) { pos_end = getPosition(); }
    return {
        pos_start: pos_start,
        pos_end: pos_end
    };
}
exports.getBaseNode = getBaseNode;
function getNodeExpression(baseNode, terms) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (terms === void 0) { terms = []; }
    return __assign(__assign({}, baseNode), { terms: terms });
}
exports.getNodeExpression = getNodeExpression;
function getNodeRatio(baseNode, over, under) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (over === void 0) { over = []; }
    if (under === void 0) { under = null; }
    return __assign(__assign({}, baseNode), { over: over, under: under });
}
exports.getNodeRatio = getNodeRatio;
function getNodeUnary(baseNode, operator, unary) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (operator === void 0) { operator = null; }
    if (unary === void 0) { unary = getBaseNode(); }
    return __assign(__assign({}, baseNode), { operator: operator, unary: unary });
}
exports.getNodeUnary = getNodeUnary;
function getNodePower(baseNode, atom, exponent) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (atom === void 0) { atom = getBaseNode(); }
    if (exponent === void 0) { exponent = null; }
    return __assign(__assign({}, baseNode), { atom: atom, exponent: exponent });
}
exports.getNodePower = getNodePower;
function getNodeAtom(baseNode, value) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (value === void 0) { value = getValueBase(); }
    return __assign(__assign({}, baseNode), { value: value });
}
exports.getNodeAtom = getNodeAtom;
function getValueBase(valueType) {
    if (valueType === void 0) { valueType = value_classes_1.ValueType.INTEGER; }
    return {
        type: valueType
    };
}
exports.getValueBase = getValueBase;
//# sourceMappingURL=constructor.js.map