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
    "mam nadzieje ze tylko testujesz co dalej napisałem",
    "wiem ze teraz juz to speclajnie",
    "dobra serio już pyknij to tak i miejmy to z głowy bo nie zostawie ci innej opcji",
    "TAK ZOSTANE! "
];


let messageIndex = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1);
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
	if (messageIndex == 14){
	    window.location.href = "yes_page.html";
	}
	
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
