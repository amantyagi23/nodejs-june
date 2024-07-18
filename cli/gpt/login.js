import inquirer from "inquirer";
import boxen from "boxen"

export function login(){
    console.clear()
    console.log(boxen("Login Panel",{padding:1}))
    inquirer.prompt([
        {
            type:"input",
            name:"username",
            message:"Enter Your Email"
        }
    ]).then((answers)=>{
        console.log(answers.username)
    })
}

