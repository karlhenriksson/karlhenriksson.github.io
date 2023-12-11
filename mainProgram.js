"use strict";
console.log("Version 1.3");

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
        let showRecipient = confirm("Detta kommer visa mottagaren för: " + givenObj.giver + ". Om detta inte är du, var vänlig fortsätt inte.");

        if(showRecipient) {
            outputText = "Din hemliga mottagare är " + givenObj.recipient + ". Du ska ge denna person en passande present för under 50kr.";
        } else {
            outputText = "Handlingen avbröts.";
        }
        inputField.value = "";
    }

    // Else, if this code is an easter-eggy one...
    for(const regexp of easterEggs.keys()) {
        // Set the output text to to the egg
        if(input.match(regexp)) outputText = easterEggs[regexp];
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
        inputField.value = "";
    }
);
