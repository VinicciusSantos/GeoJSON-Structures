import Structure from "./Structure";

type Structures =
  | "Point"
  | "LineString"
  | "Polygon"
  | "MultiPoint"
  | "MultiLineString"
  | "MultiPolygon";

export default class GeometryCollection {
  public type = "GeometryCollection";
  constructor(readonly geometries: Structure[]) {}

  public getQuantOfStructures(): number {
    return this.geometries.length;
  }

  public filterWithStructure(type: Structures): GeometryCollection {
    const filteredStructures = this.geometries.filter(
      (geo) => geo.type === type
    );
    return new GeometryCollection(filteredStructures);
  }
}
