// Question 1
// var students = ["Ali", "Faizan", "Sami", "Saad"];
// var obtMarks = [100,200,300,400];
// var totalMarks = 500;
// var percent = (obtMarks[2] / totalMarks)*100;
// var grade;

// if(percent>=80){
//     grade = "A+";
// } else if(percent>=70){
//     grade = "A";
// } else if(percent>=60){
//     grade = "B";
// } else if(percent>=50){
//     grade = "C";
// } else if(percent>=40){
//     grade = "D";
// } else {
//     grade = "Fail";
// }

// document.write("Score of " + students[2] + " is " + obtMarks[2] + ", Percentage is " + percent + ", Grade is " + grade);

// Question 2
// var color = ["red","yellow","orange","green"];
// console.log(color);
// var addColorBegin = prompt("Would you like add more color?");
// color.unshift(addColorBegin);
// console.log(color);
// color.unshift("maroon","blue");
// console.log(color);
// color.push("lt-grey","beige");
// console.log(color);
// color.shift();
// console.log(color);
// color.pop();
// console.log(color);
// var addColorIndex = prompt("Type your desire index to add color in list");
// color.splice(addColorIndex,0, "voilet");
// console.log(color);
// var delColorIndex = prompt("Type your desire index to del color in list");
// var delColorCount = prompt("How many colors would you like to delete in this list");
// color.splice(delColorIndex,delColorCount);
// console.log(color);

//Question 3

var userNumber = prompt("Which numbers table would you like to display?");

for(var i=1; i<=10; i++){
    
    document.write(userNumber + " X " + i + " = " + userNumber*i + "<br>");
        
};