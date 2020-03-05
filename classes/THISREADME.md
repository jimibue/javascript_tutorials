### in terminal

1. What are we doing here?
```javascript
    function logThis() {
      console.log(this);
    }
```
```javascript
    logThis()
    // Window {parent: Window, opener: null, top: Window, length: 1, frames: Window, …}
```

2.  What are we doing here?
```javascript
var john = {
  name: 'John',
  greet: function() {
      // this points to the enclosing object
      console.log('Hi! My name is ' + this.name);
  }
};
```
```javascript
john.greet(); //methods are called through their object (john here)
```
3. What are we doing here?
```javascript
    var john = {
        name: 'John',
        greet: function(people) {
            people.forEach(function (person) {
                // this points to the global object
                console.log('Hi ' + person + '. My name is ' + this.name);
            });
        }
    }
```
```javascript
    john.greet(['Jane', 'James', 'Jill']); // Hi Jane. My name is undefined ...
```

4. one way to fixe
```javascript
    var john = {
        name: 'John',
        greet: function(people) {
            var that = this
            people.forEach(function (person) {
                // this points to the global object
                console.log('Hi ' + person + '. My name is ' + that.name);
            });
        }
    }
```
```javascript
    john.greet(['Jane', 'James', 'Jill']); // Hi Jane. My name is john ...
```
