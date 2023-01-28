import Polygon from "../../src/entities/Polygon";
import Structure from "../../src/entities/Structure";

describe("Polygon tests", () => {
  it("should create a Polygon", () => {
    const polygon = new Polygon([
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
    ]);
    expect(polygon).toBeInstanceOf(Structure);
    expect(polygon.type).toBe("Polygon");
    expect(polygon.coordinates).toStrictEqual([
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
    ]);
  });
});
