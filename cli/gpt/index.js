#!/usr/bin/env node 

import chalk from "chalk";
import {program} from "commander"



// commander
// gpt - commander 
//  information


program.command("ask").version("1.0.0").name("Chat GPT")
.option("-g","--greet","say hello to user")
.description("this is a chatgpt in cli")

program.parse()

if(program.greet){
    console.log("Hello user i am here to help you")
}