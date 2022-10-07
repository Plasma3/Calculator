export var TokenKind;
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
    TokenKind[TokenKind["WORD"] = 11] = "WORD";
    TokenKind[TokenKind["EOL"] = 12] = "EOL";
    TokenKind[TokenKind["EOF"] = 13] = "EOF";
    TokenKind[TokenKind["TAB"] = 14] = "TAB";
})(TokenKind || (TokenKind = {}));
export function stringifyTokens(tokens) {
    var out = '';
    tokens.forEach(function (i) {
        if (i.tokenKind === TokenKind.EOF) {
            out += "\n";
        }
        else if (i.tokenKind === TokenKind.EOL) {
            out += '\n';
        }
        else {
            out += ((i.tokenKind === TokenKind.WORD) ? "(".concat(i.value, ")") : ((i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) ? i.value : TokenKind[i.tokenKind])) + ' ';
        }
        // else if (i.tokenKind === TokenKind.INT || i.tokenKind === TokenKind.FLOAT) {
        // 	out += i.value + ' ';	
        // } else {
        // 	out += TokenKind[i.tokenKind] + ' ';
        // }
    });
    return out;
}
//# sourceMappingURL=token.js.map