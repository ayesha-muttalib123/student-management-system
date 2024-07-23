import inquirer from 'inquirer';
let students_roll_number = Math.floor(10000 + Math.random() * 90000);
let my_balance = 0;
const name = await inquirer.prompt([
    {
        name: "student_name",
        type: "input",
        message: "Enter your name",
        validate: function (value) {
            if (value.trim !== '') {
                return true;
            }
            else {
                return 'Please enter your name';
            }
        }
    },
]);
const course = await inquirer.prompt([
    {
        name: "courses",
        type: "list",
        message: "Select course",
        choices: ["Math", "Science", "English", "History"],
    },
]);
const tutionFee = {
    Math: 1000,
    Science: 2000,
    English: 3000,
    History: 4000,
};
console.log(`Tuition Fee of ${course.courses} is ${tutionFee[course.courses]}`);
const paymentType = await inquirer.prompt([{
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Cash", "Cheque", "Online", "Credit Card"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter amount",
        validate: function (value) {
            if (value.trim !== '') {
                return true;
            }
            else {
                return 'Please enter a non empty amount';
            }
        }
    }]);
console.log(`you select a method ${paymentType.payment}`);
let tutionFees = tutionFee[course.courses];
const payment = parseFloat(paymentType.amount);
if (payment === tutionFees) {
    console.log(`Congratulations! You have paid ${payment} Rupees for the ${course.courses} course. You are now part of the course.`);
    my_balance += payment;
}
else if (payment < tutionFees) {
    const remainingAmount = tutionFees - payment;
    console.log(`You have paid ${payment} Rupees, which is less than the tuition fee for the ${course.courses} course. You still need to pay ${remainingAmount} Rupees.`);
    my_balance += payment;
}
else {
    console.log(`You have overpaid by ${payment - tutionFees} Rupees. Your payment of ${payment} Rupees is more than the required tuition fee for the ${course.courses} course.`);
    my_balance += payment;
}
let student_status = await inquirer.prompt([{
        name: "select",
        type: "list",
        message: "what you would like to do next",
        choices: ["View status", "exit"],
    }]);
if (student_status.select === "View status") {
    console.log("***************Student Status***********");
    console.log(`student Id: ${students_roll_number}`);
    console.log(`student Name: ${name.student_name}`);
    console.log(`you are enrolled in  ${course.courses}`);
    console.log(`you have paid ${payment} Rupees for ${course.courses}`);
    console.log(`your balance is ${my_balance + payment}`);
}
else {
    console.log("Thank you for using our service");
}
