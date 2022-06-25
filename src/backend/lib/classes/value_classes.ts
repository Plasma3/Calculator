export class Value {

}

export class ValueInteger extends Value {
    constructor(public number: number) {
        super();
        this.number = number;
    }
}

export class ValueRational extends Value {

}