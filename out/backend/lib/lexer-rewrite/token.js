"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyTokens = exports.TokenKind = void 0;
var TokenKind;
(function (TokenKind) {
    TokenKind[TokenKind["INT"] = 0] = "INT";
    TokenKind[TokenKind["FLOAT"] = 1] = "FLOAT";
    TokenKind[TokenKind["Plus"] = 2] = "Plus";
    TokenKind[TokenKind["Minus"] = 3] = "Minus";
    TokenKind[TokenKind["Mul"] = 4] = "Mul";
    TokenKind[TokenKind["Div"] = 5] = "Div";
    TokenKind[TokenKind["Pow"] = 6] = "Pow";
    TokenKind[TokenKind["OpenParen"] = 7] = "OpenParen";
    TokenKind[TokenKind["CloseParen"] = 8] = "CloseParen";
    TokenKind[TokenKind["Equal"] = 9] = "Equal";
    TokenKind[TokenKind["Comma"] = 10] = "Comma";
    TokenKind[TokenKind["EOL"] = 11] = "EOL";
    TokenKind[TokenKind["EOF"] = 12] = "EOF";
    TokenKind[TokenKind["TAB"] = 13] = "TAB";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
function stringifyTokens(tokens) {
    let out = '';
    tokens.forEach(i => {
        if (i.tokenKind === TokenKind.EOF) {
            out += "\n";
        }
        else if (i.tokenKind === TokenKind.EOL) {
            out += '\n';
        }
        else {
            out += ((i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) ? i.value : TokenKind[i.tokenKind]) + ' ';
        }
        // else if (i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) {
        // 	out += i.value + ' ';	
        // } else {
        // 	out += TokenKind[i.tokenKind] + ' ';
        // }
    });
    return out;
}
exports.stringifyTokens = stringifyTokens;
//# sourceMappingURL=token.js.map