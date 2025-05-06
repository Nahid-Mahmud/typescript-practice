{
  //
  class Animal {
    // method
    getNameAndAge() {
      return `The animal name is ${this.name} and its age is ${this.age}`;
    }

    // parameter properties

    constructor(public name: string, public species: string, public age: number) {}
  }

  const dog = new Animal("Rocket", "Dog", 25);

  const dogDetails = dog.getNameAndAge();
  console.log(dogDetails);

  //
}
