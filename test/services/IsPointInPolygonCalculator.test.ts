import Point from "../../src/entities/Point";
import Polygon from "../../src/entities/Polygon";
import IsPointInPolygonCalculator from "../../src/services/IsPointInPolygonCalculator";

describe('IsPointInPolygon tests', () => {
    const polygon = new Polygon([[[30, 10], [40, 40], [20, 40], [10, 20]]])
    const pointsInsidePolygon = [
        new Point([24, 24]),
        new Point([30, 35]),
        new Point([10, 20]),
        new Point([25, 40]),
    ];
    const pointsOutsidePolygon = [
        new Point([15, 15]),
        new Point([35, 22]),
        new Point([25, 12]),
        new Point([30, 41]),
    ];
    const isPointInPolygonCalculator = new IsPointInPolygonCalculator()

    it.each(pointsInsidePolygon)("should have point $coordinates inside polygon", (point) => {
        const isPointInPolygon = isPointInPolygonCalculator.calculate(point, polygon)
        expect(isPointInPolygon).toBeTruthy()
    })

    it.each(pointsOutsidePolygon)("should have point $coordinates outside polygon", (point) => {
        const isPointInPolygon = isPointInPolygonCalculator.calculate(point, polygon)
        expect(isPointInPolygon).toBeFalsy()
    })
});