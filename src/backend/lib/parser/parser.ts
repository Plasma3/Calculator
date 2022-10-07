// TODO: Layout Parser design
// TODO: Deterine what i/o and internals it should contain

import { PAM_Error } from "../classes/errors";
import { Tokens } from "../tokens/token";
import { ast_node_types_union, expression_node, scalar_types } from "./parser_nodes";

type ParserResult = [ast_node_types_union | null, PAM_Error | null]
export default class Parser {
    private tokens: Tokens = [];

    public parseTokens(context: string, tokens: Tokens): ParserResult {
        console.log(tokens);



        return [null, null];
    }


}