// ---------- For Loop ----------
function alertNoLoop() {
    console.warn("Without for Loop");

    alert("Open Console to see output, press F12")
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
    console.log("Hello");
}

function alertWithLoop() {
    console.warn("With for Loop");

    alert("Open Console to see output, press F12")

    for (let i = 0; i < 5; i++) {
        console.log("Hello");
    }
}

// ------- While loop --------

function consoleWhileLoop() {
    console.warn("While Loop");
    let num = 0;
    while (num < 3) {
        console.log(num);  // 0, 1, 2
        num++;
    }
}