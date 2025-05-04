{
  //
  // /functions with generics

  const createArr = (param: string): string[] => {
    return [param];
  };

  const res1 = createArr("Hello");

  const createArrWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const resG = createArrWithGeneric<string>("true");

  interface User {
    id: number;
    name: string;
  }

  const resGObj = createArrWithGeneric<User>({
    id: 5,
    name: "Hello",
  });

  const createArrayWithTuple = <T, Q>(p1: T, p2: Q): [T, Q] => {
    return [p1, p2];
  };

  const res2 = createArrayWithTuple<string, number>("hello", 22);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "X",
    email: "X@gmail.com",
  });

  const student2 = addCourseToStudent({
    name: "X",
    email: "X@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
