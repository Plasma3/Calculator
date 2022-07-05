export type Pos = {
    context: string; // Filepath or console input

    index: number; // Includes newlines (\n)
    line: number;
    colum: number;
}


export class Position implements Pos { // TODO maybe change this to type
    context: string;

    index: number;
    line: number;
    colum: number;

    constructor(pos: Pos) {
        this.context = pos.context;
        this.index = pos.index;
        this.line = pos.line;
        this.colum = pos.colum;
    }

    advance() { }
    copy() { }
}

export class Location extends Position {
    multiline: boolean;

    constructor(pos: Pos,
        public end_col: number,
        public end_line?: number
    ) {
        super(pos);
        this.multiline = (end_line != undefined)
    }

    advance = () => { }
}


export function getPos(context: string, index: number, line: number, colum: number): Pos {
    return {
        context: context,
        index: index,
        line: line,
        colum: colum
    }
}

// let y = new Location({context: "", colum: 0, index: 0, line: 0}, 0);
// let z = {...y};
// z.colum = 1;

// console.log(y);
// console.log(z);
// console.log(z == y);