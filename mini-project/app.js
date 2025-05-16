import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const todos = [];

const showMenu = () => {
    console.log("\n1. Add todo")
    console.log("2. View todo")
    console.log("3. Delete todo")
    console.log("4. Exit")
    rl.question("Enter your choice: ", handleInput );
}



const handleInput = (choice) =>{
    if(choice === "1"){
        rl.question("Enter todo: ", (todo) => {
            todos.push(todo);
            console.log("Task added :", todo);
            showMenu();
        })
    }
    else if(choice === "2"){
     console.log("Your Todo lists");
        todos.forEach((todo, index) => {
            console.log(`${index + 1}. ${todo}`);
        })
        showMenu();
    }
    else if(choice === "3"){
        rl.question("Enter todo number to delete: ", (index) => {
            todos.splice(index - 1, 1);
            console.log("Task deleted");
            showMenu();
        })
    }
    else if(choice === "4"){
        console.log("Goodbye");
        rl.close();
    }
    else{
        console.log("Invalid choice");
        showMenu();
    }
    
}

showMenu();