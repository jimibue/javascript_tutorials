Scoping rules var vs let
=============
>tl;dr use let instead of var acts. Let behaves more like a variable is expected to behave

Main difference is scoping rules. Variables declared by `var` keyword are scoped to the immediate function body (hence the function scope) while `let` variables are scoped to the immediate _enclosing_ block denoted by `{ }` (hence the block scope).

    function run() {
      var foo = "Foo";
      let bar = "Bar";
    
      console.log(foo, bar);
    
      {
        let baz = "Bazz";
        console.log(baz);
      }
    
      console.log(baz); // ReferenceError
    }
    
    run();

The reason why `let` keyword was introduced to the language was function scope is confusing and was one of the main sources of bugs in JavaScript.

Take a look at this example from [another stackoverflow question](https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example):

    var funcs = [];
    // let's create 3 functions
    for (var i = 0; i < 3; i++) {
      // and store them in funcs
      funcs[i] = function() {
        // each should log its value.
        console.log("My value: " + i);
      };
    }
    for (var j = 0; j < 3; j++) {
      // and now let's run each one to see
      funcs[j]();
    }

`My value: 3` was output to console each time `funcs[j]();` was invoked since anonymous functions were bound to the same variable.

People had to create immediately invoked functions to capture correct value from the loops but that was also hairy.

Hoisting
========

While variables declared with `var` keyword are "hoisted" to the top of the block which means they are accessible in their enclosing scope even before they are declared:

    function run() {
      console.log(foo); // undefined
      var foo = "Foo";
      console.log(foo); // Foo
    }
    
    run();

`let` variables are not initialized until their definition is evaluated. Accessing them before the initialization results in a `ReferenceError`. Variable said to be in "temporal dead zone" from the start of the block until the initialization is processed.

    function checkHoisting() {
      console.log(foo); // ReferenceError
      let foo = "Foo";
      console.log(foo); // Foo
    }
    
    checkHoisting();

Creating global object property
===============================

At the top level, `let`, unlike `var`, does not create a property on the global object:

    var foo = "Foo";  // globally scoped
    let bar = "Bar"; // globally scoped
    
    console.log(window.foo); // Foo
    console.log(window.bar); // undefined

Redeclaration
=============

In strict mode, `var` will let you re-declare the same variable in the same scope while `let` raises a SyntaxError.

    'use strict';
    var foo = "foo1";
    var foo = "foo2"; // No problem, 'foo' is replaced.
    
    let bar = "bar1";
    let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared