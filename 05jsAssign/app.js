// Q1
// var user = prompt("Enter your name");
// alert("Welcome: " + user);

//Q2
// var userNumber = prompt("Which numbers table would you like to display?");

// if (userNumber != "") {
//     for (var i = 1; i <= 10; i++) {

//         document.write(userNumber + " X " + i + " = " + userNumber * i + "<br>");

//     };
// } else {
//     for (var i = 1; i <= 10; i++) {
//         var a = 5;
//         document.write(a + " X " + i + " = " + a * i + "<br>");

//     };
// };

//Q3
// var city = prompt("Enter your city name");

// if(city == "karachi"){
//     document.write("Welcome to city of lights");
// }

//Q4
// var gender = prompt("Type your gender please:");

// if (gender == "male") {
//         document.write("Good Morning Sir!");
//     } else if(gender == "female"){
//         document.write("Good Morning Ma'm");
// }else{
//     document.write("You don't provide it.")
// }

//Q5
// var signal = prompt("Which light have you seen in signal?");

// if (signal == "red") {
//     document.write("vehicles must stop");
// } else if (signal == "yellow") {
//     document.write("vehicles should get ready to move");
// } else if (signal == "green") {
//     document.write("vehicles can move now");
// }
// else {
//     document.write("Please enter something.")
// }

// //Q6
// var userAge = prompt("Enter your age please");
// var maxAge = 50;
// if (userAge <= maxAge) {
//     document.write("You are welcome");
// } else {
//     document.write("SORRY!");
// }

// Q7
// var fuel = prompt("How many litres have left in fuel?");
// if (fuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }

// Q8
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
//     console.log(a);
}
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
//     console.log(b);
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
//     console.log(c);
// }
// if (c === 13) {
//     alert("condition 2 is true");
//     console.log(c);
// }
// if (++c < 14) {
//     alert("condition 3 is true");
//     console.log(c);
// }
// if (c === 14) {
//     alert("condition 4 is true");
//     console.log(c);
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
//     console.log(totalCost);
// }
// if(true){
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

//Q9 
// var totalMarks = 300;
// var obtMarks = prompt("How much marks have you get in 3 subjects?");
// var percent = (obtMarks / totalMarks) * 100;

// if (percent >= 80) {
//     document.write("Total Marks: " + totalMarks + "<br>" +
//         "Marks Obtained: " + obtMarks + "<br>" +
//         "Percentage: " + percent + "% <br>" +
//         "Grade: A-One, Remarks: Excellent");
// } else if (percent >= 70) {
//     document.write("Total Marks: " + totalMarks + "<br>" +
//         "Marks Obtained: " + obtMarks + "<br>" +
//         "Percentage: " + percent + "% <br>" + " Grade: A, Remarks: Good");
// } else if (percent >= 60) {
//     document.write("Total Marks: " + totalMarks + "<br>" +
//         "Marks Obtained: " + obtMarks + "<br>" +
//         "Percentage: " + percent + "% <br>" + " Grade: B, Remarks: You need to improve");
// } else {
//     document.write("Total Marks: " + totalMarks + "<br>" +
//         "Marks Obtained: " + obtMarks + "<br>" +
//         "Percentage: " + percent + "% <br>" + " Grade: Fail, Remarks: Sorry");
// }

//Q10
// var item1 = prompt("What is your Item 1?");
// var item2 = prompt("What is your Item 2?");
// var priceItem1 = prompt("What is the price of Item 1?");
// var priceItem2 = prompt("What is the price of Item 2?");
// var orderQtyItem1 = prompt("Order Qty of item 1");
// var orderQtyItem2 = prompt("Order Qty of item 2");
// var shippingCharges = 200;

// var total = (orderQtyItem1 * priceItem1) + (orderQtyItem2 * priceItem2) + shippingCharges;

// if(total >= 2000){
//     var discount = (total * 0.10);
//     var netAmount = total - discount;
//     document.write("Price of "+item1+" is "+priceItem1+"<br>"+
//                     "Quantiy of "+item1+" is "+orderQtyItem1+"<br>"+
//                     "Price of "+item2+" is "+priceItem2+"<br>"+
//                     "Quantiy of "+item2+" is "+orderQtyItem2+"<br> <br>"+
//                     "Shipping charges "+shippingCharges+"<br> <br>"+
//                     "Total cost of your order is "+netAmount+"<br>"+
//                     "Discount price is "+discount+" PKR."
//     )
// } else {
//     document.write("Price of "+item1+" is "+priceItem1+"<br>"+
//                     "Quantiy of "+item1+" is "+orderQtyItem1+"<br>"+
//                     "Price of "+item2+" is "+priceItem2+"<br>"+
//                     "Quantiy of "+item2+" is "+orderQtyItem2+"<br> <br>"+
//                     "Shipping charges "+shippingCharges+"<br> <br>"+
//                     "Total cost of your order is "+total+"<br>"
                    
//     )
// };

//Q11
// var secretNumber = 7;
// var userGuess = prompt("Guess the secret number to win :)");

