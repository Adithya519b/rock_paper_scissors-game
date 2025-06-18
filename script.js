let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissors=document.querySelector("#scissors");
let userScore=document.querySelector("#user_score");
let computerScore=document.querySelector("#computer_score");
let check=document.querySelector("#check");
let result=document.querySelector("#result");
let userChoice;
let computerchoice;
let u=0;
let c=0;
let winsound=new Audio("sounds/win.mp3");
let losesound=new Audio("sounds/lose.mp3");
let tiesound=new Audio("sounds/tie.mp3");
const choices=["rock","paper","scissors"];
rock.addEventListener("click",()=>userChoice="rock");
paper.addEventListener("click",()=>userChoice="paper");
scissors.addEventListener("click",()=>userChoice="scissors");
function checkf(){
    let i=Math.floor(Math.random()*3);
    computerchoice=choices[i];
    if(computerchoice==userChoice){
        result.textContent="it's a Tie"
        tiesound.play();
    }
    else if((userChoice=="rock" && computerchoice=="scissors") || (userChoice=="paper" && computerchoice=="rock") || (userChoice=="scissors" && computerchoice=="paper")){
        result.textContent=`You Won! ${userChoice} beats ${computerchoice}`
        u +=1;
        userScore.textContent=`${u}`
        winsound.play();

    }
    else{
        result.textContent=`You lose!! ${computerchoice} beats ${userChoice}`;
        c +=1;
        computerScore.textContent=`${c}`
        losesound.play();
    }
}
check.addEventListener("click",checkf)

