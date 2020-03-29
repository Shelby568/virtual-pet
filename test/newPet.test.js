const { Pet } = require("../src");

describe("newPet", () => {
    it("creates a new pet variable", () => {
        const newPet = new Pet('Boris')        
        expect(newPet.name).toBe('Boris')
    });
});

describe('constructor', () => {
  it('returns an object', () => {
    expect(new Pet('Boris')).toBeInstanceOf(Object);
  });
});

let boris;
beforeEach(() => {
  boris = new Pet('Boris')
});


describe("growUp", () => {
  it("increases the pet age by 1", () => {
      boris.growUp();
      expect(boris.age).toBe(1)
  });
});

describe("growUp", () => {
  it("increases hunger by 5 & decreases fitness by 3", () => {
    boris.growUp();
       expect(boris.hunger).toBe(5)
       expect(boris.fitness).toBe(7)
  });
});

describe("walk", () => {
  it("increases fitness by 4 but should never reach more than 10", () => {
    boris.fitness = 8;
    boris.walk();
       expect(boris.fitness).toBe(10)
       
  });
});

describe("walk", () => {
  it("increases fitness by 4 but should never reach more than 10", () => {
    boris.fitness = 4;
    boris.walk();
       expect(boris.fitness).toBe(8)
       
  });
});

describe("feed", () => {
  it("decreases hunger by 3 but should never be less than 0", () => {
    boris.hunger = 2;
     boris.feed();
       expect(boris.hunger).toBe(0)
      });
    });

describe("feed", () => {
    it("decreases hunger by 3 but should never be less than 0", () => {
       boris.hunger = 8;
       boris.feed();
       expect(boris.hunger).toBe(5)
       
  });
});

describe("checkUp", () => {
  it("check how pet is feeling", () => {
    boris.hunger = 6;
       boris.checkUp();
       expect(boris.checkUp()).toBe("I am hungry")
    });
});

describe("checkUp", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 2;
       boris.checkUp();
       expect(boris.checkUp()).toBe("I need a walk")
    });
});

describe("checkUp", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 2;
    boris.hunger = 5;
       boris.checkUp();
       expect(boris.checkUp()).toBe("I am hungry AND I need a walk")
    });
});

describe("checkUp", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 5;
    boris.hunger = 3;
       boris.checkUp();
       expect(boris.checkUp()).toBe("I am doing great!")
    });
});

describe("isAlive", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 31;
    boris.fitness = 0;
    boris.hunger = 3;
    expect(boris.isAlive).toBe(false)
    });
});

describe("isAlive", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 4;
    boris.hunger = 8;
    boris.age = 6;
    expect(boris.isAlive).toBe(true)
    });
});

describe("growUp", () => {
  it("throws an error if pet isn't alive", () => {
    boris.fitness = 4;
    boris.hunger = 8;
    boris.age = 30;
    expect(() => boris.growUp()).toThrow("Boo you're pet is no longer alive")
    });
});

describe("checkUp", () => {
  it("check how pet is feeling", () => {
    boris.fitness = 5;
    boris.hunger = 11;
       boris.checkUp();
       expect(boris.checkUp()).toBe("Boo you're pet is no longer alive")
    });
});

describe("haveBaby", () => {
  it("let's pet have children", () => {
   boris.haveBaby('babyBoris')
   expect(boris.children).toBeInstanceOf(Array)
    });
});