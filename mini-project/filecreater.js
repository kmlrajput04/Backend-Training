import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
})

const fileCreation = () => {
    rl.question("Enter file name: ", (fileName) => {
        rl.question("Enter file content: ", (content) => {
            fs.writeFile(`${fileName}.txt`, content, (err) => {
                if(err){
                    console.error(`Error Writing the file: ${err.message}`);
                }
                else{
                    console.log(`File "${fileName}.txt" created successfully `);
                }
                rl.close();
            })
        })
    })
}

fileCreation();