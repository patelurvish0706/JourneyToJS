// --------- If Statements -------
console.warn("If Statement");

let age = 20;

if (age > 18) {
  console.log("You can vote");
}

function ageIfCase() {
  age = prompt("Enter age :")
  if (age > 18) {
    alert("You can vote");
  }
}

// --------- If Else Statements -------
console.warn("If...Else Statement");

let marks = 40;

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

marks = 30;

if (marks >= 33) {
  console.log("Pass");
} else {
  console.log("Fail");
}

function checkIfElseMarks() {
  marks = prompt("Enter Marks:");

  if (marks >= 33) {
    alert("Pass");
  } else {
    alert("Fail");
  }
}

// --------- If ElseIf Statement --------
console.warn("If..elseIf..else Statement");

marks = 99;

if (marks >= 90) {
  console.log("A grade");
}
else if (marks >= 75) {
  console.log("B grade");
}
else if (marks >= 40) {
  console.log("C grade");
}
else {
  console.log("D grade");
}

marks = 80;

if (marks >= 90) {
  console.log("A grade");
}
else if (marks >= 75) {
  console.log("B grade");
}
else if (marks >= 40) {
  console.log("C grade");
}
else {
  console.log("D grade");
}

marks = 50;

if (marks >= 90) {
  console.log("A grade");
}
else if (marks >= 75) {
  console.log("B grade");
}
else if (marks >= 40) {
  console.log("C grade");
}
else {
  console.log("D grade");
}

marks = 30;

if (marks >= 90) {
  console.log("A grade");
}
else if (marks >= 75) {
  console.log("B grade");
}
else if (marks >= 40) {
  console.log("C grade");
}
else {
  console.log("D grade");
}

function marksElseif() {

  marks = prompt("Enter Marks:")

  if (marks >= 90) {
    alert("A grade");
  }
  else if (marks >= 75) {
    alert("B grade");
  }
  else if (marks >= 40) {
    alert("C grade");
  }
  else {
    alert("D grade");
  }
}
// ------- Switch Case Statement ------
console.warn("Switch Case Statement");

function switchCase() {
  let day = prompt("Enter Number of Day: ");

  switch (day) {
    case "1":
      alert("Monday");
      break;
    case "2":
      alert("Tuesday");
      break;
    case "3":
      alert("Wednesday");
      break;
    case "4":
      alert("Thursday");
      break;
    case "5":
      alert("Friday");
      break;
    case "6":
      alert("Saturday");
      break;
    case "7":
      alert("Sunday");
      break;
    default:
      alert("Invalid");
  }

  console.log(day);
}
