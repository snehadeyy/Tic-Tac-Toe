console.log("Welcome to Tic Tac Toe");
let turn = "X";
let audioTurn = new Audio("ting.mp3");
let winMusic = new Audio("music.mp3");
let isGameOver = false;

const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,0,5,0],
        [3,4,5,0,15,0],
        [6,7,8,0,25,0],
        [0,3,6,-10,15,90],
        [1,4,7,0,15,90],
        [2,5,8,10,15,90],
        [0,4,8,0,15,45],
        [2,4,6,0,15,135],
    ];
    wins.forEach((curElem)=>{
        if((boxtexts[curElem[0]].innerText === boxtexts[curElem[1]].innerText) && (boxtexts[curElem[2]].innerText === boxtexts[curElem[1]].innerText) && boxtexts[curElem[0]].innerText!=='')
        {
            document.querySelector(".info").innerText = `${boxtexts[curElem[0]].innerText} Won`;
            isGameOver = true;
            document.querySelector(".giffy").getElementsByTagName("img")[0].style.width ="200px";
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${curElem[3]}vw,${curElem[4]}vw) rotate(${curElem[5]}deg)`;
            winMusic.play();
        }
    });
}
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
Array.from(boxes).forEach((curElem)=>{
    let boxtext = curElem.querySelector(".boxtext");
    curElem.addEventListener("click",()=>{
        if(boxtext.innerText === '')
        {
            
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!isGameOver)
            {
                let turnChange = document.querySelector(".info");
                turnChange.innerText = `Turn for ${turn}`;
            }
        }
    });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((curElem)=>{
        curElem.innerText = '';
    });
    turn = 'X';
    isGameOver = false;
    document.querySelector(".line").style.width = "0vw";
    document.querySelector(".giffy").getElementsByTagName("img")[0].style.width ="0px";
    winMusic.pause();
    // winMusic.reset();
    let turnChange = document.querySelector(".info");
    turnChange.innerText = `Turn for ${turn}`;
});