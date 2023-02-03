import Point from "../../src/entities/Point";
import Polygon from "../../src/entities/Polygon";
import IsPointInPolygonCalculator from "../../src/services/IsPointInPolygonCalculator";

describe("IsPointInPolygon tests", () => {
  interface inputPattern {
    testTitle: string;
    polygon: Polygon;
    pointsInsidePolygon: Point[];
    pointsOutsidePolygon: Point[];
  }
  const inputs: inputPattern[] = [
    {
      testTitle: "in simple polygons",
      polygon: new Polygon([
        [
          [30, 10],
          [40, 40],
          [20, 40],
          [10, 20],
        ],
      ]),
      pointsInsidePolygon: [
        new Point([24, 24]),
        new Point([30, 35]),
        new Point([10, 20]),
        new Point([25, 40]),
      ],
      pointsOutsidePolygon: [
        new Point([15, 15]),
        new Point([35, 22]),
        new Point([25, 12]),
        new Point([30, 41]),
      ],
    },
    {
      testTitle: "with polygons inside polygons",
      polygon: new Polygon([
        [
          [35, 10],
          [45, 45],
          [15, 40],
          [10, 20],
          [35, 10],
        ],
        [
          [20, 30],
          [35, 35],
          [30, 20],
          [20, 30],
        ],
      ]),
      pointsInsidePolygon: [
        new Point([16.12045883056132, 23.84726709443912]),
        new Point([35.56764937510897, 32.95462551628616]),
        new Point([15.62058764135378, 39.46682818422099]),
      ],
      pointsOutsidePolygon: [
        new Point([46.59570601881538, 33.188077764036336]),
        new Point([28.45509314806384, 27.85900277021551]),
        new Point([10.736065275434441, 38.988247637013615]),
        new Point([8.215460028902783, 27.76933934694634]),
      ],
    },
  ];

  const isPointInPolygonCalculator = new IsPointInPolygonCalculator();

  describe.each(inputs)("$testTitle", (input) => {
    it.each(input.pointsInsidePolygon)(
      "should have point $coordinates inside polygon",
      (point) => {
        const isPointInPolygon = isPointInPolygonCalculator.calculate(
          point,
          input.polygon
        );
        expect(isPointInPolygon).toBeTruthy();
      }
    );

    it.each(input.pointsOutsidePolygon)(
      "should have point $coordinates outside polygon",
      (point) => {
        const isPointInPolygon = isPointInPolygonCalculator.calculate(
          point,
          input.polygon
        );
        expect(isPointInPolygon).toBeFalsy();
      }
    );
  });
});
