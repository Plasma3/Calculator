
import { Position } from "./position";
import { UnaryOperator } from "./unary_operator";
import { ValueBase } from "./value_classes";

export type BaseNode = {pos_start: Position; pos_end: Position}

type NodeEqnSys = BaseNode & {}
type NodeEquation = BaseNode & {}
export type NodeExpression  = BaseNode & {terms: BaseNode[]}
export type NodeRatio       = BaseNode & {over: BaseNode[]; under: BaseNode[] | null}
export type NodeUnary       = BaseNode & {operator: UnaryOperator | null; unary: BaseNode}
export type NodePower       = BaseNode & {atom: BaseNode; exponent: BaseNode | null}
export type NodeAtom        = BaseNode & {value: ValueBase} 
