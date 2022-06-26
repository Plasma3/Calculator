import * as math from "./lib/classes/nodes"
import * as c from "./lib/classes/constructor"
import { Position } from "./lib/classes/position"
import { ValueType } from "./lib/classes/value_classes";


let foo = c.getNodeAtom(c.getBaseNode(), c.getValueBase(ValueType.RATIONAL));

console.debug(foo);

console.log();