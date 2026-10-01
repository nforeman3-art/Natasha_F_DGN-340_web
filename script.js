const button = document.querySelector("#button"); 
const message= document.querySelector("#message");

button.addEventListener("click", () => {
    message.textContent = "You clicked the button!";
});

button.addEventListener("click", () => {
    message.textContent = "Wow!";
});

button.addEventListener("click", changeMessage);

function changeMessage() {
    message.textContent = "You clicked the button!";
    button.style.backgroundColor = "purple";
}

const btn = document.getElementById('myButton');
    const messages = ['Message 1', 'Message 2', 'Message 3'];
    let index = 0;

    btn.addEventListener('click', function() {
      index = (index + 1) % messages.length; // cycle through messages
      btn.textContent = messages[index];
    });