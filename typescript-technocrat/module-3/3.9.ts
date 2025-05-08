{
  // abstraction : interface and abstract

  //   using interface
  // getting Idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("starting the car engine");
    }
    stopEngine(): void {
      console.log("Stopping the car engine");
    }
    move(): void {
      console.log("Moving the car.");
    }

    test(): void {
      console.log("Test ");
    }
  }

  const toyotaCar = new Car1();

  //   toyotaCar.startEngine();

  //  using abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;

    test(): void {
      console.log("Test ");
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log("starting the car engine");
    }
    stopEngine(): void {
      console.log("Stopping the car engine");
    }
    move(): void {
      console.log("Moving the car.");
    }
  }

  //
}
