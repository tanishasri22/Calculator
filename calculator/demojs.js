var buttons = document.getElementsByClassName("button");
var display = document.getElementById("row1");
console.log(display);
var operand1 = 0;
var operator = null;
var operand2 = null;

for(var i=0;i<buttons.length;i++){
    
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value');
        //console.log(value);
       
        switch(value){

            case 'clear' :
                display.textContent = "";
                break;
            case '+' : 
                operand1 = parseFloat(display.textContent);
                operator = value;
                display.textContent = "";
                break;
            case '*' :
                operand1 = parseFloat(display.textContent);
                operator = value;
                display.textContent = "";
                break;

            case '%' :
                operand1 = parseFloat(display.textContent);
                operator = value;
                display.textContent = "";
                break;    

            case '/' :
                operand1 = parseFloat(display.textContent);
                operator = value;
                display.textContent = "";
                break;

            case '-' :
                operand1 = parseFloat(display.textContent);
                operator = value;
                display.textContent = "";
                break;

            case '+/-':
                operand1 = parseFloat(display.textContent)*(-1);
                display.textContent =  operand1;
                break;
                
            case '=' :
                operand2 = parseFloat(display.textContent);
                var result = eval(operand1 + "" + operator + "" + operand2);
                display.innerText = result;
                console.log(result);
                break;

            default : 
                display.innerText += value;

        }
    });
}