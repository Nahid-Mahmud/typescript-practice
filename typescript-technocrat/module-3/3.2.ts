{
  //
  //   oop  inheritance

  //   class Student {
  //     constructor(public name: string, public age: number, public address: string) {}
  //   }

  class Parent {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHour: number) {
      console.log(`${this.name} sleeps ${numOfHour} hour of a day`);
      return `${this.name} sleeps ${numOfHour} hour of a day`;
    }
  }

  class Student extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Parent {
    designation: string;
    constructor(name: string, age: number, address: string, designation: string) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numOfClass: number) {
      console.log(` Takes  ${numOfClass} hours of class`);
    }
  }

  const student1 = new Student("nahid", 52, "Dinajpur");
  const teacher = new Teacher("nahid", 52, "Dinajpur", "English");

  //
}
