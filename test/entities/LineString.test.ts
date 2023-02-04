import LineString from "../../src/entities/LineString";
import Structure from "../../src/entities/Structure";

describe("LineString tests", () => {
  it("should create a LineString", () => {
    const lineString = new LineString([
      [31.3, 10.8],
      [10.3, 20.1],
    ]);
    expect(lineString).toBeInstanceOf(Structure);
    expect(lineString.type).toBe("LineString");
    expect(lineString.coordinates).toStrictEqual([
      [31.3, 10.8],
      [10.3, 20.1],
    ]);
  });

  describe("lines intersection", () => {
    const mainLine = new LineString([
      [3, 1],
      [5, 12],
    ]);
    const linesInstersecting = [
      new LineString([
        [2, 6],
        [6, 6],
      ]),
      new LineString([
        [4, 14],
        [4, 0],
      ]),
      new LineString([
        [6, 2],
        [0, 8],
      ]),
    ];
    const linesNotInstersecting = [
      new LineString([
        [-4, 2],
        [-2, 4],
      ]),
      new LineString([
        [0, 0],
        [4, 0],
      ]),
      new LineString([
        [10, 2],
        [6, 12],
      ]),
    ];

    it.each(linesInstersecting)(
      "should intersect with $coordinates",
      (otherLine) => {
        const isIntersecting = mainLine.isIntersectingWith(otherLine);
        expect(isIntersecting).toBeTruthy();
      }
    );

    it.each(linesNotInstersecting)(
      "should not intersect with $coordinates",
      (otherLine) => {
        const isIntersecting = mainLine.isIntersectingWith(otherLine);
        expect(isIntersecting).toBeFalsy();
      }
    );

    it("should not intersect when lines have no size", () => {
      const firstLine = new LineString([
        [1, 2],
        [1, 2],
      ]);
      const secondLine = new LineString([
        [2, 4],
        [2, 4],
      ]);
      expect(firstLine.isIntersectingWith(secondLine)).toBeFalsy();
    });
  });

  describe("position methods", () => {
    const inputs = [
      {
        lineCoordinates: [
          [1, 4],
          [7, 5],
          [6, 5],
          [8, 2],
        ],
        startPoint: [1, 4],
        endPoint: [8, 2],
        qtdPoints: 4,
        size: 10.688313805762208,
      },
      {
        lineCoordinates: [
          [24, 7],
          [4, 0],
          [0, 4],
          [8, 7],
          [4, 4],
        ],
        startPoint: [24, 7],
        endPoint: [4, 4],
        qtdPoints: 5,
        size: 40.390478095227,
      },
      {
        lineCoordinates: [
          [35, 12],
          [0, 0],
          [8, 7],
        ],
        startPoint: [35, 12],
        endPoint: [8, 7],
        qtdPoints: 3,
        size: 47.63014581273465,
      },
    ];

    describe("getStartPoint", () => {
      it.each(inputs)("start point should be $startPoint", (input) => {
        const lineString = new LineString(input.lineCoordinates);
        const startPoint = lineString.getStartPoint().coordinates;
        expect(startPoint).toStrictEqual(input.startPoint);
      });
    });

    describe("getEndPoint", () => {
      it.each(inputs)("end point should be $endPoint", (input) => {
        const lineString = new LineString(input.lineCoordinates);
        const endPoint = lineString.getEndPoint().coordinates;
        expect(endPoint).toStrictEqual(input.endPoint);
      });
    });

    describe("getQuantOfPoints", () => {
      it.each(inputs)("should have $qtdPoints points", (input) => {
        const lineString = new LineString(input.lineCoordinates);
        const qtdPoints = lineString.getQuantOfPoints();
        expect(qtdPoints).toBe(input.qtdPoints);
      });
    });

    describe("getSize", () => {
      it.each(inputs)("should have size $size", (input) => {
        const lineString = new LineString(input.lineCoordinates);
        const size = lineString.getSize();
        expect(size).toBeCloseTo(input.size);
      });
    });

    describe("getPointInIndexPosition", () => {
      it.each(inputs)("should get the elements by index", (input) => {
        const lineString = new LineString(input.lineCoordinates);
        let index = 0;
        for (let point of input.lineCoordinates) {
          const getPointOutput =
            lineString.getPointInIndexPosition(index).coordinates;
          expect(getPointOutput).toStrictEqual(point);
          index++;
        }
      });
    });
  });
});
