import LineString from "../../src/entities/LineString";
import Point from "../../src/entities/Point";
import IsPointInLineCalculator from "../../src/services/IsPointInLineCalculator";

describe("IsPointInLineCalculator tests", () => {
  const line = new LineString([
    [-2, -2],
    [4, 4],
  ]);
  const pointsInLine = [
    new Point([-2, -2]),
    new Point([-1, -1]),
    new Point([0, 0]),
    new Point([4, 4]),
  ];
  const pointsOutsideLine = [
    new Point([30, 1]),
    new Point([4, 0]),
    new Point([4, 5]),
    new Point([6, 6]),
  ];

  const isPointInLineCalculator = new IsPointInLineCalculator();

  it.each(pointsInLine)(
    "should has point $coordinates in the line",
    (point) => {
      const isPointInLine = isPointInLineCalculator.calculate(point, line);
      expect(isPointInLine).toBeTruthy();
    }
  );

  it.each(pointsOutsideLine)(
    "should has point $coordinates outside the line",
    (point) => {
      const isPointInLine = isPointInLineCalculator.calculate(point, line);
      expect(isPointInLine).toBeFalsy();
    }
  );
});
