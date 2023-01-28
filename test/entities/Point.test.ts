import Point from "../../src/entities/Point";
import Structure from "../../src/entities/Structure";

describe("Point tests", () => {
    it('should create a point', () => {
        const point = new Point([31.3, 10.8])
        expect(point).toBeInstanceOf(Structure)
        expect(point.type).toBe('Point')
        expect(point.coordinates).toStrictEqual([31.3, 10.8])
    })
});
