import inquirer from "inquirer"


function gptOutPut(data){

}


function gpt(){
    let end = 0;
    do {
        gptInput();
        end++;
    } while (end!==9);
}

function gptInput(){
    
    inquirer.prompt([
        {
            type:"input",
            name:"query",
            message:"Enter Your Query"
        }
    ]).then((answers)=>{
        console.log(answers.query);
    })
}

export {gpt}