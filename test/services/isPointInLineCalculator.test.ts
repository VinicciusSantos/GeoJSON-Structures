import LineString from "../../src/entities/LineString";
import Point from "../../src/entities/Point";
import IsPointInLineCalculator from "../../src/services/isPointInLineCalculator";

describe("IsPointInLineCalculator tests", () => {
    const line = new LineString([[-2, -2], [4, 4]])
    const pointsInLine = [
        new Point([-1, -1]),
        new Point([0, 0])
    ]
    const pointsOutsideLine = [
        new Point([30, 1]),
        new Point([4, 0])
    ]

    const isPointInLineCalculator = new IsPointInLineCalculator()
    
    it.each(pointsInLine)('should has point in the line', (point) => {
        const isPointInLine = isPointInLineCalculator.calculate(point, line)
        expect(isPointInLine).toBeTruthy()
    })
});