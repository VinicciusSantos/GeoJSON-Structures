import MultiPolygon from "../../src/entities/MultiPolygon";
import Point from "../../src/entities/Point";
import IsPointInMultiPolygonCalculator from "../../src/services/isPointInMultiPolygonCalculator";

interface InputPattern {
  multiPolygon: MultiPolygon;
  pointsInside: Point[];
  pointsOutside: Point[];
}

describe("IsPointInMultiPolygonCalculator service tests", () => {
  const input = {
    multiPolygon: new MultiPolygon([
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
    ]),
    pointsInside: [
      new Point([41.78554933612867, 33.32947399246913]),
      new Point([13.77126093442277, 23.208937197974578]),
      new Point([33.8782958794167, 19.804491432797406]),
      new Point([21.841023597443467, 12.471174226440837]),
      new Point([23.39529206981996, 43.86928490234675]),
    ],
    pointsOutside: [
      new Point([41.78329532204248, 13.69106284143865]),
      new Point([22.175307186149297, 21.52448096138673]),
      new Point([23.118909348171144, 39.218188054158304]),
      new Point([8.094590161773596, 18.590218371712936]),
      new Point([40.94579753356845, -9.08743812891369]),
    ],
  };
  const isPointInsideMultiPolygonCalculator =
    new IsPointInMultiPolygonCalculator();

  it.each(input.pointsInside)(
    "should have point $coordinates inside multipolygon",
    (point) => {
      const isPointInMultiPolygon =
        isPointInsideMultiPolygonCalculator.calculate(
          point,
          input.multiPolygon
        );
      expect(isPointInMultiPolygon).toBeTruthy;
    }
  );

  it.each(input.pointsOutside)(
    "should have point $coordinates outside multipolygon",
    (point) => {
      const isPointInMultiPolygon =
        isPointInsideMultiPolygonCalculator.calculate(
          point,
          input.multiPolygon
        );
      expect(isPointInMultiPolygon).toBeFalsy();
    }
  );
});
