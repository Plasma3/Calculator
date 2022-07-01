import { NEWLINE } from "../lexer/constants";

type Pos = {
    index: number;
    line: number;
    colum: number;
    context: string;
    script: string;
}
export type IndexedPosition = {
    pos_start: Position;
    pos_end: Position;
}
export class Position implements Pos {
    constructor(
        public index: number, 
        public line: number, 
        public colum: number, 
        public context: string, 
        public script: string
        ) {}

    advance(force: boolean = false): Position {
        this.index += 1;
        this.colum += 1;

        if (!force) {
            if (this.script[this.index] == NEWLINE) {
                this.line += 1;
                this.colum = 0;
            }
        }

        return this;
    }
    copy() {
        return new Position(this.index, this.line, this.colum, this.context, this.script);
    }
}

export function getEmptyPosition(
    index: number = 0,
    line: number = 0,
    colum: number = 0,
    context: string = "",
    script: string = ""

): Position {
    return new Position(index, line, colum, context, script)
}