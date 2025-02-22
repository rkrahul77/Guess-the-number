        // Random number generate (1 to 100)
        const secretNumber = Math.floor(Math.random() * 100) + 1;

        // Guess check function
        function checkGuess() {
            const userGuess = parseInt(document.getElementById("userGuess").value);
            const result = document.getElementById("result");
        
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                result.textContent = "⚠️ Krupaya 1 te 100 madhla number taka!";
                result.style.color = "#d62828";
                return;
            }
        
            if (userGuess === secretNumber) {
                result.textContent = `🎉 Wah! Tumcha andaz barobar - ${secretNumber}!`;
                result.style.color = "green";
            } else if (userGuess > secretNumber) {
                result.textContent = "📉 Khup motha ahe! Kami try kara.";
                result.style.color = "#d62828";
            } else {
                result.textContent = "📈 Khup lahan ahe! Motha try kara.";
                result.style.color = "#457b9d";
            }
        }