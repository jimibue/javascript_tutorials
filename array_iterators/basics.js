
// numberArray = [1,2,3,4]

// return array with double values in array
export const doubleArray = arr => {
  //one line doesn't need return
  return arr.map(num => num * 2);
};

// return array with all even numbers
export const evensOnlyArray = arr => {
  return arr.filter(num => {
    //with brackets needs return
    return num % 2 === 0;
  });
};

// // return array with sum of numbers
export const arraySum = numberArray => {
  return numberArray.reduce((accum, curr) => {
    return accum + curr;
  }, 0); // 0 is default but can change here
};

// return true if every item greater than 0
// use method definition syntax
export function allNumberGreaterThanZero(arr) {
  return arr.every(function(num) {
    return num > 0;
  });
}

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some
export function someNumbersAreOdd(arr) {
  return arr.some(num => num % 2 === 0); //one-liner
}

// // return array double and even
export const evensOnlyAndDoubleArray = arr => {
  const evensOnly = evensOnlyArray(arr);
  return doubleArray(evensOnly);
  // return doubleArray(evensOnlyArray(arr))

  // -- or --
  // return arr.filter(num => num % 2 === 0).map(num => num * 2);

  //  WHICH WAY IS CORRECT??
  // return arr.map(num => num * 2).filter(num => num %2 === 0)
};

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1
export const findItem = (arr, num) => {
  return arr.includes(num) ? num : "not found";
};

// // sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*
export const sortArray = arr => {
  return arr.sort((a, b) => b - a);
};

// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age

// artists = [
//   {name: 'a', likes:100},
//   {name: 'c', likes:99},
//   {name: 'c', likes:101},
// ]

// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter
export const moreThan100Likes = artist => {
  return artist.filter(artist => artist.likes > 100);
};

// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter
export const justArtistMoreThan100Likes = arr => {
  return moreThan100Likes(arr).map(artist => artist.name);
};

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes
// need default value here
export const numberOfLikes = arr => {
  return arr.reduce((accum, artist) => {
    return accum + artist.likes;
  }, 0);
};

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}
export const findObjByName = (arr, name) =>
  arr.find(item => item.name === name);

// // returns array of artist sorted by likes
// sortArtistByName(artists)
// export const sortArtistByName = (arr) => arr.sort( (a,b) => b.name - a.name)
export const sortArtistByName = arr => {
  return arr.sort((a, b) => {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
};