// if(userGuess == secretNumber) {
//     document.write("Bingo! Correct Answer!");
// } else if(userGuess == 8 || userGuess == 6){
//     document.write("Close enough to the Correct Answer!");
// }else {
//     document.write("You didn't get it. Try Again");
// }

//Q12
// var userNumber = prompt("Check your number is divisible by 3 or not?");

// if(userNumber % 3){
//     document.write("Number is not divisiable by 3");
// } else {
//     document.write("Number is divisiable by 3");
// }

//Q13
// var nameTeam1 = prompt("Enter name of Team A");
// var nameTeam2 = prompt("Enter name of Team B");
// var scoreTeam1 = prompt("Enter score of " + nameTeam1);
// var scoreTeam2 = prompt("Enter score of " + nameTeam2);

// if (scoreTeam1 > scoreTeam2) {
//     alert(nameTeam1 + " have won the game");
// }else if (scoreTeam2 > scoreTeam1) {
//     alert(nameTeam2 + " have won the game");
// } else {
//     alert("Enter correct detail");
// }

// //Q14
// var var1 = "Ali Hassan Ansari";
// var var2 = 12345;
// var var3 = true;
// var check1 = typeof var1;
// var check2 = typeof var2;
// var check3 = typeof var3;

// document.write(var1 + " is " + check1 + "<br>");
// document.write(var2 + " is " + check2 + "<br>");
// document.write(var3 + " is " + check3);


//Q15
// var userNumber = prompt("Type any number to check it is even or odd");
// var oddOrEven = userNumber % 2;
// if(oddOrEven == 0) {
//     document.write("Number is even");
// }else if(oddOrEven != 0) {
//     document.write("Number is odd");
// }

//Q16
// var temp = prompt("What is the temperature in your city?");

// if(temp >= 40){
//     document.write("It is too hot outside");
// } else if(temp >= 30){
//     document.write("The weather today is normal");
// } else if(temp >= 20){
//     document.write("Today's weather is cool");
// }  else if(temp < 20){
//     document.write("OMG! Today's weather is soo cool");
// }

//Q17
// var x = prompt("Enter first number");
// var y = prompt("Enter second number");
// var firstNumber = parseInt(x);
// var secondNumber = parseInt(y);
// var operation = prompt("Which mathematical operation would you like to perform?");

// if (operation == "/"){
//     alert(firstNumber + " / " + secondNumber + " is " +(firstNumber/secondNumber));
// } else if (operation == "*"){
//     alert(firstNumber + " * " + secondNumber + " is " +(firstNumber*secondNumber));
// } else if (operation == "-"){
//     alert(firstNumber + " - " + secondNumber + " is " +(firstNumber-secondNumber));
// } else if (operation == "+"){
//     alert(firstNumber + " + " + secondNumber + " is " +(firstNumber+secondNumber));
// } else if (operation == "%"){
//     alert(firstNumber + " % " + secondNumber + " is " +(firstNumber%secondNumber));
// }

//Q18
// var day = prompt("What day is today?");

// if(day == "monday"){
//     document.write("It is a week day");
// } else if(day == "tuesday"){
//     document.write("It is a week day");
// } else if(day == "wednessday"){
//     document.write("It is a week day");
// } else if(day == "thursday"){
//     document.write("It is a week day");
// } else if(day == "friday"){
//     document.write("It is a week day");
// } else if(day == "saturday"){
//     document.write("It is weekend");
// } else if(day == "sunday"){
//     document.write("It is a holiday");
// }

//Q19
// var marks = prompt("Enter your marks");

// if(marks > 50){
//     document.write("You are passed");
// } else{
//     document.write("You have failed");
// }

//Q20
// var x = prompt("Enter first number");
// var y = prompt("Enter second number");
// var firstNumber = parseInt(x);
// var secondNumber = parseInt(y);

// if(firstNumber > secondNumber){
//     document.write("The greator number of " +firstNumber+ " and " + secondNumber + " is " + firstNumber);
// } else if(secondNumber > firstNumber){
//     document.write("The greator number of " +firstNumber+ " and " + secondNumber + " is " + secondNumber);
// }if(firstNumber == secondNumber){
//     document.write(firstNumber+ " and  " + secondNumber + " are equal.");
// }

//Q21
// var lnCode = prompt("Enter language code, Options: en, sp, ur" );

// if(lnCode == "en"){
//     document.write("Hello world");
// } else if(lnCode == "sp"){
//     document.write("Hola Mundo");
// } else if(lnCode == "ur"){
//     document.write("ہیلو دنیا");
// }

//Q22
// var x = prompt("Enter any number");
// var number = parseInt(x);

// if(x >= 0){
//     document.write("It is a positive number");
// } else if(x < 0){
//     document.write("It is a negative number");
// }

//Q23
// var number = prompt("please enter a number");
// var noun = prompt("please enter a noun");

// if(number > 1) {
//     document.write(number + " " +noun+ "s");
// }else{
//     document.write(number + " " +noun);
// }