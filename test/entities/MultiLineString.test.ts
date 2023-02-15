import MultiLineString from "../../src/entities/MultiLineString";

describe("MultiLineString tests", () => {
  const input = [
    [
      [10.0, 10.0],
      [20.0, 20.0],
      [10.0, 40.0],
    ],
    [
      [40.0, 40.0],
      [30.0, 30.0],
      [40.0, 20.0],
      [30.0, 10.0],
    ],
  ];

  const multiLineString = new MultiLineString(input);
  it("should create a multiLineString", () => {
    expect(multiLineString.type).toBe("MultiLineString");
    expect(multiLineString.coordinates).toStrictEqual(input);
  });

  it("should get the quantity of LineStrings", () => {
    expect(multiLineString.getQuantOfLineStrings()).toBe(input.length);
  });

  let index = 0;
  it.each(input)("should get the LineString in index %#", () => {
    const LineString = multiLineString.getLineStringByIndex(index);
    expect(LineString.coordinates).toEqual(input[index]);
  });
});
