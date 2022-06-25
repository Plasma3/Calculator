export enum ValueType {
    INTEGER,
    RATIONAL,
}

export interface ValueBase {
    type: ValueType;
}

export interface ValueInteger extends ValueBase {
    integer: number;
}

export interface ValueRational extends ValueBase {
    over: number;
    under: number;
}
