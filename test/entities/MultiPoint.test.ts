import MultiPoint from "../../src/entities/MultiPoint";

describe("MultiPoint tests", () => {
  const input = [
    [10.0, 40.0],
    [40.0, 30.0],
    [20.0, 20.0],
    [30.0, 10.0],
  ];

  const multipoint = new MultiPoint(input);
  it("should create a multipoint", () => {
    expect(multipoint.type).toBe("MultiPoint");
    expect(multipoint.coordinates).toStrictEqual(input);
  });

  it("should get the quantity of points", () => {
    expect(multipoint.getQuantOfPoints()).toBe(input.length);
  });

  let index = 0;
  it.each(input)("should get the point in index %#", () => {
    const point = multipoint.getPointByIndex(index);
    expect(point.coordinates).toEqual(input[index]);
  });
});
