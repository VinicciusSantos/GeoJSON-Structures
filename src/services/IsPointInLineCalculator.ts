import LineString from "../entities/LineString";
import Matrix from "../entities/Matrix";
import Point from "../entities/Point";

export default class IsPointInLineCalculator {
  public calculate(point: Point, line: LineString): boolean {
    const [firstPoint, secondPoint] = line.coordinates
    const matrix = this.preparateMatrix(firstPoint, secondPoint, point.coordinates)
    const arePoinsAligned = matrix.calculateDeterminant() === 0
    return arePoinsAligned && this.isPointInInterval(point, line);
  }

  private preparateMatrix(firtsPoint: number[], secondPoint: number[], thirdPoint: number[]): Matrix {
    return new Matrix([
      [firtsPoint[0], firtsPoint[1], 1],
      [secondPoint[0], secondPoint[1], 1],
      [thirdPoint[0], thirdPoint[1], 1]
    ])
  }

  private isPointInInterval(point: Point, line: LineString): boolean {
    return point.coordinates[0] >= line.coordinates[0][0] && point.coordinates[1] <= line.coordinates[1][0]
  }
}
