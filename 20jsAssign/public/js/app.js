function getData(){
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if(user && password){
        document.write("<h1>Welcome to our site!</h1>");
    } else {
        alert("Enter username and password");
    }

}