{
  // statics

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    decrement() {
      return (Counter.count -= 1);
    }
  }

  const instanceOne = new Counter();

  const instanceTwo = new Counter();

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  //
}
