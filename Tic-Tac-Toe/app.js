let boxes=document.querySelectorAll(".box");
let turn0=true;
let count=0;

boxes.forEach((box)=>{
    box.addEventListener(("click"),()=>{
      if(turn0==true){
        turn0=false;
        box.innerText="0";
        box.style.color="red";
        box.style.fontSize="2rem";        

      }
      else{
        turn0=true;
        box.innerText="*";
        box.style.color="red";
        box.style.fontSize="2rem";
      }
      count++;
      let winner=checkWinner();
      box.disabled=true;
      if(count==9 && !winner==true){
        showDraw();
      }

    });
});

const winnerPattern=[
  [0,1,2],[0,3,6],[0,5,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]
]


const checkWinner=()=>{
    for(let pattern of winnerPattern){
      let pos1=boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;
      console.log(pos1);
      console.log(pos2);
      console.log(pos3);

      if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1==pos2 && pos2==pos3){
          showWinner(pos1);
          return true;
        }
      }
    }
}

let msg=document.querySelector("#msg1");
let secondPage=document.querySelector(".second-page");
let firstPage=document.querySelector(".first_page");
const showWinner=(pos1)=>{
    msg.innerText=`Congratulations! The winner is ${pos1}`;
    secondPage.style.display="block";
    firstPage.style.display="none";
}


const showDraw=()=>{
  msg.innerText=`Draw the match. Play again!`;
    secondPage.style.display="block";
    firstPage.style.display="none";
}


const disabledbox=()=>{
    for(let box of boxes){
      box.disabled=true;
    }
}

//button (reset and newGame)
const resetFunction=()=>{
  turn0=true;
  count=0;
  for(let box of boxes){
        box.disabled=false;
        box.innerText="";
  }
}
let newGameButton=document.querySelector("#newGame");
let resetButton=document.querySelector("#reset");
console.log(newGameButton.innerText);
console.log(resetButton.innerText);
resetButton.addEventListener(("click"),()=>{
  resetFunction();
});
newGameButton.addEventListener(("click"),()=>{
  secondPage.style.display="none";
  firstPage.style.display="block";
  resetFunction();

});


