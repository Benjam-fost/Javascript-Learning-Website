let sBtn = document.getElementById("sBtn");


function guess(_min, _max){
    const min = _min, max = _max;
    const ans = Math.floor(Math.random() * (max - min + 1)) + min;
    let guess, attempts = 0, running = true;

    while(running){
        guess = window.prompt(`Guess a number between ${min}-${max}`);
        guess = Number(guess);

        if(isNaN(guess) || (guess < min || guess > max)){
            window.alert("Please enter a valid number");
        }
        else{
            attempts++;
            if(guess < ans){
                window.alert(`${guess} was too low, try again`);
            }
            else if(guess > ans){
                window.alert(`${guess} was too high, try again`);
            }
            else {
                window.alert(`Correct! The answer was ${ans}. You made ${attempts} attempts.`);
                running = false;
            }
        }
        
    }
}

sBtn.onclick = function check(){
    let minText = document.getElementById("minText");
    let maxText = document.getElementById("maxText");
    const min = Number(minText.value);
    const max = Number(maxText.value);
    if(typeof (min + max) == "number" && min < max){
        guess(min,max);
    }
    else window.alert(`Please enter a valid range`);
}