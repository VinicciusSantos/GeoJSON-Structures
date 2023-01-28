import Structure from "./Structure";

export default class Polygon extends Structure {
    constructor(readonly coordinates: number[][][]) {
        super('Polygon', coordinates)
    }
}