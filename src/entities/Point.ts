import Structure from "./Structure";

export default class Point extends Structure {
    public x: number;
    public y: number;
    
    constructor(readonly coordinates: number[]) {
        super('Point', coordinates);
        this.x = this.getX()
        this.y = this.getY()
    }

    public getX(): number {
        return this.coordinates[0]
    }

    public getY(): number {
        return this.coordinates[1]
    }

    public distanceTo(ohterPoint: Point): number {
        const distX = Math.pow((ohterPoint.x - this.x), 2)
        const distY = Math.pow((ohterPoint.y - this.y), 2)
        return Math.sqrt(distX + distY)
    }
}