import Matrix from "../entities/../../src/entities/Matrix";

describe("Matrix tests", () => {
  const inputs = [
    {
      type: "square 1x1",
      value: [[2.4]],
      primaryDiagonal: 2.4,
      secondaryDiagonal: 2.4,
      determinant: 2.4,
    },
    {
        type: "square 2x2",
        value: [
          [2.4, 3.2],
          [0.6, 9.7],
        ],
        primaryDiagonal: 23.28,
        secondaryDiagonal: 1.92,
        determinant: 21.36,
      },
    {
      type: "square 3x3",
      value: [
        [2.4, 3.2, 4.5],
        [0.6, 9.7, 1.5],
        [2.6, 2.2, 1.7],
      ],
      primaryDiagonal: 39.576,
      secondaryDiagonal: 113.49,
      determinant: -66.678,
    },
  ];

  describe.each(inputs)("$type", (input) => {
    const matrix = new Matrix(input.value);

    it("should create a matrix", () => {
      expect(matrix.value).toStrictEqual(input.value);
    });

    it("should calculate primary diagonal", () => {
      expect(matrix.calculatePrimaryDiagonal()).toBeCloseTo(input.primaryDiagonal);
    });

    it("should calculate secondary diagonal", () => {
      expect(matrix.calculateSecondaryDiagonal()).toBeCloseTo(input.secondaryDiagonal);
    });

    it("should calculate the Determinant", () => {
      expect(matrix.calculateDeterminant()).toBeCloseTo(input.determinant);
    });
  });

  it('should throw error when the function receives a non implemented matrix to calculate determinant', () => {
    const matrix = new Matrix([
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
        [1, 2, 3, 4],
    ])
    expect(() => matrix.calculateDeterminant()).toThrow()
  })
});
