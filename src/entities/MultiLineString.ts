import LineString from "./LineString";
import Structure from "./Structure";

export default class MultiLineString extends Structure {
    constructor(readonly coordinates: number[][][]) {
        super("MultiLineString", coordinates)
    }

    public getQuantOfLineStrings(): number {
        return this.coordinates.length
    }

    public getLineStringByIndex(index: number): LineString {
        return new LineString(this.coordinates[index])
    }
}