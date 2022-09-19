  var button = document.querySelector("#knappID");
  var msg1 = document.getElementById("message1")
  var msg2 = document.getElementById("message2")
  var msg3 = document.getElementById("message3") 
  var answer = Math.floor(Math.random() * 100) + 1;
  var no_of_guesses = 0;
  var guesses_num = [];
  var reset = document.querySelector("#resetID");
  var user_guess = document.getElementById("guess").value;


function restart() {
    answer = Math.floor(Math.random() * 100) + 1;
    document.getElementById("message1").innerHTML="";
    user_guess.value = "";
    no_of_guesses = 0;
    guesses_num = [];

    msg2.innerHTML = "No. Of Guesses : " + no_of_guesses;
    msg3.innerHTML = "Guessed Number Are : none";
}

function play() {
    var user_guess = document.getElementById("guess").value;
    if (no_of_guesses < 10) {
        if (user_guess < 1 || user_guess > 100) {
                alert("Please Enter a number Between 1 to 100");
            } else {
                guesses_num.push(user_guess);
                no_of_guesses += 1;
                if (user_guess < answer) {
                    msg1.textContent = "Your Guess is Too low"
                    msg2.textContent = "No. Of Guesses : " + no_of_guesses;
                    msg3.textContent = "Guessed Number Are: " + guesses_num;
                } else if (user_guess > answer) {
                    msg1.textContent = "Your Guess is Too High"
                    msg2.textContent = "No. Of Guesses : " + no_of_guesses;
                    msg3.textContent = "Guessed Number Are: " + guesses_num;
                } else if (user_guess == answer) {
                    msg1.textContent = "Nice you won! Enter a number to try again."
                    msg2.textContent = "the Number was " + answer; 
                    msg3.textContent = " You guessed it in " + no_of_guesses + " Guesses";
                    answer = Math.floor(Math.random() * 100) + 1;
                    user_guess.value = "";
                    no_of_guesses = 0;
                    guesses_num = [];

                }
                {
                document.getElementById("guess").value = "";
                }
            } // end check number
    } // end check attempt
    else {
        msg1.textContent = "You have no more attempts, click reset to try again"
    }

    
} // end play func

button.addEventListener("click", play);

reset.addEventListener("click", restart);

window.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        play()
        console.log("Enter_clicked")
    }
    if (event.key === 'r') {
        restart()
    }
});