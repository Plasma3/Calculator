import { IndexedPosition, Position } from "./position"

export type ErrorBase = IndexedPosition & {
    error_type: string; 
    details: string;
};

// class TemplateError implements ErrorBase {
//     error_type: string;
//     constructor(
//         public pos_start: Position, public pos_end: Position, public details: string
//     ) {this.error_type = "";}
// };

export class IllegalCharError implements ErrorBase {
    error_type: string;
    constructor(
        public pos_start: Position, public pos_end: Position, public details: string
    ) {this.error_type = 'Illegal Character';}
};
export class InvalidSyntaxError implements ErrorBase {
    error_type: string;
    constructor(
        public pos_start: Position, public pos_end: Position, public details: string
    ) {this.error_type = 'Invalid Syntax';}
};
export class UnsupportedOperationError implements ErrorBase {
    error_type: string;
    constructor(
        public pos_start: Position, public pos_end: Position, public details: string
    ) {this.error_type = 'Unsupported Operation';}
};
export class RTError implements ErrorBase {
    error_type: string;
    constructor(
        public pos_start: Position, public pos_end: Position, public details: string, 
        public context: string
    ) {this.error_type = 'Runtime Error';}
};