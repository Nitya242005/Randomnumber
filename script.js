var guessnum = document.getElementById('guessnumber');
        var result = document.getElementById('result');
        var score = document.getElementById('score');
        var newGameBtn = document.getElementById('newGame');
        var randomnum = Math.floor(Math.random() * 10) + 1;
        var totalscore = 10;
        
        function Check() {
            var userGuess = parseInt(guessnum.value);
            if (userGuess === randomnum) {
                result.innerHTML = "🎉 Congratulations! You guessed right!";
                result.style.color = "#28a745";
                totalscore += 1;
                newGameBtn.classList.remove("hidden");
            } else if (totalscore === 0) {
                result.innerHTML = "💀 Game Over!";
                result.style.color = "red";
                newGameBtn.classList.remove("hidden");
            } else {
                result.innerHTML = "❌ Try Again!";
                result.style.color = "#dc3545";
                totalscore -= 1;
            }
            score.innerHTML = "Score: " + totalscore;
        }

        function NewGame() {
            randomnum = Math.floor(Math.random() * 10) + 1;
            totalscore = 10;
            score.innerHTML = "Score: " + totalscore;
            guessnum.value = "";
            newGameBtn.classList.add("hidden");
        }