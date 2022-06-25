export class nodeExpression {

    constructor(public terms: node[]) {
        this.terms = terms;
    }
}

export class node {

}

export class nodeNumber extends node {
    constructor(public value: number) {
        super();
        
        this.value = value;
    }
}


