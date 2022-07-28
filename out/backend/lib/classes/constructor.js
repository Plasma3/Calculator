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
import { getPos, Position } from "./position";
import { ValueType } from "./value_classes";
export function getPosition(index, line, colum, context, script) {
    if (index === void 0) { index = 0; }
    if (line === void 0) { line = 0; }
    if (colum === void 0) { colum = 0; }
    if (context === void 0) { context = "<test>"; }
    if (script === void 0) { script = "test"; }
    return new Position(getPos(context, index, line, colum));
}
export function getBaseNode(pos_start, pos_end) {
    if (pos_start === void 0) { pos_start = getPosition(); }
    if (pos_end === void 0) { pos_end = getPosition(); }
    return {
        pos_start: pos_start,
        pos_end: pos_end
    };
}
export function getNodeExpression(baseNode, terms) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (terms === void 0) { terms = []; }
    return __assign(__assign({}, baseNode), { terms: terms });
}
export function getNodeRatio(baseNode, over, under) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (over === void 0) { over = []; }
    if (under === void 0) { under = null; }
    return __assign(__assign({}, baseNode), { over: over, under: under });
}
export function getNodeUnary(baseNode, operator, unary) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (operator === void 0) { operator = null; }
    if (unary === void 0) { unary = getBaseNode(); }
    return __assign(__assign({}, baseNode), { operator: operator, unary: unary });
}
export function getNodePower(baseNode, atom, exponent) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (atom === void 0) { atom = getBaseNode(); }
    if (exponent === void 0) { exponent = null; }
    return __assign(__assign({}, baseNode), { atom: atom, exponent: exponent });
}
export function getNodeAtom(baseNode, value) {
    if (baseNode === void 0) { baseNode = getBaseNode(); }
    if (value === void 0) { value = getValueBase(); }
    return __assign(__assign({}, baseNode), { value: value });
}
export function getValueBase(valueType) {
    if (valueType === void 0) { valueType = ValueType.INTEGER; }
    return {
        type: valueType
    };
}
export function getValueInteger(value) {
    return __assign(__assign({}, getValueBase(ValueType.INTEGER)), { integer: value });
}
export function getValueRational(over, under) {
    return __assign(__assign({}, getValueBase()), { over: over, under: under });
}
//# sourceMappingURL=constructor.js.map