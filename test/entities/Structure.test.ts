import Structure from "../../src/entities/Structure"

describe('Strucure tests', () => {
    it('should create a structure', () => {
        const structure = new Structure('type', 'coordinates')
        expect(structure.type).toBe('type');
        expect(structure.coordinates).toBe('coordinates');
    })
})