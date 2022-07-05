"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenKind = void 0;
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
    TokenKind[TokenKind["EOL"] = 9] = "EOL";
    TokenKind[TokenKind["EOF"] = 10] = "EOF";
    TokenKind[TokenKind["TAB"] = 11] = "TAB";
})(TokenKind = exports.TokenKind || (exports.TokenKind = {}));
//# sourceMappingURL=token.js.map