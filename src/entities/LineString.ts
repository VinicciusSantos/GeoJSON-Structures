import Point from "./Point";
import Structure from "./Structure";

export default class LineString extends Structure {
  constructor(readonly coordinates: number[][]) {
    super("LineString", coordinates);
  }

  public getStartPoint(): Point {
    return new Point([this.coordinates[0][0], this.coordinates[0][1]]);
  }

  public getEndPoint(): Point {
    return new Point([
      this.coordinates[this.getQuantOfPoints() - 1][0],
      this.coordinates[this.getQuantOfPoints() - 1][1],
    ]);
  }

  public getPointInIndexPosition(indexPosition: number): Point {
    if (indexPosition + 1 > this.getQuantOfPoints()) {
      throw new Error("Index of point out of line range!");
    }
    return new Point([
      this.coordinates[indexPosition][0],
      this.coordinates[indexPosition][1],
    ]);
  }

  public getQuantOfPoints(): number {
    return this.coordinates.length;
  }

  public getSize(): number {
    let size = 0;
    for (let index = 0; index + 1 !== this.coordinates.length; index++) {
      let point = new Point(this.coordinates[index]);
      let nextPoint = new Point(this.coordinates[index + 1]);
      size += point.distanceTo(nextPoint);
    }
    return size;
  }

  public isIntersectingWith(otherLine: LineString): Point | null {
    const p1 = this.getStartPoint();
    const p2 = this.getEndPoint();
    const p3 = otherLine.getStartPoint();
    const p4 = otherLine.getEndPoint();
    if ((p1.x === p2.x && p1.y === p2.y) || (p3.x === p4.x && p3.y === p4.y))
      return null;
    const denominator =
      (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
    if (denominator === 0) return null;
    let ua =
      ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
      denominator;
    let ub =
      ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
      denominator;
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return null;
    let x = p1.x + ua * (p2.x - p1.x);
    let y = p1.y + ua * (p2.y - p1.y);
    return new Point([x, y]);
  }
}
