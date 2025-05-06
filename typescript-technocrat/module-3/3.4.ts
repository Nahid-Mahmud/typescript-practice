{
  //

  class Animal {
    name: string;
    owner: string;
    age: number;
    constructor(name: string, owner: string, age: number) {
      this.name = name;
      this.owner = owner;
      this.age = age;
    }
    sound(s: string) {
      console.log(`its sounds like ${s} and its age is ${this.age}`);
    }
  }

  //   const dog = new Animal("Rocky", "Nahid", 2);

  class Dog extends Animal {
    species: string;
    constructor(name: string, owner: string, age: number, species: string) {
      super(name, owner, age);
      this.species = species;
    }

    tellNameDog() {
      console.log(`Its a ${this.species} and its  name is  ${this.name}`);
    }
  }

  class Cat extends Animal {
    species: string;
    constructor(name: string, owner: string, age: number, species: string) {
      super(name, owner, age);
      this.species = species;
    }

    tellNameCat() {
      console.log(`Its a ${this.species} and its  name is  ${this.name}`);
    }
  }
  const dog = new Dog("Rocky", "Nahid", 2, "Dog");
  const cat = new Cat("Pikachu", "RK", 1, "cat");

  //   dog.tellNameDog();
  //   cat.tellNameCat();

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    // animal.
    if (isDog(animal)) {
      animal.tellNameDog();
    } else if (isCat(animal)) {
      animal.tellNameCat();
    } else {
      animal.sound("He he");
    }
  };

  getAnimal(cat);

  //
}
