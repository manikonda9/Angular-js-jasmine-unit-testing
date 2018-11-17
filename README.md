# Angular-js-jasmine-unit-testing
Basic unit testing for partial, directive, service and filter

install the node js locally in your system by
npm install
Create your new project:

mkdir MyNewAwesomeApp
cd MyNewAwesomeApp
yo cg-angular
This generates the base project with no sub-structure.

bower update

npm update
It sets up the node.js and bower component folders with toolchain and project dependencies respectively.

ITE Architecture

The next steps uses sub-generators:

yo cg-angular:directive my-directive
yo cg-angular:partial my-partial
yo cg-angular:service my-service
yo cg-angular:filter my-filter

finally run the application by
grunt serve -f

test the application 
grunt test -f
