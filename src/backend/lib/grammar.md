# Grammar
## eqnsys
- eqn (\newLine eqn)*
- eqn

## equation
- expr (EQUAL|NEQ|GE|LE|GEQ|LEQ) expr
- expr

## expr
- listof-((PLUS|MINUS) term)*

## ratio (term)
- listof-((MUL|DIV) factor)*

## unary (factor)
- (PLUS|MINUS) factor
- power

## power
- atom (POW factor)*

## atom
- VALUE
- INT|FLOAT <!-- Should use VALUE instead -->
- LPAREN expr (RPAREN)

# Value
- Integer
- Rational Number
    - Float (Rational Number)
- Other
    - $\pi$
    - $e$
    - $\log$ / $\ln$?