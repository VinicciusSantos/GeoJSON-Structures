export default class Matrix {
  constructor(readonly value: number[][]) {}

  public calculateDeterminant(): number {
    const matrixLenght = this.getLength()
    switch(matrixLenght) {
      case 1: return this.value[0][0]
      case 2: return this.calculatePrimaryDiagonal() - this.calculateSecondaryDiagonal();
      case 3: return this.caculateRuleOfSarrus()
      default: throw new Error(`Determinant of matrix ${matrixLenght}x${matrixLenght} not implemented yet`) 
    }
  }

  public getLength(): number {
    return this.value[0].length
  }

  public calculatePrimaryDiagonal() {
    let primaryDiagonal = 1;
    for (let i = 0; i < this.getLength(); i++)
      primaryDiagonal *= this.value[i][i];
    return primaryDiagonal;
  }

  public calculateSecondaryDiagonal(): number {
    if (this.getLength() === 1) return this.value[0][0]
    let secondaryDiagonal = 1;
    for (let i = 0; i < this.getLength(); i++)
      for (let j = 0; j < this.value[1].length; j++)
        if (i + j === this.getLength() - 1)
          secondaryDiagonal *= this.value[i][j];
    return secondaryDiagonal;
  }

  private caculateRuleOfSarrus(): number {
    const [a11, a12, a13] = this.value[0]
    const [a21, a22, a23] = this.value[1]
    const [a31, a32, a33] = this.value[2]
    return (a11 * a22 * a33) + (a12 * a23 * a31) + (a13 * a21 * a32) - (a31 * a22 * a13) - (a32 * a23 * a11) - (a33 * a21 * a12) 
  }
}
