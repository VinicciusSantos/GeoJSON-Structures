import Point from "../../src/entities/Point";
import Structure from "../../src/entities/Structure";

describe("Point tests", () => {
    it('should create a point', () => {
        const point = new Point([31.3, 10.8])
        expect(point).toBeInstanceOf(Structure)
        expect(point.type).toBe('Point')
        expect(point.coordinates).toStrictEqual([31.3, 10.8])
    })

    describe('distance between points', () => {
        const inputs = [
            {
                first: [4.8, 7.6],
                second: [12, 5.5],
                distance: 7.5
            },
            {
                first: [44.8, 1.8],
                second: [120, -54.5],
                distance: 93.94003406429017
            },
            {
                first: [0.8, 4.8],
                second: [4, 4.15],
                distance: 3.2653483734511393
            },
            {
                first: [8, 5],
                second: [7, 5],
                distance: 1
            }
        ];
        it.each(inputs)("Distance between $first and $second should be close to $distance", (input) => {
            const first = new Point(input.first)
            const second = new Point(input.second)
            const calculatedDistance = first.distanceTo(second)
            expect(calculatedDistance).toBeCloseTo(input.distance)
        })
    })
});
