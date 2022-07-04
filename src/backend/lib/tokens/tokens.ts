import { getEmptyPosition, Position, IndexedPosition } from "../classes/position";

type Tok = IndexedPosition & {tokenType: TT; value: string};
export type Tokens = Token[];
export enum TT {
    INT,FLOAT,

    Plus,Minus,Mul,Div,Pow,

    OpenParen,CloseParen,

    EOL,EOF,TAB
}

export class Token implements Tok {
    tokenType: TT;
    value: string;
    pos_start: Position;
    pos_end: Position;


    constructor(
        token: Tok
    );
    constructor(
        tokenType: TT,
        value: string,
        pos_start?: Position,
        pos_end?: Position
    );
    constructor(
        tokenType: TT,
        pos_start: Position
    );
    constructor(
        tokenTypeOrToken: TT | Tok,
        valueOrPosStart: string | Position = "",
        pos_start?: Position,
        pos_end?: Position
    ) {
        // Calculate which Constructor is being used
        if (determineIfTok(tokenTypeOrToken)) {
            // Constructor 1
            this.tokenType = tokenTypeOrToken.tokenType;
            this.value = tokenTypeOrToken.value;
            pos_start = tokenTypeOrToken.pos_start;
            pos_end = tokenTypeOrToken.pos_end;
        } 
        else {
            // First parameter is of type TT
            this.tokenType = tokenTypeOrToken;
            
            if (typeof valueOrPosStart === 'string') {
                // Constructor 2
                this.value = valueOrPosStart;
            } else {
                // Constructor 3
                this.value = TT[tokenTypeOrToken];
                // pos_start = valueOrPosStart;
                pos_start = valueOrPosStart.copy();
            }
        }

        if (pos_start) {
            if (!pos_end) {
                pos_end = pos_start.copy();
                pos_end.advance(true);
            }
        } else {
            pos_start = getEmptyPosition();
            pos_end = getEmptyPosition();
        }

        this.pos_start = pos_start;
        this.pos_end = pos_end;
    }
}

function determineIfTok(toBeDetermined: Tok | TT): toBeDetermined is Tok {
    return ((toBeDetermined as Tok).tokenType) ? true : false;
}