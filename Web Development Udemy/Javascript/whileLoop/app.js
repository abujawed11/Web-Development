
let code = "udemysecret"
let input = prompt("Enter anything here");
while(true){
    
    if(input.toLowerCase() === code){
        console.log("Yah!! yo got it correct");
        break;
    }

    input = prompt(input);
    
}
