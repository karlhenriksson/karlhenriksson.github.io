"use strict";

// TODO: Make the alert appear in the card like the output text (more consts?)

// Stores codes, along with the recipient and the person with the code
// (keys are all lower case)
const codeToPeople = {
    "0102": { giver:"Ture", recipient:"Knut" },
}

// Om du är här, var vänlig spoila inte detta!  /Karl
const easterEggs = {
    "bånx": "Testa 'Bonx' i stället. Det är den bättre stavningen.",
    "bonx": "Kom till Karl så får du en gratis kopp choklad. (endast de 3 första som kommer till mig får detta, så du tjänar på att hålla denna funktionen hemlig tills efter att du fått din kopp)",
    "aaa": "Varför skriker du så mycket?",
    "aaaa": "Varför skriker du så mycket?",
    "aaaaa": "Varför skriker du så mycket?",
    "1234": "567×89=???",
    "50463": "1+2+3+4+...+99+100=???",
    "5050": "To be or not to be, that is [???]",
    "the question": "The question is: How many days are there in February next year?",
    "29": "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>https://www.desmos.com/calculator/jadlzaifbr</a>",
    "lorem ipsum": "Dolor sit amet, consectetur adipisicing elit.",
    "knut": "Det är jag, ja.",
    "admin": "You have been granted admin rights. Please proceed to <a href='https://imgs.xkcd.com/comics/incident.png'>the admin control panel</a>.",
    "password": "You have been granted admin rights. Please proceed to <a href='https://imgs.xkcd.com/comics/incident.png'>the admin control panel</a>.",
}

const mainCard = document.getElementById("mainCard");
let output = document.createElement("p");

output.style = "margin:0.5cm; margin-top:0cm";
output.id = "output";

// Add a listener to the button to decode the given code
document.getElementById("run").addEventListener("click", ()=>{
    let input = document.getElementById("codeEntry").value.toLowerCase();
    console.log("Input = " + input);

    let outputText = "Koden matchade inte någon handling."

    // If no output paragraph exists, create a new one
    if(!document.getElementById("output")) {
        console.log("Creating new output...");
        mainCard.appendChild(output);
    }

    // If this code is a valid one...
    if(codeToPeople[input]) {
        const givenObj = codeToPeople[input];
        // Do one last check to make sure that the person is the one they are
        let showRecipient = confirm("Denna kod är registrerad till " + givenObj.giver + ". Är det du?");

        if(showRecipient) {
            outputText = "Din hemliga mottagare är: " + givenObj.recipient;
        } else {
            outputText = "Handlingen avbröts."
        }
    }

    // Else, if this code is an easter-eggy one...
    if(easterEggs[input.toLowerCase()]) {
        // Set the output text to to the egg
        outputText = easterEggs[input.toLowerCase()];
    }

    // Modify output
    output.innerHTML = outputText;
})

// Add an event listener to remove output paragraph
document.getElementById("reset").addEventListener(
    "click", 
    ()=>{
        if(document.getElementById("output")) 
            document.getElementById("output").remove();
    }
);
