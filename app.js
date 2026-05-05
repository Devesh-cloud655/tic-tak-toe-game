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

