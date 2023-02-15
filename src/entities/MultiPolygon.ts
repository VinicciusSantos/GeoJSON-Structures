import Polygon from "./Polygon";
import Structure from "./Structure";

export default class MultiPolygon extends Structure {
  constructor(readonly coordinates: number[][][][]) {
    super("MultiPolygon", coordinates);
  }

  public getQuantOfPolygons(): number {
    return this.coordinates.length;
  }

  public getPolygonByIndex(index: number): Polygon {
    return new Polygon(this.coordinates[index]);
  }
}
