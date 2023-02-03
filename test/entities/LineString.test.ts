import LineString from "../../src/entities/LineString";
import Structure from "../../src/entities/Structure";

describe("LineString tests", () => {
    it('should create a LineString', () => {
        const lineString = new LineString([[31.3, 10.8], [10.3, 20.1]])
        expect(lineString).toBeInstanceOf(Structure)
        expect(lineString.type).toBe('LineString')
        expect(lineString.coordinates).toStrictEqual([[31.3, 10.8], [10.3, 20.1]])
    })

    const mainLine = new LineString([[3, 1], [5, 12]])
    const linesInstersecting = [
        new LineString([[2, 6], [6, 6]]),
        new LineString([[4, 14], [4, 0]]),
        new LineString([[6, 2], [0, 8]])
    ]
    const linesNotInstersecting = [
        new LineString([[-4, 2], [-2, 4]]),
        new LineString([[0, 0], [4, 0]]),
        new LineString([[10, 2], [6, 12]])
    ]

    it.each(linesInstersecting)('should intersect with $coordinates', (otherLine) => {
        const isIntersecting = mainLine.isIntersectingWith(otherLine);
        expect(isIntersecting).toBeTruthy();
    })

    it.each(linesNotInstersecting)('should not intersect with $coordinates', (otherLine) => {
        const isIntersecting = mainLine.isIntersectingWith(otherLine);
        expect(isIntersecting).toBeFalsy();
    })

    it('should not intersect when lines have no size', () => {
        const firstLine = new LineString([[1, 2], [1, 2]])
        const secondLine = new LineString([[2, 4], [2, 4]])
        expect(firstLine.isIntersectingWith(secondLine)).toBeFalsy()
    })
});
