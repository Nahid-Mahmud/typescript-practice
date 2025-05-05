"use strict";
{
    // Constrains
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
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
