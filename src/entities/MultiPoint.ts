import Point from "./Point";
import Structure from "./Structure";

export default class MultiPoint extends Structure {
    constructor(readonly coordinates: number[][]) {
        super("MultiPoint", coordinates)
    }

    public getQuantOfPoints(): number {
        return this.coordinates.length
    }

    public getPointByIndex(index: number): Point {
        return new Point(this.coordinates[index])
    }
}