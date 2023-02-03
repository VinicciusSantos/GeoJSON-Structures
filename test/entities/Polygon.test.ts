import Polygon from "../../src/entities/Polygon";
import Structure from "../../src/entities/Structure";

describe("Polygon tests", () => {
  it("should create a Polygon", () => {
    const input = [
      [
        [31.3, 10.8],
        [10.3, 20.1],
      ],
      [
        [1.3, 1.8],
        [27.3, 30.1],
      ],
      [
        [32.0, 0.8],
        [60.3, 0.1],
      ],
    ];
    const polygon = new Polygon(input);
    expect(polygon).toBeInstanceOf(Structure);
    expect(polygon.type).toBe("Polygon");
    expect(polygon.coordinates).toStrictEqual(input);
  });

  describe("extreme points", () => {
    const input = [[
      [2.5, 0.2],
      [2.6, -1.64],
      [1,1],
      [4.56, 2.36],
      [5.72,-1]
    ]];
    const polygon = new Polygon(input)
    const extremePoints = {
      top: [4.56,2.36],
      bottom: [2.6, -1.64],
      left: [1,1],
      right: [5.72, -1]
    }
    it.each(Object.entries(extremePoints))("should get the extreme %s point", (position, coordinates) => {
      const point = polygon.getExtremePoints()[position]
      expect(point.coordinates).toStrictEqual(coordinates)
    });
  });
});
