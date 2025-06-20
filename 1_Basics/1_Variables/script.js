console.log("Welcome on JurneyToJs 🎉");


// -------- Var -------- 
console.warn("Var");

var name; // Declaration 
console.log("After Declaration: " + name) // Empty or take Latest

name = "Urvish"; // Assigning value
console.log("After Assigning: " + name); // Urvish as output

name = "IronMan"; // Reassign value
console.log("After Reassignment: " + name); // IronMan as output

var name = "Deadpool"; // Redeclaration
console.log("After Redeclaration: " + name); // Deadpool as output

// -------- Let --------
console.warn("Let")

let age; // Declaration 
console.log("After Declaration: " + age); // Honestly Undefined

age = 20; // Assigning value
console.log("After Assigning: " + age); // 20 as output

age = 25; // Reassign value
console.log("After Reassignment: " + age); // 25 as output

/*
let age = 25; // Redeclaration
console.log("After Redeclaration: " + country); // Not allowed to ReDeclare */
console.error("Uncaught SyntaxError: Identifier 'age' has already been declared");

// -------- Const --------
console.warn("Const");

// const city; // Can not declare without assigned value

const country = "India"; // Declaration + Assigning value
console.log("After Assigning: " + country);

/*
country = "America"; // Reassign value
console.log("After Reassign value: " + country); */
console.error("Uncaught TypeError: Assignment to constant variable.");

/*
const country = "Canada"; // Redeclaration
console.log("After Redeclaration: "+ country); */
console.error("Uncaught SyntaxError: Identifier 'country' has already been declared");

// -------- Scope of Variables --------
console.warn("Scope of Variables");

{
    var a = 10;
    let b = 20;
}
console.log("accessing var a : " + a);
/*
console.log("accessing let b : " + b); */
console.error("Uncaught ReferenceError: b is not defined");

// -------- Hoisting ---------------
console.warn("Hoisting");

console.log("petName: " + petName); // calling var name;
sayHello(); // calling sayhello() function

var petName = "Vodaphone";
function sayHello() {
    console.log("hehe, Hello!!");
}

/*
console.log(whoAmI); // calling var name; Uncaught ReferenceError: Cannot access 'whoAmI' before initialization
console.log(whoIsShe); // calling var name; Uncaught ReferenceError: Cannot access 'whoIsShe' before initialization  */
let whoAmI = "Vision";
const whoIsShe = "Wonda";

console.error("Uncaught ReferenceError: Cannot access 'whoAmI' before initialization");
console.error("Uncaught ReferenceError: Cannot access 'whoIsShe' before initialization");
