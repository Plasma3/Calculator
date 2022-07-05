import { PAM_Error } from "./errors";
import { getPos, Location } from "./position";
import { TokenKind, Tokens } from "./token";

export  type LexerResult = [Tokens, PAM_Error | null]
export default class Lexer {

	public lex_file(filepath: string): LexerResult {
		let file = ""; // TODO: #12 Add file loading
		return this.lex_string(filepath, file);
	}

	public lex_string(context: string, script: string): LexerResult {

		return [[{location: new Location(getPos("", 0, 0, 0), 0), tokenKind: TokenKind.Div, value: context}], null];
		return [[], null];
	}

	private lex_line(n: number, line: string): void {

		return;
	}
}

const lexer = new Lexer();

let x = lexer.lex_file("aiusdgasid");
let y = lexer.lex_file("oaisdiaushd");
console.debug(x[0][0]);
console.debug(y[0][0]);

x;
