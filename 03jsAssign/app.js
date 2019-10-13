var userName = prompt("Your Name");

var totalMarks = 100;
var obtainedMarks = 0;

var q1 = prompt("10*2 = ?");
var q2 = prompt("15+10-5 = ?");
var q3 = prompt("11-5*5 = ?");
var q4 = prompt("12-4 = ?");
var q5 = prompt("16*4 = ?");
var q6 = prompt("13+5-4 = ?");
var q7 = prompt("22-4+3 = ?");
var q8 = prompt("5+5-10 = ?");
var q9 = prompt("(10+5)*2 = ?");
var q10 = prompt("(20*2)-20 = ?");


if (q1 == 20){
    obtainedMarks = obtainedMarks + 10;    
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q2 == 20){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q3 == 14){
   obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q4 == 8){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q5 == 64){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q6 == 14){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q7 == 15){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q8 == 0){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
} 

if(q9 == 30){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
}

if(q10 == 20){
    obtainedMarks = obtainedMarks + 10;
} else {
    obtainedMarks = obtainedMarks - 10;
}

var percent = (obtainedMarks / totalMarks) * 100;
var grade;
if(percent >= 80) {
    grade = "A+";
} else if (percent >= 70){
    grade = "A";
} else if (percent >= 60) {
    grade = "B";
} else if (percent >= 50) {
    grade = "C";
} else if (percent >= 40) {
    grade = "D";
}else {
    grade = "Fail"
}
document.write("Name: "+ userName+ "<br>");
document.write("Total marks is: " + totalMarks +"<br>");
document.write("Obtained Marks: " + obtainedMarks + "<br>");
document.write("Percentarge: " + percent + " % <br>");
document.write("Your graded is: " + grade + " <br>");
