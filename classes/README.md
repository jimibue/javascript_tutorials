# JS Classes

```javascript
class User {
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    return this._name;
  }

  sayHiThreeTimes() {
    const nameArray = [1, 2, 3].map(i => {
      return this._name;
    });
    return nameArray.join("!!!");
  }

  sayHiThreeTimes1() {
    const nameArray = [1, 2, 3].map(function() {
      return this._name;
    });
    return nameArray.join("!!!");
  }
}

// Usage:
let user = new User("John");
user.sayHi();
user.sayHi(); // ERROR
```

### Inheritance

```javascript
class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}
class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
    this._millage = 0;
  }
  // getter and setter
  set millage(millage) {
    this._millage = name;
  }

  get millage() {
    return this._millage;
  }

  getName() {
    return "It is a car: " + super.getName();
  }

  static fact() {
    return 'Cars are a Vehicle'
  }
}
let car = new Car("Tesla");
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car
console.log(car._millage) // 0
car._millage = 100
console.log(car._millage) // 100
```
