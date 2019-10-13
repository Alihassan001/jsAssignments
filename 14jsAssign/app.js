function calculate(num1,operation,num2) {
    
    switch (operation) {
        case "+":
            document.write("Your answer is: " + (num1 + num2));
            break;
        case "-":
            document.write("Your answer is: " + (num1 - num2));
            break;
        case "*":
            document.write("Your answer is: " + (num1 * num2));
            break;
        case "/":
            document.write("Your answer is: " + (num1 / num2));
            break;
        case "%":
            document.write("Your answer is: " + (num1 % num2));
            break;
        default:
            document.write("Operator doesn't exixst");

    }
}

calculate(5,"*",6);