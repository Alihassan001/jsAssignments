function changeColor(){
    var element  = document.getElementById('disp');
    element.className = 'changeColor';
   element.className += ' changeBackground';


  }


var list = document.getElementsByTagName('p');

for(var i=0; i<list.length; i++){
    
    if(i%2==0){
        console.log(list[i]);
        list[i].innerHTML = 'Ali ';
        list[i].style.color = 'Blue'
    }else{
        list[i].innerHTML = "Ali ";
        list[i].style.color = 'red'
    }

}