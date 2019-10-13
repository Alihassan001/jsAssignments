function getUpdate(){
    var userInput = document.getElementById('userInput').value;
    var changeOption = document.getElementById('list').value;
    document.getElementById("list"+changeOption).innerHTML = userInput;
}