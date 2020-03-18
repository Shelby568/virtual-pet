const { Pet, aPet } = require("../src");

describe("newPet", () => {
    it("creates a new pet variable", () => {
        const newPet = new Pet('Fido')        
        expect(newPet.name).toBe('Fido')
    });
});

describe('constructor', () => {
  it('returns an object', () => {
    expect(new aPet('Fido')).toBeInstanceOf(Object);
  });
});
