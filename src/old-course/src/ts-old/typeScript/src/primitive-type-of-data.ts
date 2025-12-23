/**
* Primitive data types in TypeScript:
* - number
* - string
* - boolean
* - any
* - void
* - null
* - undefined
* - never
* - symbol
*/

// Explicit: We are telling TypeScript that the variable is of a certain type
// With the type annotation postfix: number, string and boolean 
let myNumber: number = 10;
let myString: string = 'Brandon';
let myBoolean: boolean = true;

// Inferred: TypeScript will infer the type of the variable
let myNumber2 = 10;
let myString2 = 'Brandon';
let myBoolean2 = true;

// Any type
let myAny: any = 10;
// console.log(myAny);
myAny = 'Brandon';
// console.log(myAny);
myAny = true;
// console.log(myAny);
myAny = null;
// console.log(myAny);
myAny = undefined;

// Void type
function showInfo(user: any): void {
    console.log('User info: ', user.name, user.age);
}

showInfo({ name: 'Brandon', age: 19 });

// Never type
function showError(code: number, message: string) {
    throw new Error(`${message} (Code ${code})`);
}

try {
showError(404, 'Not found');

} catch (error) {
    // console.log(error);
}

function sumNumbers(limit: number): never {
    let sum = 0;
    while(true) {
        sum++;
    }
}

// sumNumbers(10);

// Null and undefined
let myNull: null = null;
let myUndefined: undefined = undefined;

// Null and undefined work fine being inclided with other types, to avoid errors:
let myNull2: number | null = 10;
let myUndefined2: number | undefined = 10;
console.log({myNull2, myUndefined2});
myNull2 = null;
myUndefined2 = undefined;
console.log({myNull2, myUndefined2});


// Symbols
let mySymbol: symbol = Symbol('id');
