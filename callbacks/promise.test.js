import regeneratorRuntime from "regenerator-runtime";
// A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved (e.g., a network error occurred).

// first a timeout example
// setTimeout takes a function and a time to wait to call that function
// run in terminal
// setTimeout(()=>{console.log('timeout end')} ,1000)

// const wait = time => new Promise((resolve) => setTimeout(resolve, time));

// wait(3000).then((message) => console.log(message)); // 'Hello!'


//uppercase.
const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string')
      return
    }
    resolve(str.toUpperCase())
  })
}


// success (resolve) case calls .then
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('test').then(str => {
    expect(str).toBe('TEST')
  })
})

// error case (reject ) case calls 
test(`uppercase 'test' to equal 'TEST'`, () => {
  return uppercase('').catch(e => {
    expect(e).toMatch('Empty string')
  })
})






// 
let fakeApiCall = () => new Promise((resolve, reject) => {
  setTimeout(() => resolve("here is your data"), 1000)
});

test(`uppercase 'test' to equal 'TEST'`, () => {
  return fakeApiCall().then(data => {
    expect(data).toBe('here is your data')
  })
})



// ASYNC VERSION
test(`uppercase 'test' to equal 'TEST'`, async () => {
  const str = await uppercase('test')
  expect(str).toBe('TEST')
})