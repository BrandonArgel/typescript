/**
* Non-primitive data types in TypeScript:
* - object
* - array
* - tuple
* - function
*/

// object type, with this type we can't access the properties directly
let myObject: object = {
    name: 'Brandon',
    age: 19,
};

// Object type, with this type we can access the properties directly
let myObject2: {
    name: string,
    age: number,
} = {
    name: 'Brandon',
    age: 19,
};
console.log({ObjName: myObject2.name, ObjAge: myObject2.age});

// Array type: we can declare an array with a type of elements
// There are many ways to declare an array:
let myArray: Array<number> = [1, 2, 3, 4, 5];
let myArray2: number[] = [1, 2, 3, 4, 5];

// Tuple type: we can declare an array with a fixed number of elements
let myTuple: [string, number, boolean] = ['Hello', 10, true];

// Also we can declare an array of tuples
let myArrayOfTuples: [string, number][] = [];
myArrayOfTuples.push(['Hello', 10]);
myArrayOfTuples.push(['Bye', 20]);

// Enum type
enum PhotoOrientation {
    Landscape, // 0
    Portrait, // 1
}

console.log(PhotoOrientation);
console.log(PhotoOrientation.Landscape); // 0
console.log(PhotoOrientation[0]); // Landscape

// Also if we start a value with a number, the value will be incremented
enum PhotoOrientation2 {
    Landscape = 10, // 10
    Portrait, // 11
}

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

console.log(Color.Red); // Red

// We can extend the enum with new values, using the same enum name (Be careful with the same name or the values will be overwritten)
enum PhotoOrientation {
    Square = 2,
    Panoramic = 3,
}
console.log("Extended enum: ", PhotoOrientation);

// Union type: we can declare a variable with multiple types
let myUnion: number | string = 10;
// Also we can create a union type with multiple types: also called Alias
type myTypes = string | number;
const add = (a: myTypes, b: myTypes): number => +a + +b;
// Literal types
type myLiteral = 'a' | 'b' | 'c';
const myLiteral: myLiteral = 'a';

// Type assertion
// - Angle Bracket: <Type>
let username : any;
username = (<string>'Brandon').toUpperCase()
console.log(username);
// - as: variable as type
username = (username as string).toLowerCase()
console.log(username);

// Functions
/**
 * Listado de propiedades de una foto
 *
 * @param {string} title Nombre de la foto.
 * @param {string} date Fecha en la que fue tomada.
 * @param {SquareSize} size (Optional) Tamaño de la foto.
 *
 * @return {object}
 */
 type SquareSize = '100x100' | '500x500' | '1000x1000'
 const dataPicture = (title: string, date: string, size: SquareSize = "100x100"): object => ({
    title,
    date,
    size,
});
console.log(dataPicture('My picture', '2022-02-13'));
