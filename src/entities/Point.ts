import Structure from "./Structure";

export default class Point extends Structure {
    public x: number;
    public y: number;
    constructor(readonly coordinates: number[]) {
        super('Point', coordinates);
        this.x = this.getX()
        this.y = this.getY()
    }

    getX(): number {
        return this.coordinates[0]
    }

    getY(): number {
        return this.coordinates[1]
    }
}