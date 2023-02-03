import LineString from "../entities/LineString";
import Point from "../entities/Point";
import Polygon from "../entities/Polygon";

export default class IsPointInPolygonCalculator {
  public calculate(point: Point, polygon: Polygon): boolean {
    let arestasIntersecting = 0;
    const horizontalLineToRight = new LineString([[point.x, point.y], [polygon.getExtremePoints().right.x + 1, point.y]]);
    for (let polyg of polygon.coordinates) {
      let pointIndex = 0
      for (let point of polyg) {
        const nextPoint = polyg[pointIndex+1] ? polyg[pointIndex+1] : polyg[0]
        const arestaLineString = new LineString([point, nextPoint]);
        if(arestaLineString.isIntersectingWith(horizontalLineToRight)) arestasIntersecting++;
        pointIndex++;
      }
      if (arestasIntersecting % 2 === 0 ) return false
    }
    return true
  }
}
