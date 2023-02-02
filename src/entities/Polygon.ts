import Point from "./Point";
import Structure from "./Structure";

export default class Polygon extends Structure {
  constructor(readonly coordinates: number[][][]) {
    super("Polygon", coordinates);
  }

  public getExtremePoints(): { top: Point, bottom: Point, left: Point, right: Point } {
    let extremeTop, extremeBottom, extremeLeft, extremeRight;
    for (let line of this.coordinates) for (let point of line) {
        if (!extremeTop) {
            extremeTop = extremeBottom = extremeLeft = extremeRight = point;
            continue;
        };
        if (point[1] > extremeTop[1]) extremeTop = point;
        if (point[1] < extremeBottom[1]) extremeBottom = point;
        if (point[0] < extremeLeft[0]) extremeLeft = point;
        if (point[0] > extremeRight[0]) extremeRight = point;
    }
    
    return {
        top: new Point(extremeTop),
        bottom: new Point(extremeBottom),
        left: new Point(extremeLeft),
        right: new Point(extremeRight)
    };
  }
}
