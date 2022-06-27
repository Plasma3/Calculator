import * as math from "./lib/classes/nodes"
import * as c from "./lib/classes/constructor"
import { Position } from "./lib/classes/position"
import { ValueType } from "./lib/classes/value_classes";
import { UnaryOperator } from "./lib/classes/unary_operator";


let foo = c.getNodeExpression(
    c.getBaseNode(),
    [
        c.getNodeAtom(
            c.getBaseNode(),
            c.getValueInteger(5),
        ),
        c.getNodeUnary(
            c.getBaseNode(),
            UnaryOperator.MINUS,
            c.getNodeAtom(
                c.getBaseNode(),
                c.getValueInteger(3)
            )
        )
    ]
)

console.debug(foo);

console.log();