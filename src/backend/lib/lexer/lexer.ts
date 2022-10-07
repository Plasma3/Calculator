import * as C from "./constants";
import { IllegalCharError, PAM_Error, throw_error } from "../classes/errors";
import { getPos, Location, Pos } from "../classes/position";
import { TokenKind, Tokens, Token } from "../tokens/token";

export type LexerResult = [Tokens, PAM_Error | null]
export default class Lexer {
	private line: string = "";
	private current_char: string | null = null;
	private next_char: string | null = null;
	private previous_char: string | null = null;
	private iter: Pos = getPos('', 0, 0, 0);
	// private line_index: number = 0;

	public lex_file(filepath: string): LexerResult {
		let file = ""; // TODO: #12 Add file loading
		return this.lex_string(filepath, file);
	}

	public lex_string(context: string, script: string): LexerResult {
		this.iter.context = context;
		let lines = script.split('\n');

		let acc_index = 0;
		let line_tokens: Tokens | PAM_Error = [];
		let tokens: Tokens = [];
		let line_number = 0;

		for (let line of lines) {
			line_tokens = this.lex_line(line_number, acc_index, line);
			if (Array.isArray(line_tokens)) {
				tokens.push(...line_tokens);
			}
			else {
				return [tokens, line_tokens]
			}
			acc_index += line.length + 1;
			line_number++;
		}

		tokens.push({
			tokenKind: TokenKind.EOF,
			location: new Location(this.iter, this.iter.colum)
		})
		return [tokens, null];
	}

	private lex_line(line_number: number, acc_offset: number, line: string): Tokens | PAM_Error {
		let tokens: Tokens = [];
		this.init_line(line_number, acc_offset, line);

		while (this.current_char !== null) {
			if (this.match(C.EMPTY_SKIP)) { }
			else if (this.match(C.DIGITS_DOT)) {
				tokens.push(this.make_number());
			}
			else if (C.SIMPLE_TOKEN_IDENTIFIERS.has(this.current_char)) {
				tokens.push({
					tokenKind: C.SIMPLE_TOKEN_IDENTIFIERS.get(this.current_char)!,
					location: new Location(this.iter, this.iter.colum),
					value: this.current_char
				});
			}
			else if (this.match(C.WORD_START)) {
				tokens.push(this.make_word());
			}
			else {
				let err = new IllegalCharError(this.loc_current_char(), `"${this.current_char}"`);
				throw_error(err, line, true);
				return err;
			}

			this.advance();
		}
		tokens.push({
			tokenKind: TokenKind.EOL,
			location: new Location(this.iter, this.iter.colum)
		})
		return tokens;
	}
	
	private init_line(line_number: number, acc_offset: number, line: string) {
		if (line.length > 0) {
			this.previous_char = null;
			this.current_char = line[0];
			if (line.length > 1) {
				this.next_char = line[1];
			}
			this.line = line;
			this.iter.index = acc_offset;
			this.iter.line = line_number;
			this.iter.colum = 0;
		}
	};
	
	private advance() {
		this.iter.index += 1;
		this.iter.colum += 1;

		this.previous_char = this.current_char;
		if (this.iter.colum < this.line.length) {
			this.current_char = this.line[this.iter.colum];
			if (this.iter.colum + 1 < this.line.length) {
				this.next_char = this.line[this.iter.colum + 1];
			}
			else {
				this.next_char = null;
			}
		}
		else {
			this.current_char = null;
		}
		
	};
	
	private match(pattern: string): boolean {
		return ((this.current_char === null) ? false : pattern.includes(this.current_char))
	};
	
	private loc_current_char(): Location {
		return new Location(this.iter, this.iter.colum);
	};
	
	private make_number(): Token {
		let num_str = '';
		let dot_count = false;
		let pos_start = { ...this.iter };
		let continue_loop = false;
		
		do {
			if (this.current_char === C.DOT) {
				if (dot_count) { break; }
				dot_count = true;
				num_str += C.DOT;
			} else {
				num_str += this.current_char;
			}
			continue_loop = false;
			if (this.next_char && C.DIGITS_DOT.includes(this.next_char)) {
				this.advance();
				continue_loop = true;
			}
		}
		while (continue_loop);
		return {
			tokenKind: (dot_count) ? TokenKind.FLOAT : TokenKind.INT,
			location: new Location(pos_start, this.iter.colum),
			value: num_str
		}
	};
	
	private make_word(): Token {
		let word = this.current_char!;
		let pos_start = { ...this.iter };
		
		while (this.next_char && C.WORD_LETTERS.includes(this.next_char)) {
			this.advance();
			word += this.current_char;
			
		}
		return {
			tokenKind: TokenKind.WORD,
			location: new Location(pos_start, this.iter.colum),
			value: word
		}
	};

};
