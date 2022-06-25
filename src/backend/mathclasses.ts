export class node {

}



export class nodeEqnSys extends node {

}


export class nodeEquation extends node {

}


export class nodeExpression extends node {
    constructor(public terms: node[]) {
        super();
        
        this.terms = terms;
    }
}


export class nodeRatio extends node {

}


export class nodeUnary extends node {

}


export class nodePower extends node {

}

export class nodeAtom extends node {

}