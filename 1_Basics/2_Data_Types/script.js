console.log("Welcome on JurneyToJs 🎉");


// -------- Number -------- 
console.warn("Number");

/*
const pi = 22 / 7;
let radius = prompt("Enter radius of Circle in cm."); // Take Input by Prompt Box
let areaOfCircle = pi * (radius * radius);   // Store Formulas
console.log( areaOfCircle + ' cm'); */
console.log("Run code ▶ to see output for Number.");

// -------- String -------- 
console.warn("String");

let name = "Alice";
let greeting = 'Hello!';
let template = `Hi, ${name}`; // Template string using backticks
console.log(template);

// --------- Boolean --------
console.warn("Boolean");

let isLoggedIn = true;
let hasPermission = false;

console.log(isLoggedIn);
console.log(hasPermission);

console.log(isLoggedIn + isLoggedIn);
console.log(isLoggedIn + hasPermission);
console.log(hasPermission + hasPermission);

// ---------- Undefined ------------
console.warn("Undefined");

let Yellowfruit;
Yellowfruit = "Banana"
console.log(Yellowfruit); // Banana is defined

let Redfruit;
// Redfruit = "Apple"   // Commented | Apple not gonna assign
console.log(Redfruit); // undefined

let Greenfruit;
console.log(Greenfruit); // undefined

// ---------- Symbol ---------------
console.warn("Symbol");

const userId = Symbol('userId'); // Create Symbol

let user = {
    name: "Alice",
    [userId]: 101
};

console.log(user[userId]); // 101

// -------- Object --------
console.warn("Object");

let Student = {
    name: "John",
    marks: 30,
    course: "IT"
};

console.log(Student.name); // "John"
console.log(Student["marks"]);

for (let key in Student) {
    console.log(`${key}: ${Student[key]}`);
}

// -------- Array --------
console.warn("Array");

// Array of fruits
let fruits = ["apple", "banana", "mango"];

console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "mango"

// Access all values at once
for (let fruit in fruits) {
    console.log(fruits[fruit]);
}

// -------- Function --------
console.warn("Function");

function greet() {
    console.log("Hello!");
}

greet();

// --------- TypeOf --------
console.warn("TypeChecking");

console.log(typeof 42);       // "number"
console.log(typeof "hello");  // "string"
console.log(typeof null);     // "object" (weird, but historical bug)

let numeric = 10;
let stringy = "heyy buddy";
let bulean = true;
let nodata;
let novalue = null;

function checkType() {
    console.log("numeric is " + typeof (numeric));
    console.log("stringy is " + typeof (stringy));
    console.log("bulean is " + typeof (bulean));
    console.log("nodata is " + typeof (nodata));
    console.log("novalue is " + typeof (novalue));

    alert("numeric is " + typeof (numeric) + "\n" +
        "stringy is " + typeof (stringy) + "\n" +
        "bulean is " + typeof (bulean) + "\n" +
        "nodata is " + typeof (nodata) + "\n" +
        "novalue is " + typeof (novalue))
}

/*
let value = prompt("Enter any value to check its Datatype.");
console.log("Entered value is " + typeof (value)); */

// -------- Type Coversion ---------
console.warn("TypeConvertion");

console.log("5" + 2);   // "52"  → number 2 is converted to string
console.log("5" - 2);   // 3     → string "5" is converted to number
console.log(true + 1);  // 2     → true becomes 

// -------- Equality == & === ----------
console.warn("Equality == & ===");

console.log("5" == 5); // true (string is converted to number)
console.log(false == 0);  // true
console.log(null == undefined); // true

console.log("5" === 5);          // false (string vs number)
console.log(false === 0);        // false
console.log(null === undefined); // false

// ------ Mutability --------
console.warn("Mutability");

const client = { name: "Alice" };
console.log(client.name); // Alice

client.name = "Bob"; // changed
console.log(client.name); // Bob

let str = "hello";
console.log(str);   // "hello"

str[0] = "H";       // does nothing
console.log(str);   // "hello"

// ------- Value & Reference -------
console.warn("Value vs Reference");

let a = 10;
let b = a;
b = 20;
console.log(a); // 10

let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 5;
console.log(obj1.x); // 5 (also changed)