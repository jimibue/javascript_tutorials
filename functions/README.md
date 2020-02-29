

Function expressions vs. function declarations
==============================================



What is the difference between these two ways of writing a function.
```javascript
    // Function declaration
    function add(num1, num2) {
    	return num1 + num2;
    }
    
    // Function expression
    var add = function (num1, num2) {
    	return num1 + num2;
    };
```
The first example, `function add() {}`, is called a _function declaration_. The second example, `var add = function () {}`, is called a _function expression_.

They more-or-less do the same example thing, but there’s one subtle yet important difference between them.

Hoisting [#](#hoisting)
-----------------------

When a JavaScript file (or HTML document with JavaScript in it) is loaded, _function declarations_ are _hoisted_ to the top of the code by the browser before any code is executed.

What does that mean, exactly?

Specifically, all of the functions written with function declarations are “known” before any code is run. This allows you to call a function before you declare.
```javascript
    /**
     * This works!
     */
    function add(num1, num2) {
    	return num1 + num2;
    }
    add(3, 3); // returns 6
    
    
    /**
     * This does, too!
     */
    substract(7, 4); // returns 3
    function subtract(num1, num2) {
    	return num1 - num2;
    }
    
```
_Function expressions_, however, do **not** hoist. If you try to run a function before you’ve expressed it, you’ll get an error.
```javascript
    /**
     * This works!
     */
    var add = function(num1, num2) {
    	return num1 + num2;
    };
    add(3, 3); // returns 6
    
    
    /**
     * This does not =(
     */
    substract(7, 4); // returns Uncaught TypeError: subtract is not a function
    var subtract = function (num1, num2) {
    	return num1 - num2;
    };
    
```

Arrow function vs. non-arrow functions
==============================================
>tl:dr arrow functions are `anonymous` and also functions don't bind `this` to the function

![](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)


### Main benefit: No binding of ‘this’


In classic function expressions, the `this` keyword is bound to different values based on the _context_ in which it is called. With arrow functions however, `this` is _lexically bound_. It means that it uses`this` from the code that contains the arrow function.

For example, look at the `setTimeout` function below:
```javascript
    // ES5
    var obj = {
      id: 42,
      counter: function counter() {
        setTimeout(function() {
          console.log(this.id);
        }.bind(this), 1000);
      }
    };
```
In the ES5 example, `.bind(this)` is required to help pass the `this` context into the function. Otherwise, by default `this` would be undefined.
```javascript
    // ES6
    var obj = {
      id: 42,
      counter: function counter() {
        setTimeout(() => {
          console.log(this.id);
        }, 1000);
      }
    };
```
ES6 arrow functions can’t be bound to a `this` keyword, so it will lexically go up a scope, and use the value of `this` in the scope in which it was defined.

### When you should not use Arrow Functions

After learning a little more about arrow functions, I hope you understand that they do not replace regular functions.

Here are some instances where you probably wouldn’t want to use them:

1.  Object methods

When you call `cat.jumps`, the number of lives does not decrease. It is because `this` is not bound to anything, and will inherit the value of `this` from its parent scope.
```javascript
    var cat = {
      lives: 9,
      jumps: () => {
        this.lives--;
      }
    }
```
2. Callback functions with dynamic context

If you need your context to be dynamic, arrow functions are not the right choice. Take a look at this event handler below:
```javascript
    var button = document.getElementById('press');
    button.addEventListener('click', () => {
      this.classList.toggle('on');
    });
```
If we click the button, we would get a TypeError. It is because `this` is not bound to the button, but instead bound to its parent scope.

3. When it makes your code less readable

It is worth taking into consideration the variety of syntax we covered earlier. With regular functions, people know what to expect. With arrow functions, it may be hard to decipher what you are looking at straightaway.

### When you should use them

Arrow functions shine best with anything that requires `this` to be bound to the context, and not the function itself.

