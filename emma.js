const button = document.querySelector("#button"); 
const message = document.querySelector("#message"); 
const btnHello = document.getElementById("btnHello");
        const wakebutton = document.getElementById("wakeButton");
        const sleepbutton = document.getElementById("sleepButton");

        // Add click event listeners
        sleepbutton.addEventListener("click", function() {
            alert("Emma is sleeping! She missed all the morning activities.");
        });

        wakebutton.addEventListener("click", function() {
            alert("Emma is awake and ready to start the day!");
        });