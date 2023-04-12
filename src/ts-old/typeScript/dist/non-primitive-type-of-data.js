"use strict";
/**
* Non-primitive data types in TypeScript:
* - object
* - array
* - tuple
* - function
*/
// object type, with this type we can't access the properties directly
let myObject = {
    name: 'Brandon',
    age: 19,
};
// Object type, with this type we can access the properties directly
let myObject2 = {
    name: 'Brandon',
    age: 19,
};
console.log({ ObjName: myObject2.name, ObjAge: myObject2.age });
// Array type: we can declare an array with a type of elements
// There are many ways to declare an array:
let myArray = [1, 2, 3, 4, 5];
let myArray2 = [1, 2, 3, 4, 5];
// Tuple type: we can declare an array with a fixed number of elements
let myTuple = ['Hello', 10, true];
// Also we can declare an array of tuples
let myArrayOfTuples = [];
myArrayOfTuples.push(['Hello', 10]);
myArrayOfTuples.push(['Bye', 20]);
// Enum type
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
})(PhotoOrientation || (PhotoOrientation = {}));
console.log(PhotoOrientation);
console.log(PhotoOrientation.Landscape); // 0
console.log(PhotoOrientation[0]); // Landscape
// Also if we start a value with a number, the value will be incremented
var PhotoOrientation2;
(function (PhotoOrientation2) {
    PhotoOrientation2[PhotoOrientation2["Landscape"] = 10] = "Landscape";
    PhotoOrientation2[PhotoOrientation2["Portrait"] = 11] = "Portrait";
})(PhotoOrientation2 || (PhotoOrientation2 = {}));
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // Red
// We can extend the enum with new values, using the same enum name (Be careful with the same name or the values will be overwritten)
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panoramic"] = 3] = "Panoramic";
})(PhotoOrientation || (PhotoOrientation = {}));
console.log("Extended enum: ", PhotoOrientation);
// Union type: we can declare a variable with multiple types
let myUnion = 10;
const add = (a, b) => +a + +b;
const myLiteral = 'a';
// Type assertion
// - Angle Bracket: <Type>
let username;
username = 'Brandon'.toUpperCase();
console.log(username);
// - as: variable as type
username = username.toLowerCase();
console.log(username);
const dataPicture = (title, date, size = "100x100") => ({
    title,
    date,
    size,
});
console.log(dataPicture('My picture', '2022-02-13'));
