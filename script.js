const display = document.getElementById("display");

// Add value to display
function appendValue(value){

    display.value += value;

}

// Clear display
function clearDisplay(){

    display.value = "";

}

// Delete last character
function deleteLast(){

    display.value = display.value.slice(0,-1);

}

// Calculate result
function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

// Keyboard Support

document.addEventListener("keydown",function(event){

    const key = event.key;

    // Numbers

    if(!isNaN(key)){

        appendValue(key);

    }

    // Operators

    else if(["+","-","*","/","."].includes(key)){

        appendValue(key);

    }

    // Enter

    else if(key==="Enter"){

        event.preventDefault();
        calculate();

    }

    // Backspace

    else if(key==="Backspace"){

        deleteLast();

    }

    // Escape

    else if(key==="Escape"){

        clearDisplay();

    }

});