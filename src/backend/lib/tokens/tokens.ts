import { getEmptyPosition, Position } from "../classes/position";

export enum TT {
    INT,
    FLOAT,

    PLUS,
    MINUS,
    MUL,
    DIV,
    POW,

    lPAREN,
    rPAREN,

    EOL,
    EOF,
}

type Tok = {
    tokenType: TT;
    value: string;
    pos_start: Position;
    pos_end: Position;
}

export class Token implements Tok {
    tokenType: TT;
    value: string;
    pos_start: Position;
    pos_end: Position;

    constructor(
        tokenType: TT,
        value: string = "",
        pos_start: Position | null = null,
        pos_end: Position | null = null
    ) {
        this.tokenType = tokenType
        this.value = value;

        if (pos_start) {
            if (!pos_end) {
                pos_end = pos_start.advance(true);
            }
        } else {
            pos_start = getEmptyPosition();
            pos_end = getEmptyPosition();
        }

        this.pos_start = pos_start;
        this.pos_end = pos_end;
    }
}