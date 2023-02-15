import MultiPolygon from "../../src/entities/MultiPoligon";

describe("MultiPolygon tests", () => {
  const input = [
    [
      [
        [40.0, 40.0],
        [20.0, 45.0],
        [45.0, 30.0],
        [40.0, 40.0],
      ],
    ],
    [
      [
        [20.0, 35.0],
        [10.0, 30.0],
        [10.0, 10.0],
        [30.0, 5.0],
        [45.0, 20.0],
        [20.0, 35.0],
      ],
      [
        [30.0, 20.0],
        [20.0, 15.0],
        [20.0, 25.0],
        [30.0, 20.0],
      ],
    ],
  ];

  const multiPolygon = new MultiPolygon(input);
  it("should create a multiPolygon", () => {
    expect(multiPolygon.type).toBe("MultiPolygon");
    expect(multiPolygon.coordinates).toStrictEqual(input);
  });

  it("should get the quantity of Polygons", () => {
    expect(multiPolygon.getQuantOfPolygons()).toBe(input.length);
  });

  let index = 0;
  it.each(input)("should get the Polygon in index %#", () => {
    const Polygon = multiPolygon.getPolygonByIndex(index);
    expect(Polygon.coordinates).toEqual(input[index]);
  });
});
