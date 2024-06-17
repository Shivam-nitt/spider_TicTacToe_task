let saareBox=document.querySelectorAll("#box");
// console.log(saareBox.textContent);

let ButtonText=document.querySelector("button");

let line=document.querySelector(".line");

let Reset=document.querySelector(".Reset");

let counter = document.querySelector(".button h3");
let second=10;

console.log(ButtonText.textContent);

let ChangeValue=0;

function changeTurn(){
    if(ChangeValue===0){
        ChangeValue=1;
    }else{
        ChangeValue=0;
    }
}

function changeButtonText(){
    if(ChangeValue===0){
        if(ButtonText.textContent!=="u won"){
            ButtonText.textContent="Turn Of 1st Player";
        }else{
            ButtonText.textContent="2nd Player Won";
        }
    }else if(ChangeValue===1){
        if(ButtonText.textContent!=="u won"){
            ButtonText.textContent="Turn Of 2nd Player";
        }else{
            ButtonText.textContent="1st Player Won"
        } 
    }
}

function CheckWin(){
    const subArray = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    subArray.forEach(e => {
        if (
            (saareBox[e[0]].textContent === saareBox[e[1]].textContent) &&
            (saareBox[e[2]].textContent === saareBox[e[1]].textContent) &&
            (saareBox[e[0]].textContent !== "") &&
            (saareBox[e[1]].textContent !== "") &&
            (saareBox[e[2]].textContent !== "")
        ) {
            console.log("u won");
            console.log(ButtonText.textContent);
            ButtonText.textContent = "u won";


            //for removing event listeners so that after winning the match no next should be possible
          saareBox.forEach(Element =>{
            Element.removeEventListener("click", handleClick);
          })


          //line for 1st row

          if(e[0]===0&&e[1]===1&&e[2]===2){
            line.style.display="block";
            line.style.top="150px";
            line.style.transform="translate(0px,0px)";

          }

          //line for 2nd row
          if(e[0]===3&&e[1]===4&&e[2]===5){
            line.style.display="block";
            line.style.top="150px";
            line.style.transform="translate(0px,150px)";
          }

          //line for 3rd row
          if(e[0]===6 && e[1]===7 && e[2]===8){
            line.style.display="block";
            line.style.top="150px";
            line.style.transform="translate(0px,300px)";

          }

          // line for 1st column
        
          if(e[0]===0 && e[1]===3 && e[2]===6){
            line.style.display="block";
            line.style.top="00px";
            line.style.rotate="90deg";
            line.style.transform="translate(300px,150px)";
          }

          //line for 2nd column
  
          if(e[0]===1 && e[1]===4 && e[2]===7){
            line.style.display="block";
            line.style.top="00px";
            line.style.rotate="90deg";
            line.style.transform="translate(300px,0px)";
          }

          //line for 3rd column
           
          if(e[0]===2 && e[1]===5 && e[2]===8){
            line.style.top="0px";
            
            line.style.transform="translate(300px,-150px)";
            line.style.rotate="90deg";
            line.style.display="block";
          }

          //line for 1st diagonal

          if(e[0]===0 && e[1]===4 && e[2]===8){
            line.style.display="block";
            line.style.top="00px";
            line.style.rotate="45deg";
            line.style.width="500px";
            line.style.transform="translate(200px,208px)";
          }

          //line for 2nd diagonal

          if(e[0]===2 && e[1]===4 && e[2]===6){
            line.style.display="block";
            line.style.top="00px";
            line.style.width="500px";
            line.style.rotate="-45deg";
            line.style.transform="translate(-200px,208px)";
          }
    } 
})}
  function CheckDraw(){
    if(saareBox.forEach(Element=>{
       ( Element.textContent==="");
        console.log("im in checkdraw");
        console.log(Element.textContent);
    })){
        console.log("match draw");
    }else{
        console.log("not satisfy")
    }

  }



function handleClick(event) {
    const dabba = event.target;
    if (ChangeValue === 0 && dabba.textContent === "") {
        dabba.textContent = "X";
        dabba.style.backgroundColor="rgba(129, 119, 119, 0.77)"
    } else if (ChangeValue === 1 && dabba.textContent === "") {
        dabba.textContent = "0";
        dabba.style.backgroundColor="rgba(129, 119, 119, 0.77)"
    }
    
    const content = dabba.textContent;
    CheckWin();
    CheckDraw()
    changeTurn();
    changeButtonText();
    

   //for removing event listener after first click
    dabba.removeEventListener("click", handleClick);
    // console.log("disabled for this dabba");
}


saareBox.forEach(dabba => {
    dabba.addEventListener("click", handleClick);
});


//reset button

Reset.addEventListener("click",function(){
    ChangeValue=0;
    saareBox.forEach(Element=>{
        Element.textContent="";
        ButtonText.textContent="Turn Of 1st Player";
        line.style.display="none";
        
})
})

// 

function Timer(){
   console.log(counter.textContent);
   for(let i=0;i<10;i++){
    setInterval(second,10000);
    second--;
    counter.textContent="00:0"+second;
    console.log(counter.textContent);
   }
}
Timer();
//2nd problem when im resetting the game then im not able to add event listener on the previous clicked boxes