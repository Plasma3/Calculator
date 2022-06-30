export enum ValueType {
    INTEGER,
    RATIONAL,
}

export type ValueBase = {type: ValueType}

export type ValueInteger = ValueBase & {integer: number}
export type ValueRational = ValueBase & {over: number; under: number}
