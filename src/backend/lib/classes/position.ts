type Pos = {
    index: number;
    line: number;
    colum: number;
    func: string;
    functionText: string;
}


export class Position implements Pos {
    index: number;
    line: number;
    colum: number;
    func: string;
    functionText: string;

    constructor(
        index: number,
        line: number,
        colum: number,
        func: string,
        functionText: string
    ) {
        this.index = index;
        this.line = line;
        this.colum = colum;
        this.func = func;
        this.functionText = functionText;
    }

    advance(force: boolean = false): Position {
        this.index += 1;
        this.colum += 1;

        if (!force) {
            if (this.functionText[this.index]) {
                this.line += 1;
                this.colum = 0;
            }
        }

        return this;
    }
}

export function getEmptyPosition(
    index: number = 0,
    line: number = 0,
    colum: number = 0,
    func: string = "",
    functionText: string = ""

): Position {
    return new Position(index, line, colum, func, functionText)
}