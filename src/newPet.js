
const MIN_FIT_HUN = 0;
const MAX_FIT_HUN = 10;
const MIN_AGE = 0;
const MAX_AGE = 30;


class Pet {
     constructor(name) {
         this.name = name;
         this.age = MIN_AGE;
         this.hunger = MIN_FIT_HUN;
         this.fitness = MAX_FIT_HUN;
         this.children = [];
     }

     get isAlive() {
          return this.age < MAX_AGE && this.hunger < MAX_FIT_HUN && this.fitness > MIN_FIT_HUN;
     }

     growUp() {
          if (!this.isAlive) {
               throw new Error("Boo you're pet is no longer alive")
          }
          this.age++
          this.hunger =+ 5;
          this.fitness -= 3;
     }

     walk() {
          if (!this.isAlive) {
               throw new Error("Boo you're pet is no longer alive")
          }
          if ((this.fitness + 4) <= MAX_FIT_HUN) {
               this.fitness += 4;
          } else {
               this.fitness = MAX_FIT_HUN;
          }        
     }

     feed() {
          if (!this.isAlive) {
               throw new Error("Boo you're pet is no longer alive")
          }
          if ((this.hunger - 3) >= MIN_FIT_HUN) {
               this.hunger -= 3;
          } else {
               this.hunger = MIN_FIT_HUN;
          } 
     }

     checkUp() {
          if (!this.isAlive) {
               return "Boo you're pet is no longer alive"
          }
          if (this.fitness <= 3 && this.hunger >= 5) {
               return "I am hungry AND I need a walk";
          }
          if (this.fitness <= 3) {
               return "I need a walk";
          }
          if (this.hunger >= 5) {
               return "I am hungry";
                } else {
          return "I am doing great!"
          }
     }

     haveBaby(childName){
          if (!this.isAlive) {
               throw new Error("Boo you're pet is no longer alive")
          }
          this.children.push(new Pet(childName));
     }     
 };



 
 module.exports = { Pet };
