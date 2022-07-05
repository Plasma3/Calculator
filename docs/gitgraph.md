```mermaid 
%%{init: { 'theme': 'dark', 'gitGraph': {
    'showCommitLabel': false,
    'mainBranchName': 'master'
}} }%%

gitGraph

commit tag:"Init" %% expands to 7 hidden commits
commit tag:"Pages!"

branch gh-pages

checkout master
commit
commit tag:"Woops" type: REVERSE %% expands to 6 hidden commits

checkout gh-pages
merge master

checkout master
commit
commit tag:"Frontend works* "

checkout gh-pages
merge master tag:"0.0.0"

checkout master
commit
commit

branch dev-backend
commit
commit

branch lexer-rewrite
commit tag:"workspaces"
commit
commit tag:"Lexer done"

checkout dev-backend
merge lexer-rewrite tag:"Lexer added"
```