# Callbacks
>tl;dr A callback function is when we pass a function as an argument into another function

## Why use Callbacks?
>tl;dr Because you have to
1. It is really handy to be able to pass a function to function example array_iterators
2. Javascript is single threaded(can only do one thing at a time), and web pages are highly asnyc( code does not exucute from top to bottom) and event driven(clicks, http requests, ajax calls)
   example: a user clicks a button to get information from a server.  
    - We don't know when the user is going to click the button but we can add a event listener to listen for the click and then call a call back when it is clicked
    - It is going to take some time for the data from the server to comeback, We can't just pause the app the so the user can't do anything while the data is retrieved we need to be able to let the user continue doing stuff and then call the callback when data comes back

 ```html
    <button onclick="getData()">Get Data</button> 
 ```
 
 ```javascript
   // simulating a  fake api call that takes one second
   let fakeApiCall = new Promise((resolve, reject) => {
    setTimeout(() => resolve("here is your data"), 1000)
  });
  
  async function getData(){
    console.log('***ONCLICK EVENT LISTENER CALLED***')
    let data = await fakeApiCall.then((data)=>{
       console.log('****FAKEAPI CALL CALLBACK CALLED***')
       console.log('Data:', data)
       return data;
    })
  
  }

  // main program
  console.log('user doing stuff')
  console.log('user clicks button')
  getData()
  console.log('user does other stuff')
  console.log('getData call is not blocking this from happening')
 ```

