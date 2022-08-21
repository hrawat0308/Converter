'use strict';

const from = document.querySelector("#from");
const to = document.querySelector("#to");
const input = document.querySelector("#userInput");
const output = document.querySelector("#convertedOutput");
const convert = document.querySelector("#convert-btn");
const swap = document.querySelector("#swap-btn");


const converter = () => {
    if(from.value === to.value){
        output.value = input.value;
        return;
    }
    else if (from.value === 'Decimal'){
        const decimalValue = parseInt(input.value,10);
        if(to.value === 'Binary'){
            output.value = decimalValue.toString(2);
            return;
        }
        else if(to.value === 'Octal'){
            output.value = decimalValue.toString(8);
            return;
        }
        else if(to.value === 'Hexadecimal'){
            output.value = decimalValue.toString(16);
            return;
        }
        
    }
    else if(from.value === 'Binary'){
        const decimalValue = parseInt(input.value,2);
        if(to.value === 'Decimal'){
            output.value = decimalValue;
            return;
        }
        else if(to.value === 'Octal'){
            output.value = decimalValue.toString(8);
            return;
        }
        else if(to.value === 'Hexadecimal'){
            output.value = decimalValue.toString(16);
            return;
        }
    }
    else if(from.value === 'Octal'){
        const decimalValue = parseInt(input.value,8);
        if(to.value === 'Decimal'){
            output.value = decimalValue;
            return;
        }
        else if(to.value === 'Binary'){
            output.value = decimalValue.toString(2);
            return;
        }
        else if(to.value === 'Hexadecimal'){
            output.value = decimalValue.toString(16);
            return;
        }
    }

    else if(from.value === 'Hexadecimal'){
        const decimalValue = parseInt(input.value,16);
        if(to.value === 'Decimal'){
            output.value = decimalValue;
            return;
        }
        else if(to.value === 'Binary'){
            output.value = decimalValue.toString(2);
            return;
        }
        else if(to.value === 'Octal'){
            output.value = decimalValue.toString(8);
            return;
        }
    }
}

convert.addEventListener("click", converter);

swap.addEventListener('click',function(){
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    input.value = output.value;
    converter();
});

