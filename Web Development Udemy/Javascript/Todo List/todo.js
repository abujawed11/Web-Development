let userInput = prompt("What would you like to do?");
let todoList = [];

while (true) {
    if (userInput === "new") {
        let todo = prompt("Enter new Todo");
        todoList.push(todo);
        console.log(`${todo} is Added to the list`)
        userInput = prompt("What would you like to do now?");
    }
    else if (userInput === "list") {
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        userInput = prompt("What would you like to do now?");
    }else if(userInput === "delete"){
        let del = parseInt(prompt("Enter index of item to be deleted:"));
        if(!Number.isNaN(del)){
            const ind = todoList.splice(del,1);
            console.log(`${ind[0]} has been DELETED!!`);
            userInput = prompt("What would you like to do now?");

        }else{
            console.log("Invalid index");
            del = parseInt(prompt("Enter correct index of item to be deleted:"));
        }

    }
    else if (userInput === 'quit') {
        console.log("Ok. You Quit!");
        break;
    }
    else {
        userInput = prompt("What would you like to do?");
    }
}