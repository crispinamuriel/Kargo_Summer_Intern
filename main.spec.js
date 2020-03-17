describe("oneToOneMap", () => {
  it("is a function", () => {
    expect(typeof oneToOneMap).toEqual("function");
  });

  it("returns a boolean", () => {
    let returnedValue = oneToOneMap("abc", "bdc");
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if the two input strings have 1:1 character mapping", () => {
    let returnedValue = oneToOneMap("abc", "bdc");
    expect(returnedValue).toEqual(true);
  });

  it("returns false if the  two input strings do not have 1:1 character mapping", () => {
    let returnedValue = oneToOneMap("foo", "bar");
    expect(returnedValue).toEqual(false);
  });
});
