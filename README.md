# tic-tac-toe-game
A simple and interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tik tac toe game</title>
    <link rel="stylesheet"href="t.css">
</head>
<body>
    <div class="message-cont hide">
        <p id="msg">Winner!</p>
        <button id="new-btn">New Game!</button>
    </div>
    <main>
  <h1>tic tac toe</h1>
  <div class="container">
  <div class="game">
    <button class="box"></button>
    <button class="box"></button>
    <button class="box">  </button>
    <button class="box">  </button>
    <button class="box">  </button>
    <button class="box">  </button>
    <button class="box">  </button>
    <button class="box">  </button>
    <button class="box">  </button>
  </div>
  </div>
  <button id="reset">reset-button</button>
   </main>
    <script src="t.js"></script>
</body>
</html>
*{
    margin:0;
    padding:0;
}
body{
    background-color:#c7ebf0;
    text-align:center;

}
.container{
    height:70vh;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
    align-items:center;
}
.box{
    height:18vmin;
    width:18vmin;
    border-radius:1rem;
    border:none;
    box-shadow:0 0 1rem rgba(0,0,0,0.5);
    font-size:8vmin;
    color:#b0413e;
    
}
.game{
    height:60vmin;
    width:60vmin;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    gap:1.5vmin;
}
#reset{
    padding:1rem;
    font-size:1.5rem;
    background-color:#191913;
    color:#fff;
    border-radius:1rem;
    border:none;
}
#new-btn{
      padding:1rem;
    font-size:1.5rem;
    background-color:#191913;
    color:#fff;
    border-radius:1rem;
    border:none;
}
#msg{
    font-size:8vmin;
    color:#ffffc7;
}
.message-cont{
      height:25vim;
}
.hide{
    display:none;
}
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-cont");
let msg=document.querySelector("msg");
let turnO=true;//player x, player y,
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO="true";
    enableboxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
    msg.innerText=`congratulation,Winner is ${winner} `;
    msgContainer.classList.remove("hide");
}
const checkwinner=()=>{
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Winner!".pos1val);

                showwinner();
            }
        }
    }
};

newGamebtn.addEventListener("click,resetgame");
resetGamebtn.addEventListener("click,resetgame");

