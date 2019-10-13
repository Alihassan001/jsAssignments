var arr = ['a','b','c','d','e','f','g','h',1,2,3,4,5,6,7,8,true,false,true,false,true,false,true,false , ['Abc'],['Xyz'],['Etc'],['...']];

var str = [];
var nbr = [];
var bol = [];
var arrays = [];
var parent = [];

for(var i=0; i<arr.length; i++){
    if(typeof(arr[i]) == "string"){
        str.push(arr[i]);    
    }
    if(typeof(arr[i]) == "number"){
        nbr.push(arr[i]);    
    }
    if(typeof(arr[i]) == "boolean"){
        bol.push(arr[i]);    
    } 
    if(typeof(arr[i]) == "object"){
        arrays.push(arr[i]);    
    }

    
}

parent.push(str);
parent.push(nbr);
parent.push(bol);
parent.push(arrays);

console.log(parent);

