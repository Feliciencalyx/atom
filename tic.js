const cells=document.querySelectorAll(".cell");
const statusText=document.querySelector("#statusText");
const restartBtn=document.querySelector("#restartBtn");
const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let option=["","","","","","","","",""];
let player="x";
let running=false;
initializer();

function initializer(){
cells.forEach(cell=>cell.addEventListener("click",clickcell));
restartBtn.addEventListener("click",restartgame);
statusText.textContent= `${player}'s turn`;
running=true;
}
function clickcell(){
    const cellindex= this.getAttribute("cellindex");
    if(option[cellindex] !="" || !running){
        return;
    }
updatecell(this,cellindex);
checkwinner();
}
function changeplayer(){
    player=(player== "x") ? "0" :"x";
    statusText.textContent=`${player}'s turn`;

}
function updatecell(cell,index){
    option[index]=player;
    cell.textContent=player;


}
function checkwinner(){
    let win=false;
    for(let i=0;i<winConditions.length;i++){
        const condition=winConditions[i];
        const cellA=option[condition[0]];
        const cellB=option[condition[1]];
        const cellC=option[condition[2]];
        if(cellA=="" || cellB=="" || cellC==""){
            continue;
        } 
        if(cellA==cellB && cellB==cellC){
            win=true;
            break;
        }
            }
        if(win){
            statusText.textContent=`Player ${player} won`;
            running=false;
        }
        else if(!option.includes("")){
            statusText.textContent="DRAW";
            running=false;
        }
        else{
            changeplayer();
        }
}
function restartgame(){
    player="x";
    let options=["","","","","","","","",""];
    statusText.textContent=`${player}'s turn`;
    cells.forEach(cell=>cell.textContent="");
    running=true; 


}












