
import { Position } from "./position";
import { UnaryOperator } from "./unary_operator";
import { ValueBase } from "./value_classes";

export interface BaseNode {
    pos_start: Position;
    pos_end: Position;
}

interface NodeEqnSys extends BaseNode {

}

interface NodeEquation extends BaseNode {

}

export interface NodeExpression extends BaseNode {
    terms: BaseNode[];
}

export interface NodeRatio extends BaseNode {
    over: BaseNode[];
    under: BaseNode[] | null;
}

export interface NodeUnary extends BaseNode {
    operator: UnaryOperator | null;
    unary: BaseNode;
}

export interface NodePower extends BaseNode {
    atom: BaseNode;
    exponent: BaseNode | null;
}

export interface NodeAtom extends BaseNode {
    value: ValueBase;
} 
