import LineString from "../entities/LineString";
import Point from "../entities/Point";
import Polygon from "../entities/Polygon";

export default class IsPointInPolygonCalculator {
  public calculate(point: Point, polygon: Polygon): boolean {
    let arestasIntersecting = 0;
    const horizontalLineToRight = new LineString([[point.x, point.y], [polygon.getExtremePoints().right.x + 1, point.y]]);
    for (let polyg of polygon.coordinates) {
      let index = 0
      for (let point of polyg) {
        const nextPoint = polyg[index+1] ? polyg[index+1] : polyg[0]
        const arestaLineString = new LineString([point, nextPoint]);
        if(arestaLineString.isIntersectingWith(horizontalLineToRight)) arestasIntersecting++;
        index++;
      }
    }
    return arestasIntersecting % 2 === 1
  }
}
