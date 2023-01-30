import Structure from "./Structure";

export default class Point extends Structure {
    constructor(readonly coordinates: number[]) {
        super('Point', coordinates);
    }

    getX(): number {
        return this.coordinates[0]
    }

    getY(): number {
        return this.coordinates[1]
    }
}