const brevetDiv = document.getElementById("brevet");
const clickButton = document.getElementById("byttFarge");

let clickCount = 0;
let brev = document.getElementById("brev");
let sendE =document.getElementById("send");
let outputE = document.getElementById("output");

clickButton.addEventListener("click",() => {
    clickCount++;

    if (clickCount % 2 === 0){

        const randomColor = getRandomColor();
        brevetDiv.style.backgroundColor = randomColor;
    }
});

function getRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function send(){
    brevetDiv.style.display = "none";
    outputE.textContent = "Brevet ditt er sendt videre til julenissen!"
}



sendE.addEventListener("click", send)

const sendTilNissen = document.getElementById("brev");
sendTilNissen.addEventListener("keydown", function(event) {
    if (event.key === "Enter") (
        send()
    )
});