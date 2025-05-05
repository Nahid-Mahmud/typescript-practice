"use strict";
{
    // type assertion
    let anything;
    anything = "Next level Development";
    const anyLength = anything.length;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `converted value is ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000;
        }
        // return `input a valid number`;
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
