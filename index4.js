let saareBox=document.querySelectorAll("#box");
// console.log(saareBox.textContent);

let ButtonText=document.querySelector("button");

let Reset=document.querySelector(".Reset")

let line=document.querySelector(".line");

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

function CheckWin(content){

    let text = content;
    // console.log(text);
   const Array=[
   [0,1,2,3],
   [0,4,8,12],
   [0,5,10,15],
   [1,5,9,13],
   [2,6,10,14],
   [3,7,11,15],
   [3,6,9,12],
   [4,5,6,7],
   [8,9,10,11],
   [12,13,14,15]
];

    Array.forEach(e=>{
        // let sum=0;
        if((saareBox[e[0]].textContent===saareBox[e[1]].textContent) && (saareBox[e[2]].textContent===saareBox[e[1]].textContent) &&(saareBox[e[3]].textContent===saareBox[e[2]].textContent) && (saareBox[e[0]].textContent!=="") && (saareBox[e[1]].textContent!=="") && (saareBox[e[2]].textContent!=="") && (saareBox[e[3]].textContent!=="")){

            console.log("u won");
            console.log(ButtonText.textContent);
            ButtonText.textContent="u won";


            //for removing event listeners so that after winning the match no next should be possible
            saareBox.forEach(Element =>{
                Element.removeEventListener("click", handleClick);
              })

               //line for 1st row

          if(e[0]===0 && e[1]===1 && e[2]===2 &&e[3]===3){
            line.style.display="block";
            line.style.width="380px";
            line.style.transform="translate(0px,-175px)";
        }

        //line for 2nd row

        if(e[0]===4 && e[1]===5 && e[2]===6 &&e[3]===7){
            line.style.display="block";
            line.style.width="380px";
            line.style.transform="translate(0px,-75px)";
        }

        //line for 3rd row

        if(e[0]===8 && e[1]===9 && e[2]===10 &&e[3]===11 ){
            line.style.display="block";
            line.style.width="380px";
            line.style.transform="translate(0px,25px)";
        }

        //line for 4th row
        if(e[0]===12 && e[1]===13 && e[2]===14 &&e[3]===15){
            line.style.display="block";
            line.style.width="380px";
            line.style.transform="translate(0px,125px)";}

            //line for 1st column

            if(e[0]===0 && e[1]===4 && e[2]===8 && e[3]===12){
                console.log("im n column");
                line.style.display="block";
                line.style.width="380px";
                line.style.rotate="90deg";
                line.style.transform="translate(-22px,150px)";
            }

            //line for 2nd column

            if(e[0]===1 && e[1]===5 && e[2]===9 && e[3]===13){
                console.log("im n column");
                line.style.display="block";
                line.style.width="380px";
                line.style.rotate="90deg";
                line.style.transform="translate(-22px,50px)";
            }

            //line for 3rd column

            if(e[0]===2 && e[1]===6 && e[2]===10 && e[3]===14){
                console.log("im n column");
                line.style.display="block";
                line.style.width="380px";
                line.style.rotate="90deg";
                line.style.transform="translate(-22px,-50px)";
            }

            //line for 4th column

            if(e[0]===3 && e[1]===7 && e[2]===11 && e[3]===15){
                console.log("im n column");
                line.style.display="block";
                line.style.width="380px";
                line.style.rotate="90deg";
                line.style.transform="translate(-22px,-150px)";
            }

            //line for 1st diagonal

            if(e[0]===0 && e[1]===5 && e[2]===10 && e[3]===15){
                console.log("im n column");
                line.style.display="block";
                line.style.width="480px";
                line.style.rotate="45deg";
                line.style.transform="translate(-10px,-18px)";
            }

            //line for 2nd diagonal

            if(e[0]===3 && e[1]===6 && e[2]===9 && e[3]===12){
                console.log("im n column");
                line.style.display="block";
                line.style.width="480px";
                line.style.rotate="-45deg";
                line.style.transform="translate(10px,-18px)";
            }

        }
    })
}








// Event handler function

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