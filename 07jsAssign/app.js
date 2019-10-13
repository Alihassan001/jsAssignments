var text = "the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog";
document.write(text);

//Task 01
// for(var i=0; i<text.length; i++){
//     if(text.slice(i,i+5) === "quick"){
//         text = text.slice(0,i)+ " lazy " + text.slice(i+5);
//     }
//     if(text.slice(i,i+5) === "brown"){
//         text = text.slice(0,i)+ " black " + text.slice(i+5);
//     }
//     if(text.slice(i,i+3) === "fox"){
//         text = text.slice(0,i)+ " cat " + text.slice(i+3);
//     }
//     if(text.slice(i,i+4) === "lazy"){
//         text = text.slice(0,i)+ " big " + text.slice(i+4);
//     }
//     if(text.slice(i,i+3) === "dog"){
//         text = text.slice(0,i)+ " wall " + text.slice(i+3);
//     }

// }

// document.write("<br>" +text);

// //Task 02
// var changeWord = text.indexOf("jumps");
// if(changeWord !== -1){
//     text = text.slice(0,changeWord) + " bounce " + text.slice(changeWord+5);
// }

// document.write("<br>" +text);

//Task 03
// var changeWord = text.lastIndexOf("brown");
// if(changeWord !== -1){
//     text = text.slice(0,changeWord) + " black " + text.slice(changeWord+5);
// }

// document.write("<br>" +text);

//Task 04
// var newText = text.replace("the", "A");
// document.write("<br>" +newText);

//Task 05
// var newText = text.replace(/jumps/g, "jumping");
// document.write("<br>" +newText);