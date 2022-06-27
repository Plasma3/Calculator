import * as Node from "./nodes"
import { Position } from "./position"
import { UnaryOperator } from "./unary_operator"
import { ValueBase, ValueInteger, ValueRational, ValueType } from "./value_classes"

export function getPosition(
    index: number = 0,
    line: number = 0,
    colum: number = 0,
    func: string = "<test>",
    functionText: string = "test"

): Position {
    return new Position(index, line, colum, func, functionText)
}

export function getBaseNode(
    pos_start: Position = getPosition(),
    pos_end: Position = getPosition()
): Node.BaseNode {
    return {
        pos_start: pos_start,
        pos_end: pos_end
    }
}
export function getNodeExpression(
    baseNode: Node.BaseNode = getBaseNode(),
    terms: Node.BaseNode[] = []
): Node.NodeExpression {
    return {
        ...baseNode,
        terms: terms
    }
}
export function getNodeRatio(
    baseNode: Node.BaseNode = getBaseNode(),
    over: Node.BaseNode[] = [],
    under: Node.BaseNode[] | null = null
): Node.NodeRatio {
    return {
        ...baseNode,
        over: over,
        under: under
    }
}
export function getNodeUnary(
    baseNode: Node.BaseNode = getBaseNode(),
    operator: UnaryOperator | null = null,
    unary: Node.BaseNode = getBaseNode()
): Node.NodeUnary {
    return {
        ...baseNode,
        operator: operator,
        unary: unary
    }
}
export function getNodePower(
    baseNode: Node.BaseNode = getBaseNode(),
    atom: Node.BaseNode = getBaseNode(),
    exponent: Node.BaseNode | null = null
): Node.NodePower {
    return {
        ...baseNode,
        atom: atom,
        exponent: exponent
    }
}
export function getNodeAtom(
    baseNode: Node.BaseNode = getBaseNode(),
    value: ValueBase = getValueBase()
): Node.NodeAtom {
    return {
        ...baseNode,
        value: value
    }
}
export function getValueBase(
    valueType: ValueType = ValueType.INTEGER
): ValueBase {
    return {
        type: valueType
    }
}
export function getValueInteger(
    value: number
): ValueInteger {
    return {
        ...getValueBase(ValueType.INTEGER),
        integer: value
    }
}
export function getValueRational(
    over: number,
    under: number
): ValueRational {
    return {
        ...getValueBase(),
        over: over,
        under: under
    }
}