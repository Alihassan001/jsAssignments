var names = [["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"], 
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"], 
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"]];

// var delName = "Ali";
// var addName = "Hassan"

var flag = false;

function replaceNames(delName,addName){

for(var i=0; i<names.length; i++){
    for(var j=0; j<names[i].length; j++){
        if(names[i][j] == delName){
            flag = true;
            // names[i].splice(j,1,addName);   
            names[i][j] = addName;     
        }
    }
}
    return names;
}


//var namest = 
var newarr = replaceNames("Zia", "sadsadasd");
if(!flag){
    alert("Not found");
}else{
    console.log(newarr);
}

// document.write(names);
// console.log(names);