import LineString from "../../src/entities/LineString";
import Structure from "../../src/entities/Structure";

describe("LineString tests", () => {
    it('should create a LineString', () => {
        const lineString = new LineString([[31.3, 10.8], [10.3, 20.1]])
        expect(lineString).toBeInstanceOf(Structure)
        expect(lineString.type).toBe('LineString')
        expect(lineString.coordinates).toStrictEqual([[31.3, 10.8], [10.3, 20.1]])
    })
});
