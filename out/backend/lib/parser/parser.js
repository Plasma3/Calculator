// TODO: Layout Parser design
// TODO: Deterine what i/o and internals it should contain
var Parser = /** @class */ (function () {
    function Parser() {
        this.tokens = [];
    }
    Parser.prototype.parseTokens = function (context, tokens) {
        console.log(tokens);
        return [null, null];
    };
    return Parser;
}());
export default Parser;
//# sourceMappingURL=parser.js.map