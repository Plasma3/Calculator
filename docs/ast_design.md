


Rough AST representation (in json) of the expression $10+2.5\cdot2=\dfrac x2$
```json
{
    "type": "equation system",
    "equations": [
        {
            "type": "equation",
            "comparision": "equal",
            "left expression": {
                "type": "associative operation",
                "operation": "Addition",
                "elements": [
                    {
                        "type": "atom",
                        "atom type": "integer",
                        "value": 10
                    },
                    {
                        "type": "associative operation",
                        "operation": "Multiplication",
                        "elements": [
                            {
                                "type": "atom",
                                "atom type": "float",
                                "value": 2.5
                            },
                            {
                                "type": "atom",
                                "atom type": "integer",
                                "value": 2
                            }
                        ]
                    }
                ]
            },
            "right expression": {
                "type": "binary operation",
                "operation": "division",
                "element one": {
                    "type": "atom",
                    "atom type": "variable",
                    "variable name": "x"
                },
                "element two": {
                    "type": "atom",
                    "atom type": "integer",
                    "value": 3
                }
            }
        },
    ]
}
```


## Structure elements
### equation system
TODO

### equation
TODO

### Expression
##### Special types of expressions:
- single function
- single variable
- polynom
    - line
    - square
    - cubic
- exponential

### Associative operation
##### Types:
- addition (terms), multiplication (factors)


### Binary operation
##### Types:
- addition, subtraction, multiplication, division, power


### Unary operation
##### Types:
- negative
- !
- ln
- sin, cos, tan
- function
- square root

### Atom
##### Types:
- Variable
- Integer
- Float
- Rationall number
- Complex number
- vector

! All atoms should be encapsulated by a vector, where complex numbers are just a special type of 2d vector.