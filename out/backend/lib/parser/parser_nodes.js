export var special_expression_types;
(function (special_expression_types) {
    special_expression_types[special_expression_types["POLYNOM"] = 0] = "POLYNOM";
    special_expression_types[special_expression_types["EXPONENTIAL"] = 1] = "EXPONENTIAL";
})(special_expression_types || (special_expression_types = {}));
export var associative_types;
(function (associative_types) {
    associative_types[associative_types["ADDITION"] = 0] = "ADDITION";
    associative_types[associative_types["MULTIPLICATION"] = 1] = "MULTIPLICATION";
})(associative_types || (associative_types = {}));
var binary_types;
(function (binary_types) {
    binary_types[binary_types["ADDITION"] = 0] = "ADDITION";
    binary_types[binary_types["SUBTRACTION"] = 1] = "SUBTRACTION";
    binary_types[binary_types["MULTIPLICATION"] = 2] = "MULTIPLICATION";
    binary_types[binary_types["DIVISION"] = 3] = "DIVISION";
    binary_types[binary_types["POWER"] = 4] = "POWER";
})(binary_types || (binary_types = {}));
var unary_types;
(function (unary_types) {
    unary_types[unary_types["NEGATIVE"] = 0] = "NEGATIVE";
    unary_types[unary_types["SQUARE_ROOT"] = 1] = "SQUARE_ROOT";
})(unary_types || (unary_types = {}));
var vector_types;
(function (vector_types) {
    vector_types[vector_types["VECTOR"] = 0] = "VECTOR";
    vector_types[vector_types["COMPLEX_NUMBER"] = 1] = "COMPLEX_NUMBER";
    vector_types[vector_types["POLYNOM"] = 2] = "POLYNOM";
})(vector_types || (vector_types = {}));
;
export var scalar_types;
(function (scalar_types) {
    scalar_types[scalar_types["INTEGER"] = 0] = "INTEGER";
    scalar_types[scalar_types["FLOAT"] = 1] = "FLOAT";
    scalar_types[scalar_types["RATIONALL_NUMBER"] = 2] = "RATIONALL_NUMBER";
    scalar_types[scalar_types["IRRATIONAL_ALGEBRAIC_NUMBER"] = 3] = "IRRATIONAL_ALGEBRAIC_NUMBER";
    scalar_types[scalar_types["IRRATIONAL_TRANCENDENTAL_NUMBER"] = 4] = "IRRATIONAL_TRANCENDENTAL_NUMBER";
    scalar_types[scalar_types["VARIABLE"] = 5] = "VARIABLE";
    scalar_types[scalar_types["FUNCTION"] = 6] = "FUNCTION";
})(scalar_types || (scalar_types = {}));
;
//# sourceMappingURL=parser_nodes.js.map