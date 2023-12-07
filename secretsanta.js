"use strict";

// TODO: Make the alert appear in the card like the output text (more consts?)

const mainCard = document.getElementById("mainCard");
const inputField = document.getElementById("codeEntry");

// Final output
const output = document.createElement("p");
output.style = "margin:0.5cm; margin-top:0cm";
output.id = "output";

function submitCode(input){
    console.log("Input = " + input);
    const givenObj = codeToPeople[input];

    let outputText = "Koden matchade inte någon handling.";

    // If no output paragraph exists, create a new one
    if(!document.getElementById("output")) {
        console.log("Creating new output...");
        mainCard.appendChild(output);
    }

    // If this code is a valid one...
    if(codeToPeople[input]) {
        // Do one last check to make sure that the person is the one they are
        let showRecipient = confirm("Vill du fortsätta? Detta visar mottagaren för: " + givenObj.giver + ".");

        if(showRecipient) {
            outputText = "Din hemliga mottagare är: " + givenObj.recipient;
        } else {
            outputText = "Handlingen avbröts.";
            inputField.value = "";
        }
    }

    // Else, if this code is an easter-eggy one...
    if(easterEggs[input.toLowerCase()]) {
        // Set the output text to to the egg
        outputText = easterEggs[input.toLowerCase()];
    }

    // Modify output
    output.innerHTML = outputText;
}

// Add a listener to the button to decode the given code
document.getElementById("run").addEventListener("click", 
    ()=>submitCode(inputField.value.toLowerCase())
);

// Add a listener to run the input code when it is submitted
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
if(!navigator.userAgentData.mobile) {
    document.querySelector("input").addEventListener("change", 
        ()=>submitCode(inputField.value.toLowerCase())
    )
}

// Add an event listener to remove output paragraph
document.getElementById("reset").addEventListener(
    "click", 
    ()=>{
        if(document.getElementById("output")) 
            document.getElementById("output").remove();
    }
);
