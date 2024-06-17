let saareBox=document.querySelectorAll("#box");
// console.log(saareBox.textContent);

let ButtonText=document.querySelector("button");

let Reset=document.querySelector(".Reset")

let line=document.querySelector(".line");

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
  [0,1,2,3,4],
  [5,6,7,8,9],
  [10,11,12,13,14],
  [15,16,17,18,19],
  [20,21,22,23,24],
  [0,5,10,15,20],
  [1,6,11,16,21],
  [2,7,12,17,22],
  [3,8,13,18,23],
  [4,9,14,19,24],
  [0,6,12,18,24],
  [4,8,12,16,20]
];

    Array.forEach(e=>{
        // let sum=0;
        if((saareBox[e[0]].textContent===saareBox[e[1]].textContent) && (saareBox[e[2]].textContent===saareBox[e[1]].textContent) &&(saareBox[e[3]].textContent===saareBox[e[2]].textContent) &&(saareBox[e[4]].textContent === saareBox[e[3]].textContent) && (saareBox[e[0]].textContent!=="") && (saareBox[e[1]].textContent!=="") && (saareBox[e[2]].textContent!=="") && (saareBox[e[3]].textContent!=="") && (saareBox[e[4]].textContent!=="")){

            console.log("u won");
            console.log(ButtonText.textContent);
            ButtonText.textContent="u won";


            //for removing event listeners so that after winning the match no next should be possible
            saareBox.forEach(Element =>{
                Element.removeEventListener("click", handleClick);
              })

                //line for 1st row

                
          if(e[0]===0 && e[1]===1 && e[2]===2 &&e[3]===3 && e[4]===4){
            line.style.display="block";
            line.style.width="480px";
            line.style.transform="translate(0px,-225px)";
        }

        //line for 2nd row
        if(e[0]===5 && e[1]===6 && e[2]===7 &&e[3]===8 &&e[4]===9){
            line.style.display="block";
            line.style.width="480px";
            line.style.transform="translate(0px,-125px)";
        }

        //line for 3rd row

        if(e[0]===10 && e[1]===11 && e[2]===12 &&e[3]===13 && e[4]===14){
            line.style.display="block";
            line.style.width="480px";
            line.style.transform="translate(0px,-25px)";
        }

        //line for 4th row

        if(e[0]===15 && e[1]===16 && e[2]===17 &&e[3]===18 && e[4]===19){
            line.style.display="block";
            line.style.width="480px";
            line.style.transform="translate(0px,75px)";
        }

        //line for 5th row

        if(e[0]===20 && e[1]===21 && e[2]===22 &&e[3]===23 && e[4]===24){
            line.style.display="block";
            line.style.width="480px";
            line.style.transform="translate(0px,175px)";
        }

        //line for 1st column

        if(e[0]===0 && e[1]===5 && e[2]===10 &&e[3]===15 && e[4]===20){
            line.style.display="block";
            line.style.rotate="90deg"
            line.style.width="480px";
            line.style.transform="translate(-25px,200px)";
        }

        //line for 2nd column
        
        if(e[0]===1 && e[1]===6 && e[2]===11 &&e[3]===16 && e[4]===21){
            line.style.display="block";
            line.style.rotate="90deg"
            line.style.width="480px";
            line.style.transform="translate(-25px,100px)";
        }

        //line for 3rd column

        if(e[0]===2 && e[1]===7 && e[2]===12 &&e[3]===17 && e[4]===22){
            line.style.display="block";
            line.style.rotate="90deg"
            line.style.width="480px";
            line.style.transform="translate(-25px,0px)";
        }

        //line for 4th column

        if(e[0]===3 && e[1]===8 && e[2]===13 &&e[3]===18 && e[4]===23){
            line.style.display="block";
            line.style.rotate="90deg"
            line.style.width="480px";
            line.style.transform="translate(-25px,-100px)";
        }

        //line for 5th column

        if(e[0]===4 && e[1]===9 && e[2]===14 &&e[3]===19 && e[4]===24){
            line.style.display="block";
            line.style.rotate="90deg"
            line.style.width="480px";
            line.style.transform="translate(-25px,-200px)";
        }

        //line for 1st diagonal

        if(e[0]===0 && e[1]===6 && e[2]===12 &&e[3]===18 && e[4]===24){
            line.style.display="block";
            line.style.rotate="45deg"
            line.style.width="650px";
            line.style.transform="translate(0px,-18px)";
        }

        //line for 2nd diagonal

        if(e[0]===4 && e[1]===8 && e[2]===12 &&e[3]===16 && e[4]===20){
            line.style.display="block";
            line.style.rotate="-45deg"
            line.style.width="650px";
            line.style.transform="translate(0px,-18px)";
        }


            }})}


            function handleClick(event) {
                const dabba = event.target;
                if (ChangeValue === 0 && dabba.textContent === "") {
                    dabba.textContent = "X";
                    dabba.style.backgroundColor="rgba(129, 119, 119, 0.77)";
                } else if (ChangeValue === 1 && dabba.textContent === "") {
                    dabba.textContent = "0";
                    dabba.style.backgroundColor="rgba(129, 119, 119, 0.77)";
                }

                CheckWin();
                changeTurn();
                changeButtonText();
                
            
               //for removing event listener after first click
                dabba.removeEventListener("click", handleClick);
            }
            
            
            saareBox.forEach(dabba => {
                dabba.addEventListener("click", handleClick);
            });
            
            
            //reset button
            Reset.addEventListener("click",function(){
                ChangeValue=0;
                saareBox.forEach(Element=>{
                    //    Element.stye.backgroundColor="rgb(239, 227, 211)";
                    Element.textContent="";
                    // Element.removeEventListener("click", handleClick);
                    ButtonText.textContent="Turn Of 1st Player";
                    line.style.display="none";
                    
            })
            })