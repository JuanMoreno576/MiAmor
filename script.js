function showLoveMessage() {
    document.getElementById("initial-buttons").classList.add("hidden");
    document.getElementById("love-message").classList.remove("hidden");
}

function showExitMessage() {
    document.getElementById("initial-buttons").classList.add("hidden");
    document.getElementById("exit-message").classList.remove("hidden");
}

function showNextPart() {
    document.getElementById("love-message").classList.add("hidden");
    document.getElementById("next-part").classList.remove("hidden");
}

function startLoveLoop() {
    document.getElementById("next-part").classList.add("hidden");
    document.getElementById("love-loop").classList.remove("hidden");
}

function endLoveLoop() {
    document.getElementById("love-loop").classList.add("hidden");
    document.getElementById("final-love-message").classList.remove("hidden");
}

function showNoLoveMessage() {
    document.getElementById("next-part").classList.add("hidden");
    document.getElementById("no-love-message").classList.remove("hidden");
}

function moveNoButton() {
    let button = document.getElementById("no-button");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    button.style.left = x + "px";
    button.style.top = y + "px";
}
