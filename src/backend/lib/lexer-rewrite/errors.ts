import { PAM_CONSOLE_IDENTITY } from "./constants";
import { Location } from "./position";



export function throw_error(err: PAM_Error, script: string | string[]) {
    console.error(PAM_CONSOLE_IDENTITY + `${err.location.context}:${err.location.line}:${err.location.colum}: ${err.errorKind}: ${err.details}`)
    if (err.location.multiline) {
        console.error(PAM_CONSOLE_IDENTITY + "/errors.ts IMPLEMENTATION_ERROR: Can't display multiline error yet");
        return;
    }
    let lines = (typeof script === "string") ? script.split('\n') : script;
    let line = lines[err.location.line];
    let subline = PAM_CONSOLE_IDENTITY + ' '.repeat(err.location.colum) + '^'.repeat(1 + err.location.end_col - err.location.colum);
    // let subline = ' '.repeat(err.location.colum - 1) + '^'.repeat(1 + err.location.colum - err.location.end_col)
    console.error(PAM_CONSOLE_IDENTITY + `${line}\n${subline}`);
}


type PAM_Error = {
    errorKind: string;
    location: Location;
    details: string;
}


export class IllegalCharError implements PAM_Error {
    errorKind = "IllegalCharError";
    constructor(public location: Location, public details: string) { };
};

export class InvalidSyntaxError implements PAM_Error {
    errorKind = "InvalidSyntaxError";
    constructor(public location: Location, public details: string) { };
};

export class UnsupportedOperationError implements PAM_Error {
    errorKind = "UnsupportedOperationError";
    constructor(public location: Location, public details: string) { };
};

export class RTError implements PAM_Error {
    errorKind = "IllegalCharError";
    constructor(public location: Location, public details: string) { };
};

