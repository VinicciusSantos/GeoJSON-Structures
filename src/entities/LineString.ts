import Structure from "./Structure";

export default class LineString extends Structure {
    constructor(readonly coordinates: number[][]) {
        super('LineString', coordinates)
    }
}