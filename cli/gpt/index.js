#!/usr/bin/env node 

import chalk from "chalk";
import {program} from "commander"

import inquirer from "inquirer"
import { gpt } from "./gpt.js";
import boxen from "boxen";

// commander
// gpt - commander 
//  information

program.version("3.0.0")
    .description("This is our cli application")
    .name("Aman GPT")
    .action(()=>{
        inquirer.prompt([{
            type:"confirm",
            name:"gpt",
            message:"Use ChatGPT"
        }]).then((answers)=>{
            if(answers.gpt === true){
                console.clear();
                console.log(boxen("ChatGPT Panel",{padding:1}))
                gpt()
            }
        })
    })

// npm install <package name>
program.parse(process.argv);