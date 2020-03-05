
import {
  doubleArray,
  evensOnlyArray,
  arraySum,
  allNumberGreaterThanZero,
  someNumbersAreOdd,
  evensOnlyAndDoubleArray,
  findItem,
  sortArray,
  moreThan100Likes,
  justArtistMoreThan100Likes,
  numberOfLikes,
  findObjByName,
  sortArtistByName
} from "./basics";

describe("evensOnlyArray  test", () => {
  test("evensOnlyArray should filter evens", () => {
    expect(evensOnlyArray([1, 2, 3, 4])).toEqual([2, 4]);
  });
});

describe("filterArray test", () => {
  test("originalArray should double itself", () => {
    expect(doubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });
});
describe("arraySum test", () => {
  test("arraySum should sum itself", () => {
    expect(arraySum([1, 2, 3, 4])).toEqual(10);
  });
});

describe("someNumbersAreOdd test", () => {
  test("someNumbersAreOdd with all odd", () => {
    expect(someNumbersAreOdd([1, 3, 5, 7, -9])).toEqual(false);
  });
  test("someNumbersAreOdd with all even", () => {
    expect(someNumbersAreOdd([-2, -4, 0, 8])).toEqual(true);
  });
  test("someNumbersAreOdd with one odd", () => {
    expect(someNumbersAreOdd([1, 0, 4])).toEqual(true);
  });
});

describe("allNumberGreaterThanZero test", () => {
  test("allNumberGreaterThanZero with all postives", () => {
    expect(allNumberGreaterThanZero([1, 2, 3, 4])).toEqual(true);
  });
  test("allNumberGreaterThanZero with a negative", () => {
    expect(allNumberGreaterThanZero([1, -2, 3, 4])).toEqual(false);
  });
  test("allNumberGreaterThanZero with a 0", () => {
    expect(allNumberGreaterThanZero([1, 0, 3, 4])).toEqual(false);
  });
});

describe("evensOnlyAndDoubleArray test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("evensOnlyAndDoubleArray with all postives", () => {
    expect(evensOnlyAndDoubleArray([1, 2, 3, 4])).toEqual([4, 8]);
  });
  // which way is correct if you double a array before you filter all numbers will be positive
  // test("evensOnlyAndDoubleArray with all postives", () => {
  //   expect(evensOnlyAndDoubleArray([1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  // });
});

describe("findItem test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("findItem with value", () => {
    expect(findItem([1, 2, 3, 4], 1)).toEqual(1);
  });
  // which way is correct if you double a array before you filter all numbers will be positive
  test("findItem without value", () => {
    expect(findItem([1, 2, 3, 4], 5)).toEqual("not found");
  });
});

describe("findItem test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("findItem with value", () => {
    expect(findItem([1, 2, 3, 4], 1)).toEqual(1);
  });
  // which way is correct if you double a array before you filter all numbers will be positive
  test("findItem without value", () => {
    expect(findItem([1, 2, 3, 4], 5)).toEqual("not found");
  });
});

describe("sortArray test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("sorts array", () => {
    expect(sortArray([1, 2, 3, 4, 4, 3])).toEqual([4, 4, 3, 3, 2, 1]);
  });
});

const artists = [
  { name: "a", likes: 100 },
  { name: "s", likes: 99 },
  { name: "c", likes: 101 }
];
const sortedArtists = [
  { name: "a", likes: 100 },
  { name: "c", likes: 101 },
  { name: "s", likes: 99 }
];
describe("moreThan100Likes test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("moreThan100Likes", () => {
    expect(moreThan100Likes(artists)).toEqual([{ name: "c", likes: 101 }]);
  });
});

describe("justArtistMoreThan100Likes test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("justArtistMoreThan100Likes", () => {
    expect(justArtistMoreThan100Likes(artists)).toEqual(["c"]);
  });
});

describe("numberOfLikes test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("numberOfLikes", () => {
    expect(numberOfLikes(artists)).toEqual(300);
  });
});

describe("findObjByName test", () => {
  // which way is correct if you double a array all numbers will be positive
  test("findObjByName", () => {
    expect(findObjByName(artists, "a")).toEqual({ name: "a", likes: 100 });
  });
});

describe("sortArtistByName", () => {
  // which way is correct if you double a array all numbers will be positive
  test("sortArtistByName", () => {
    expect(sortArtistByName(artists)).toEqual(sortedArtists);
  });
});
