import { Location, Position } from "../classes/position";



export type ast_node_types_union = scalar_node | vector_node | unary_node | binary_node | associative_node | expression_node;

export type ast_base_node = {
    position: Location;
    type: string;
};





export enum special_expression_types {
    POLYNOM,
    EXPONENTIAL,
}
export type expression_node = ast_base_node & {
    element: ast_node_types_union;
    special: boolean;
    special_type?: special_expression_types;
}

export enum associative_types {
    ADDITION, 
    MULTIPLICATION,
}
export type associative_node = ast_base_node & {
    associative_operation_type: associative_types;
    elements: ast_node_types_union[];
}

enum binary_types {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION,
    POWER,
}
type binary_node = ast_base_node & {
    binary_operation_type: binary_types;
    left_element: ast_node_types_union;
    right_element: ast_node_types_union;
}

enum unary_types {
    NEGATIVE,
    SQUARE_ROOT,
}
type unary_node = ast_base_node & {
    unary_operation_type: unary_types;
    element: ast_node_types_union;
}

enum vector_types {
    VECTOR,
    COMPLEX_NUMBER,
    POLYNOM,
};
type vector_node = ast_base_node & {
    vector_type: vector_types;
    scalars: scalar_node[];
}

export enum scalar_types {
    INTEGER,
    FLOAT,
    RATIONALL_NUMBER,
    IRRATIONAL_ALGEBRAIC_NUMBER,
    IRRATIONAL_TRANCENDENTAL_NUMBER,
    VARIABLE,
    FUNCTION,
};
export type scalar_node = ast_base_node & {
    scalar_type: scalar_types;
    name?: string; // variable or function name
    value?: number; // 2 if it stores 2
    base?: number; // 5 if it stores 2/5
    special?: string; // is it e or pi
    members?: string[]; // f(x, y, z) then x, y, z is stored here
}

