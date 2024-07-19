#!/usr/bin/env node 
import chalk from "chalk"
import inquirer from "inquirer"
import axios from "axios"

async function getChatGPTResponse(message){
    
   
    // const headers = {
    //     'Content-Type':'application/json',
    //     'Authorization':`Bearer ${openAIApiKey}`
    // }
    const data = {
        messages: [{"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Who won the world series in 2020?"},
            {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            {"role": "user", "content": "Where was it played?"}],
        model: "gpt-4o-mini",
    };

    try {
        const response = await fetch(url,{method:"POST",headers:headers,body:JSON.stringify(data)});
        // const answer = response.data.choices[0].message.content;
        // console.log(answer);
        // return answer;
        const result = await response.json()
        console.log(result);
    } catch (error) {
        console.log(error.message.toString())
    }
}


async function askQuestion(){
   const { question } = await inquirer.prompt([{
        type:"input",
        name:"question",
        message:"How Can I Help You ???"
    }])

    return question;
}

async function main(){
    while(true){
      const message = await askQuestion();
      if(message === "exit" ){
        break;
      }
      else{
        const answer = await getChatGPTResponse(message.toLowerCase());
        console.log(chalk.green(answer))
      }
    }
}

main();