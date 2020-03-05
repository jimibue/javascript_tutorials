describe("Array Equality", () => {
  it("1 pass", () => {
    let arr = [1, 2, 3];
    let arr2 = arr;
    // Runs successfully
    expect(arr).toBe(arr2);

  });
  it("2 fails", () => {
    let arr = [1, 2, 3];

    // Fails as references are not equal
    expect(arr).toBe([1, 2, 3]);
  });
  it("3 passes", () => {
    const x = { a: { b: 3 } };
    const y = { a: { b: 3 } };

    expect(x).toEqual(y);
  });
  it("4 fails", () => {
    const x = { a: { b: 3 } };
    const y = { a: { b: 3 } };

    expect(x).toBe(y);
  });
});
