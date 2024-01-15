
function roll(){
    const numDice = document.getElementById("dieNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [], images = [];

    for(let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Resources/Images/visual-dice-roller/Dice-${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");

}