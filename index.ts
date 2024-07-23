import inquirer from 'inquirer';

let students_roll_number: number = Math.floor(10000 + Math.random() * 90000);
let my_balance: number = 0;


  const name = await inquirer.prompt([
    {
      name: "student_name",
      type: "input",
      message: "Enter your name",
      validate:function(value){
        if(value.trim!==''){
            return true;
        }
        else{
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
  const tutionFee:{[key:string]:number}={
    Math:1000,
    Science:2000,
    English:3000,
    History:4000,
    
  }

  
console.log(`Tuition Fee of ${course.courses} is ${tutionFee[course.courses]}`)
  const paymentType=await inquirer.prompt([{
    name:"payment",
    type:"list",
    message:"Select payment method",
    choices:["Cash","Cheque","Online","Credit Card"],
  },

{
    name: "amount",
    type: "input",
    message: "Enter amount",
    validate:function(value){
        if(value.trim!==''){
            return true;
            }
            else{
                return 'Please enter a non empty amount';
               }
                
}

}])



console.log(`you select a method ${paymentType.payment}`)

let tutionFees=tutionFee[course.courses]
// because  inquirer support string 
const payment=parseFloat(paymentType.amount)

if(tutionFees===payment){
    console.log(`Congratulations you have paid ${payment} Rupees for ${course.courses} course.Now you are part of the course`)

}
else{
    console.log(`you need to pay ${tutionFees}`)}

let student_status=await inquirer.prompt([{
    name:"select",
    type:"list",
    message:"what you would like to do next",
    choices:["View status","exit"],
}])
if(student_status.select==="View status"){
    console.log("***************Student Status***********")
    console.log(`student Id: ${students_roll_number}`)
    console.log(`student Name: ${name.student_name}`)
    console.log(`you are enrolled in  ${course.courses}`)
    console.log(`you have paid ${payment} Rupees for ${course.courses}`)
    console.log(`your balance is ${my_balance+payment}`)

    }
    else{
        console.log("Thank you for using our service")
    }


