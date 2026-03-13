console.log("===== SMART CONSOLE CALCULATOR =====");

let choice;

do {

    console.log("\nChoose Operation");
    console.log("1 - Addition");
    console.log("2 - Subtraction");
    console.log("3 - Multiplication");
    console.log("4 - Division");
    console.log("5 - Exit");

    choice = prompt("Enter choice (1-5)");

    if (choice >= 1 && choice <= 4) {

        let num1 = Number(prompt("Enter first number"));
        let num2 = Number(prompt("Enter second number"));

        if (choice == 1) {
            console.log("Result:", num1 + num2);
        }

        else if (choice == 2) {
            console.log("Result:", num1 - num2);
        }

        else if (choice == 3) {
            console.log("Result:", num1 * num2);
        }

        else if (choice == 4) {
            console.log("Result:", num1 / num2);
        }

    }

} while (choice != 5);

console.log("Calculator Closed");