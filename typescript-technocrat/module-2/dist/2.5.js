"use strict";
{
    //
    // /functions with generics
    const createArr = (param) => {
        return [param];
    };
    const res1 = createArr("Hello");
    const createArrWithGeneric = (param) => {
        return [param];
    };
    const resG = createArrWithGeneric("true");
    const resGObj = createArrWithGeneric({
        id: 5,
        name: "Hello",
    });
    const createArrayWithTuple = (p1, p2) => {
        return [p1, p2];
    };
    const res2 = createArrayWithTuple("hello", 22);
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
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
