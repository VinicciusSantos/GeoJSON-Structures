import GeometryCollection from "../../src/entities/GeometryCollection";

describe("GeometryCollection tests", () => {
  const input = {
    geometryCollectionInput: [
      {
        type: "Point",
        coordinates: [40, 10],
      },
      {
        type: "Point",
        coordinates: [23.44040741894935, 28.636049617035667],
      },
      {
        type: "Point",
        coordinates: [37.600700684903074, 23.828677059605127],
      },
      {
        type: "Point",
        coordinates: [32.72600574671503, 47.95793304212583],
      },
      {
        type: "LineString",
        coordinates: [
          [42.00995951914018, 21.011703419428486],
          [54.47449085048484, 25.63601446131861],
          [51.07959913212693, 32.827521087411526],
          [38.616169378795604, 29.359268015272704],
        ],
      },
      {
        type: "LineString",
        coordinates: [
          [10, 10],
          [20, 20],
          [10, 40],
        ],
      },
      {
        type: "Polygon",
        coordinates: [
          [
            [40, 40],
            [20, 45],
            [45, 30],
            [40, 40],
          ],
        ],
      },
      {
        type: "Polygon",
        coordinates: [
          [
            [27.039834129017805, 29.091216838926044],
            [27.039834129017805, 18.459357955059843],
            [32.42646820572671, 18.459357955059843],
            [32.42646820572671, 29.091216838926044],
            [27.039834129017805, 29.091216838926044],
          ],
        ],
      },
    ],
    quantOfPoints: 4,
    quantOfLineStrings: 2,
    quantOfPolygons: 2,
  };
  const geometryCollection = new GeometryCollection(
    input.geometryCollectionInput
  );

  it("should create GeometryCollection", () => {
    expect(geometryCollection.geometries).toStrictEqual(
      input.geometryCollectionInput
    );
    expect(geometryCollection.type).toStrictEqual("GeometryCollection");
  });

  it(`should have ${input.geometryCollectionInput.length} structures`, () => {
    expect(geometryCollection.getQuantOfStructures()).toBe(
      input.geometryCollectionInput.length
    );
  });

  it(`should have ${input.quantOfPoints} points`, () => {
    const allPoints =
      geometryCollection.filterWithStructure("Point").geometries;
    expect(allPoints.length).toBe(input.quantOfPoints);
  });

  it(`should have ${input.quantOfLineStrings} LineStrings`, () => {
    const allLineStrings =
      geometryCollection.filterWithStructure("LineString").geometries;
    expect(allLineStrings.length).toBe(input.quantOfLineStrings);
  });

  it(`should have ${input.quantOfPolygons} Polygons`, () => {
    const allPolygons =
      geometryCollection.filterWithStructure("Polygon").geometries;
    expect(allPolygons.length).toBe(input.quantOfPolygons);
  });
});
