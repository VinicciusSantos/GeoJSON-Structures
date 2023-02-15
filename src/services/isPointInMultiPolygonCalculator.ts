import MultiPolygon from "../entities/MultiPolygon";
import Point from "../entities/Point";
import Polygon from "../entities/Polygon";
import IsPointInPolygonCalculator from "./IsPointInPolygonCalculator";

export default class IsPointInMultiPolygonCalculator {
  public calculate(point: Point, multiPolygon: MultiPolygon): boolean {
    const isPointInPolygonCalculator = new IsPointInPolygonCalculator();
    for (let polygonInput of multiPolygon.coordinates) {
      const polygon = new Polygon(polygonInput);
      const isPointInPolygon = isPointInPolygonCalculator.calculate(
        point,
        polygon
      );
      if (isPointInPolygon) return true;
    }
    return false;
  }
}
