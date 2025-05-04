{
  // Constrains

  const addCourseToStudent = <
    T extends {
      id: number;
      name: string;
      email: string;
    }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "X",
    email: "X@gmail.com",
    id: 25,
  });

  const student2 = addCourseToStudent({
    name: "X",
    email: "X@gmail.com",
    id: 16,
    hasWatch: "Apple Watch",
  });
}
