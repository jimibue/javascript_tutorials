## Objects

JavaScript supports extending data types. JavaScript objects are a great way to define custom data types.

An object is an instance which contains a set of key value pairs. Unlike primitive data types, objects can represent multiple or complex values and can change over their life time. The values can be scalar values or functions or even array of other objects.

```javascript
var identifier = {
   key1: value, 
   Key2: function () { 
      //functions 
   }, 
   key3: [“content1”,” content2”] 
} 
```
### Creating a object
```javascript

var person = { 
   firstName:"Hom", 
   lastName:"Tanks", 
   func:function(){return "Hello!!"},    
};
console.log(person.firstName)
console.log(person['lastName'])
```

>Following is the syntax for accessing a property.
Object_name.property_key                    
OR              
Object_name["property_key"]



### Object de-structuring
```javascript
var emp = { name: 'John', id: 3 } 
var {name, id} = emp 
console.log(name) 
console.log(id)
```

### Example − Cloning an object and looping over keys

```javascript 
  var det = { name:"Tom", ID:"E1001" }; 
  var copy = Object.assign({}, det); 
  console.log(copy);  
  for (let val in copy) { 
    console.log(copy[val]) 
  }

  var det1 = { name:"Tom", ID:"E1001" }; 
  var copy1 = {...det1}
  console.log(copy1); 

```

### Example − Cloning an array
```javascript
let scores  = [10, 20, 30];  
let scoresCopy  = [...scores];
console.log(score)  

let scores1  = [10, 20, 30];   
let scores2  = [40, 50, 60];   
 
let mergedScore = [...scores1, ...scores2];
 
console.log(mergedScore);   //[ 10, 20, 30, 40, 50, 60 ]
```