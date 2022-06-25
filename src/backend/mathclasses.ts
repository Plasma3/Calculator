export class Node {

}



export class NodeEqnSys extends Node {

}


export class NodeEquation extends Node {

}


export class NodeExpression extends Node {
    constructor(public terms: Node[]) {
        super();
        
        this.terms = terms;
    }
}


export class NodeRatio extends Node {

}


export class NodeUnary extends Node {

}


export class NodePower extends Node {

}

export class NodeAtom extends Node {

}