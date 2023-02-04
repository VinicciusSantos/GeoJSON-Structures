import LineString from "../entities/LineString";
import Matrix from "../entities/Matrix";
import Point from "../entities/Point";

export default class IsPointInLineCalculator {
  public calculate(point: Point, line: LineString): boolean {
    for (let pointIndex = 0; pointIndex < line.getQuantOfPoints() - 1; pointIndex++) {
      const firstPointOfLine = new Point(line.coordinates[pointIndex])
      const secondPointOfLine = new Point(line.coordinates[pointIndex + 1])
      const matrix = this.preparateMatrix(firstPointOfLine, secondPointOfLine, point)
      const arePoinsAligned = matrix.calculateDeterminant() === 0
      if (arePoinsAligned && this.isPointInInterval(point, firstPointOfLine, secondPointOfLine)) return true;
    }
    return false
  }

  private preparateMatrix(firtsPoint: Point, secondPoint: Point, thirdPoint: Point): Matrix {
    return new Matrix([
      [firtsPoint.x, firtsPoint.y, 1],
      [secondPoint.x, secondPoint.y, 1],
      [thirdPoint.x, thirdPoint.y, 1]
    ])
  }

  private isPointInInterval(point: Point, firstPointOfLine: Point, secondPointOfLine: Point ): boolean {
    return point.x >= firstPointOfLine.x && point.x <= secondPointOfLine.x
  }
}
