"use strict";

/*

TITTA INTE I DEN HÄR FILEN!!!

Det är här alla namn sparas. Så genom att titta i den här filen kan du se vem alla ska ge till. Så för att hålla det hemligt, 
var vänlig titta inte här!



































*/

// Stores codes, along with the recipient and the person with the code
// (keys are all lower case)
const codeToPeople = {
    "41491": { giver: "Isabella", recipient: "Tamara" },
    "63147": { giver: "Tamara", recipient: "Tove" },
    "50575": { giver: "Tove", recipient: "Janica" },
    "66722": { giver: "Janica", recipient: "Arvid E" },
    "46064": { giver: "Arvid E", recipient: "Setayesh" },
    "79460": { giver: "Setayesh", recipient: "Hannes" },
    "67020": { giver: "Hannes", recipient: "Vilgot" },
    "67907": { giver: "Vilgot", recipient: "Emil" },
    "61786": { giver: "Emil", recipient: "Ines" },
    "53482": { giver: "Ines", recipient: "Elly" },
    "27637": { giver: "Elly", recipient: "Vidar" },
    "82305": { giver: "Vidar", recipient: "Filippa" },
    "43205": { giver: "Filippa", recipient: "Olof" },
    "48826": { giver: "Olof", recipient: "Dyar" },
    "45530": { giver: "Dyar", recipient: "Isac" },
    "60813": { giver: "Isac", recipient: "Svante" },
    "30210": { giver: "Svante", recipient: "Jingrui" },
    "50431": { giver: "Jingrui", recipient: "Tea" },
    "38206": { giver: "Tea", recipient: "Ludvig" },
    "34686": { giver: "Ludvig", recipient: "Elsa" },
    "89451": { giver: "Elsa", recipient: "Ellie" },
    "90269": { giver: "Ellie", recipient: "Stella" },
    "72791": { giver: "Stella", recipient: "Matilda" },
    "53424": { giver: "Matilda", recipient: "Malin" },
    "60123": { giver: "Malin", recipient: "Sinit" },
    "47664": { giver: "Sinit", recipient: "Joel" },
    "25014": { giver: "Joel", recipient: "Arvid S" },
    "40471": { giver: "Arvid S", recipient: "Isabella" },
}

// Om du trots allt är här, var vänlig spoila i alla fall inte detta!  /Karl
const easterEggs = {
    "/^bånx$/g": "Testa 'Bonx' i stället. Det är den bättre stavningen.",
    "/^bonx$/g": "Kom till Karl så får du en gratis kopp choklad. (endast de 3 första som kommer till mig får detta, så du tjänar på att hålla denna funktion hemlig tills efter att du fått din kopp)",
    "/^aaa*$/g": "Varför skriker du så mycket?",
    "/^123$/g": "567×89=???",
    "/^1234$/g": "567×89=???",
    "/^12345$/g": "567×89=???",
    "/^123456$/g": "567×89=???",
    "/^1234567$/g": "567×89=???",
    "/^12345678$/g": "567×89=???",
    "/^123456789$/g": "567×89=???",
    "/^50463$/g": "1+2+3+4+...+99+100=???",
    "/^5050$/g": "To be or not to be, that is [???]",
    "/^the question$/g": "The question is: How many days are there in February next year?",
    "/^29$/g": "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>https://www.desmos.com/calculator/jadlzaifbr</a>",
    "/^lorem ipsum$/g": "Dolor sit amet, consectetur adipisicing elit.",
    "/^knut$/g": "Det är jag, ja.",
    "/^admin$/g": "You have been granted admin rights. Please proceed to <a href='https://imgs.xkcd.com/comics/incident.png'>the admin control panel</a>.",
    "/^password$/g": "You have been granted admin rights. Please proceed to <a href='https://imgs.xkcd.com/comics/incident.png'>the admin control panel</a>.",
}
