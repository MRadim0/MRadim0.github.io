const messages = [
    "Na pewno?",
    "NA PEWNO??",
    "100% pewna?",
    "no wez.....",
    "przemyśl to!",
    "no we nooo",
    "mam opla corse pyknij tak",
    "zastanów sie jeszcze 2 razy",
    "Dobra ok przestaje juz",
    "Myślałem ze w tym momencie juz dawno klikniesz TAK"
    "żart przeciez ten przycisk nie działa i tak musisz kliknąć TAK"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
