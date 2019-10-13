var names = [["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"],
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"], 
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"], 
             ["Ali", "Ahmed", "Shan", "Zia", "Sana", "Khan"]];

document.write(names + "<br>");


function replaceName(string) {
    
        if (string == "Sana") {
            for(var i = 0; i < names.length; i++) {
                names[i].splice(4, 1);

            }
            return names;
        } else {
            
        }
        return "Name not found";
    }
    


var replacing = replaceName("ana");
document.write(replacing);

