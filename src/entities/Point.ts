import Structure from "./Structure";

export default class Point extends Structure {
    constructor(readonly coordinates: number[]) {
        super('Point', coordinates);
    }
}