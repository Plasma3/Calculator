"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValueRational = exports.getValueInteger = exports.getValueBase = exports.getNodeAtom = exports.getNodePower = exports.getNodeUnary = exports.getNodeRatio = exports.getNodeExpression = exports.getBaseNode = exports.getPosition = void 0;
const position_1 = require("./position");
const value_classes_1 = require("./value_classes");
function getPosition(index = 0, line = 0, colum = 0, context = "<test>", script = "test") {
    return new position_1.Position((0, position_1.getPos)(context, index, line, colum));
}
exports.getPosition = getPosition;
function getBaseNode(pos_start = getPosition(), pos_end = getPosition()) {
    return {
        pos_start: pos_start,
        pos_end: pos_end
    };
}
exports.getBaseNode = getBaseNode;
function getNodeExpression(baseNode = getBaseNode(), terms = []) {
    return {
        ...baseNode,
        terms: terms
    };
}
exports.getNodeExpression = getNodeExpression;
function getNodeRatio(baseNode = getBaseNode(), over = [], under = null) {
    return {
        ...baseNode,
        over: over,
        under: under
    };
}
exports.getNodeRatio = getNodeRatio;
function getNodeUnary(baseNode = getBaseNode(), operator = null, unary = getBaseNode()) {
    return {
        ...baseNode,
        operator: operator,
        unary: unary
    };
}
exports.getNodeUnary = getNodeUnary;
function getNodePower(baseNode = getBaseNode(), atom = getBaseNode(), exponent = null) {
    return {
        ...baseNode,
        atom: atom,
        exponent: exponent
    };
}
exports.getNodePower = getNodePower;
function getNodeAtom(baseNode = getBaseNode(), value = getValueBase()) {
    return {
        ...baseNode,
        value: value
    };
}
exports.getNodeAtom = getNodeAtom;
function getValueBase(valueType = value_classes_1.ValueType.INTEGER) {
    return {
        type: valueType
    };
}
exports.getValueBase = getValueBase;
function getValueInteger(value) {
    return {
        ...getValueBase(value_classes_1.ValueType.INTEGER),
        integer: value
    };
}
exports.getValueInteger = getValueInteger;
function getValueRational(over, under) {
    return {
        ...getValueBase(),
        over: over,
        under: under
    };
}
exports.getValueRational = getValueRational;
//# sourceMappingURL=constructor.js.map