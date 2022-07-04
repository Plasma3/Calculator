import { IndexedPosition, Position } from "./position"

export type ErrorBase = IndexedPosition & {
    error_type: string; 
    details: string;
};

export function stringifyError(err: ErrorBase): string {
    return `${ err.error_type }: ${err.details} at line ${err.pos_start.line} colum ${err.pos_start.colum}`
    return err.error_type + ': ' + err.details + '\n';
}
function string_with_arrows(text: string, pos_start: Position, pos_end: Position): string {
    let line = text.split('\n')[pos_start.line];
    let subline = ' '.repeat(pos_start.colum - 1) + '^'.repeat(1 + pos_end.colum - pos_start.colum)

    return `${line}\n${subline}`
}
export function display_error(err: ErrorBase) {
    console.log(stringifyError(err));
    console.log(string_with_arrows(err.pos_start.script, err.pos_start, err.pos_end));
}

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