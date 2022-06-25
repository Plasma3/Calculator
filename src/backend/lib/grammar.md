# Grammar
## eqnsys
- eqn (\newLine eqn)*
- eqn

## equation
- expr (EQUAL|NEQ|GE|LE|GEQ|LEQ) expr
- expr

## expr
- listof-((PLUS|MINUS) term)*

## term
- listof-((MUL|DIV) factor)*

## factor
- (PLUS|MINUS) factor
- power

## power
- atom (POW factor)*

## atom
- VALUE
- INT|FLOAT <!-- Should use VALUE instead -->
- LPAREN expr (RPAREN)
