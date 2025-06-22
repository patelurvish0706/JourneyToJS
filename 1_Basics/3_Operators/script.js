console.log("Welcome on JurneyToJs🎉");

// -------- Arithmetic Operations ---------
console.warn("Arithmetic Operators");

let a = 10, b = 3;

let sum = a + b;
console.log("Sum: ", sum);  // 13

let sub = a - b;
console.log("Sub: ", sub);  // 7

let mul = a * b;
console.log("Mul: ", mul);  // 30

let div = a / b;
console.log("Div: ", div);  // 3.333...

let mod = a % b;
console.log("Mod: ", mod);  // 1 (remainder)

let pwr = a ** b;
console.log("Pwr: ", pwr); // 1000 (a to the power b)

a++; // Increment
console.log("Increment: ", a); // 11

b--; // Decrement
console.log("Decrement: ", b); // 2

// -------- Assignment Operations ---------
console.warn("Assignment Operators");

let x = 5;
console.log("x is ", x);

x += 3;
console.log("x += 3 :", x); // x = x + 3 → 8
x -= 2;
console.log("x -= 2 :", x); // x = x - 2 → 6
x *= 2;
console.log("x *= 2 :", x); // x = x * 2 → 12
x /= 4;
console.log("x /= 4 :", x); // x = x / 4 → 3
x %= 2;
console.log("x %= 2 :", x); // x = x % 2 → 1

console.log("x is ", x); // 1


// ---------- Comparison Operators -----------
console.warn("Comparison Operators");

console.log(5 == "5");    // true (values match)
console.log(5 === "5");   // false (types differ)
console.log(5 != "5");    // false
console.log(5 !== "5");   // true
console.log(7 > 5);       // true
console.log(7 < 5);       // false
console.log(5 >= 5);      // true
console.log(4 <= 3);      // false

if (10 > 5) {
    console.log("Ten is greater than five");
}

if (5 > 10) {
    console.log("5 is more than 10.");
} else {
    console.log("5 is not more than 10.");
}

// ------- Logical Operators --------
console.warn("Logical Operators");

console.log(true);     // true
console.log(false);     // false

console.log(true && true); // true (AND)
console.log(true && false); // false (AND)
console.log(false && false); // false (AND)

console.log(true || true); // true  (OR)
console.log(true || false); // true  (OR)
console.log(false || false); // false  (OR)

console.log(!true);     // false (NOT)
console.log(!false);     // false (NOT)

// -------- Ternary Operators ------
console.warn("Ternary Operators");

let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"

// --------- Bitwise Operators ---------
console.warn("Bitwise Operators");


console.log(5 & 1);  // 1 (binary AND)
console.log(5 | 1);  // 5 (binary OR)
console.log(5 ^ 1);  // 4 (XOR)
console.log(~5);     // -6 (NOT)
console.log(5 << 1); // 10 (shift left)
console.log(5 >> 1); // 2  (shift right)


// --------- Best Practice --------
console.warn("Best Practice");

console.log("Sum: " + 5 + 6);
console.log("Sum: " , 5 + 6);
