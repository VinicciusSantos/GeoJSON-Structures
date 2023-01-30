import Point from "./Point";
import Structure from "./Structure";

export default class LineString extends Structure {
    constructor(readonly coordinates: number[][]) {
        super('LineString', coordinates)
    }

    getStartPoint(): Point {
        return new Point([this.coordinates[0][0], this.coordinates[0][1]]);
    }

    getEndPoint(): Point {
        return new Point([this.coordinates[0][0], this.coordinates[0][1]]);
    }
}