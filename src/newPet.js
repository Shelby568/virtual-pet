
class Pet {
     constructor(name) {
         this.name = name;
         this.age = 0;
         this.hunger = 0;
         this.fitness = 10;
     }

     growUp() {
          this.age++
          this.hunger =+ 5;
          this.fitness -= 3;
     }
 };
 
 function aPet() {}


 
 module.exports = { Pet, aPet };
