function add(num1,num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1,num2){
    let sum = num1 - num2;
    return sum;
}

function multiply(num1,num2){
    let product = num1 * num2;
    return product;
}

function divide(num1,num2){
    let division = num1/num2;
    return division;
}

function operate(number1,operator,number2){
    if (operator === "+"){
       return add(number1,number2)
    }
    else if (operator === "-"){
        return subtract(number1,number2)
    }
    else if (operator ==="*"){
        return multiply(number1,number2)
    }
    else if (operator ==="/"){
       return divide(number1,number2)
    }
}

    const boxes = document.getElementsByClassName("box");
    const clear = document.getElementsByClassName("clear");
    const display = document.getElementById("display");
    let miniDisplay = document.getElementById('miniDisplay')
    let number1 = "";
    let interimNumber = "";
    let operator = "";
    
   
    for(let box of boxes ) {
        box.addEventListener('click', function getNumber(){
            if( box.textContent==1|| 
                box.textContent==2||
                box.textContent==3||
                box.textContent==4||
                box.textContent==5||
                box.textContent==6||
                box.textContent==7||
                box.textContent==8||
                box.textContent==9||
                box.textContent==0)
                {
                interimNumber += box.textContent
                display.textContent = interimNumber;
                miniDisplay.textContent += box.textContent;

            }
            
            else if(
                box.textContent === "+" ||
                box.textContent === "-" ||
                box.textContent === "*" ||
                box.textContent === "/")
                //reset the display
                //log the first number in a variable
                //start collecting the second number which it also displays on the screen
            {
                display.textContent = "";
                number1 = Number(interimNumber);
                interimNumber="";
                operator = box.textContent;
                miniDisplay.textContent += " " + box.textContent + " ";
            }
            else if(box.textContent === "="){
                number2=Number(interimNumber);
                final = operate(number1,operator,number2); 
                display.textContent = final
                interimNumber = final
                miniDisplay.textContent += " " + box.textContent + " ";
            }
            else if (box.textContent === "Clear"){
                number1 = "";
                interimNumber ="";
                operator = "";
                display.textContent = "";
                miniDisplay.textContent = ""
            }

        })
            }
            
       
    
   
    

    



