import LineString from "../entities/LineString";
import Point from "../entities/Point";
import Polygon from "../entities/Polygon";
import IsPointInLineCalculator from "./IsPointInLineCalculator";

export default class IsPointInPolygonCalculator {
  public calculate(point: Point, polygon: Polygon): boolean {
    return true
  }
}
