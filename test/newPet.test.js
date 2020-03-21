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

describe("growUp", () => {
  it("increases the pet age by 1", () => {
    let boris = new Pet('Boris')
    boris.growUp();
       expect(boris.age).toBe(1)
  });
});

describe("growUp", () => {
  it("increases hunger by 5 & decreases fitness by 3", () => {
    let boris = new Pet('Boris')
    boris.growUp();
       expect(boris.hunger).toBe(5)
       expect(boris.fitness).toBe(7)
  });
});