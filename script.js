let boxes=document.querySelectorAll(".r1");
let res_btn = document.querySelector(".reset");
let new_btn = document.querySelector(".new_btn");
let msg = document.querySelector("#msg");
let turnO = true;

const winningpnc = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=> {
        console.log("box was clicked")
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disablebox = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enablebox = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        msg.innerText="Winner?"
    }
}

const resetgame = () =>{
    turnO = true;
    enablebox();

}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`;
}

const checkWinner = () => {
    for(pattern of winningpnc){
        let box1val = boxes[pattern[0]].innerText;
        let box2val = boxes[pattern[1]].innerText;
        let box3val = boxes[pattern[2]].innerText;

        if(box1val != "" && box2val != "" && box3val != ""){
            if(box1val === box2val && box2val === box3val){
                console.log("winner",box1val);
                disablebox();
                showWinner(box1val);
            }
        }

    }
}



new_btn.addEventListener("click",resetgame);
res_btn.addEventListener("click",resetgame);
