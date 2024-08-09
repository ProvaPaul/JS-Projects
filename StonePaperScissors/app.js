let user_score=0;
let computer_score=0;

let choices=document.querySelectorAll(".choice");
const computer=()=>{
    let array=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return array[index];
}

let msg=document.querySelector(".msg");
const drawGame=()=>{
    msg.innerText= "Draw the match! Play again!!";
}

let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#computer-score");
const showWinner=(userchoice,comp_choice,userwin)=>{
    if(userwin){
        user_score++;
        userscore.innerText=user_score;
        msg.innerText= "You won the match! Play again!!";

    }
    else{
        computer_score++;
        compscore.innerText=computer_score;
        msg.innerText= "Computer won the match! Play again!!";

    }
}


const playGame=(userchoice) =>{
    let comp_choice=computer();
    console.log(userchoice);
    console.log(comp_choice);
    if(userchoice==comp_choice){
        console.log(drawGame());
    }else{
        let userwin=true;

       if(userchoice=="rock"){
        userwin= comp_choice==="paper"? false:true;
    }
    else if(userchoice=="paper"){
        userwin= comp_choice==="scissors"? false:true;
    }
    else
    {
        userwin= comp_choice=="rock"?false:true;
    } 
    showWinner(userchoice,comp_choice,userwin);
    
    }
    
}

choices.forEach((choice)=>{
    choice.addEventListener(("click"),()=>{
        let choiceId=choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId);
    });

});

