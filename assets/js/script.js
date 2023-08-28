document.addEventListener("DOMContentLoaded", function () {
    let guessesLeft = 10;
    let totalGuesses = 0;
    let gameOver = false;
    let hiddenWord = random_word();
    let secretWord = get_secret_word(hiddenWord);
    update_word();
    resetImg();
    resetButtons();

    // Select all buttons
    const buttons = document.querySelectorAll('.guess_buttons button');

    // Add click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (!gameOver) {
                totalGuesses++;
                button.disabled= true;
                button.style.backgroundColor= "rgb(57, 114, 116)";
                const letter = button.textContent;
                guess(letter);
            }
        });
    });
    /**Getting random word from array*/
    function random_word() {
        const cityItems = [
            "building", "car", "bus", "bicycle", "traffic light", "street sign", "tree", "bench", "sidewalk", "skyscraper",
            "billboard", "parking meter", "mailbox", "fire hydrant", "fountain", "statue", "pedestrian", "crosswalk", "seagull",
            "coffee shop", "restaurant", "cafe", "store", "pharmacy", "bank", "bookstore", "library", "museum", "gallery",
            "park", "playground", "metro station", "taxi", "pedicab", "umbrella", "shopping cart", "street vendor", "newsstand",
            "street performer", "trash can", "flowerbed", "escalator", "elevator", "skateboarder", "dog walker", "delivery truck",
            "construction site", "crane", "roadwork", "bus stop", "traffic jam", "tourist", "tour bus", "boulevard", "alleyway",
            "apartment", "condominium", "traffic cone", "highway", "crossroads", "intersection", "bike lane", "zoo", "hospital",
            "fire station", "police car", "ambulance", "theater", "cinema", "shopping center", "market", "footbridge", "overpass",
            "subway entrance", "billboard", "monument", "litter", "graffiti", "helicopter", "news ticker", "staircase", "news van",
            "bus shelter", "garden", "skate park", "stadium", "court", "musician", "busker", "crowd", "lawn", "food truck"
        ];
        const randomWordIndex = Math.floor(Math.random() * cityItems.length);
        return cityItems[randomWordIndex];
    }
    /**Getting the word that the user sees */
    function get_secret_word(hiddenWord) {
        let secretWord = '';
        for (let i = 0; i < hiddenWord.length; i++) {
            if (hiddenWord[i] == ' ') {
                secretWord += ' ';
            } else {
                secretWord += '*';
            }
        }
        return secretWord;
    }
    /**Updating the secret word label for user*/
    function update_word() {
        let seenWord = document.getElementById('hidden_word');
        seenWord.textContent = secretWord;
        
    }
    /**Updating the total tries and tries left on labels for user*/
    function updateTries(totalGuesses,guessesLeft) {
        let totalLabel = document.getElementById('total_guesses');
        totalLabel.textContent = "Total Guesses: " + totalGuesses.toString();
        let leftLabel = document.getElementById('guesses_left');
        leftLabel.textContent = "Guesses Left: " + guessesLeft.toString();
    };
    /**Guessed Letter */
    function guess(letter) {
        let correctGuess = false;
        for (let x = 0; x < hiddenWord.length; x++) {
            if (letter === hiddenWord[x]) {
                secretWord = secretWord.substring(0, x) + letter + secretWord.substring(x + 1);;
                correctGuess = true;
            }
        }
        if (secretWord == hiddenWord) {
            if(confirm("Well done on guessing the word!")){
                newGame();  
            }            
        }
        if (correctGuess == false) {
            guessesLeft--;
            check_img();
            if (guessesLeft <= 0) {
                gameOver = true;
                if(confirm(`GAME OVER! Your word was \n${hiddenWord}`)){
                    newGame();  
                }
                let revealWord = getElementById('hidden_word');
                revealWord.textContent = hiddenWord;
            }
        }
        updateTries(totalGuesses,guessesLeft);
        update_word();
        if (secretWord.indexOf('*') === -1) {
            gameOver = true;
        }
    }
    /**updating image visible as tries left decreases */
    function check_img(){
            if (guessesLeft == 9) {
                let hat = document.getElementById('hat1');
                hat.style.visibility = 'visible';
            }
            if (guessesLeft == 8) {
                let head = document.getElementById('head2');
                head.style.visibility = 'visible';
            }
            if (guessesLeft == 7) {
                let leftEye = document.getElementById('left_eye3');
                leftEye.style.visibility = 'visible';
            }
            if (guessesLeft == 6) {
                let rightEye = document.getElementById('right_eye4');
                rightEye.style.visibility = 'visible';
            }
            if (guessesLeft == 5) {
                let mouth = document.getElementById('mouth5');
                mouth.style.visibility = 'visible';
            }
            if (guessesLeft == 4) {
                let spine = document.getElementById('spine6');
                spine.style.visibility = 'visible';
            }
            if (guessesLeft == 3) {
                let leftArm = document.getElementById('left_arm7');
                leftArm.style.visibility = 'visible';
            }
            if (guessesLeft == 2) {
                let rightArm = document.getElementById('right_arm8');
                rightArm.style.visibility = 'visible';
            }
            if (guessesLeft == 1) {
                let leftLeg = document.getElementById('left_leg9');
                leftLeg.style.visibility = 'visible';
            }      
            if (guessesLeft == 1) {
                let rightLeg = document.getElementById('right_leg10');
                rightLeg.style.visibility = 'visible';
            }
    }
    /**resetting images */
    function resetImg() {
        let hat = document.getElementById('hat1');
        hat.style.visibility = 'hidden';
        let head = document.getElementById('head2');
        head.style.visibility = 'hidden';
        let leftEye = document.getElementById('left_eye3');
        leftEye.style.visibility = 'hidden';
        let rightEye = document.getElementById('right_eye4');
        rightEye.style.visibility = 'hidden';
        let mouth = document.getElementById('mouth5');
        mouth.style.visibility = 'hidden';
        let spine = document.getElementById('spine6');
        spine.style.visibility = 'hidden';
        let leftArm = document.getElementById('left_arm7');
        leftArm.style.visibility = 'hidden';
        let rightArm = document.getElementById('right_arm8');
        rightArm.style.visibility = 'hidden';
        let leftLeg = document.getElementById('left_leg9');
        leftLeg.style.visibility = 'hidden';
        let rightLeg = document.getElementById('right_leg10');
        rightLeg.style.visibility = 'hidden';       
    } 
    /**enabling all buttons */
    
    function resetButtons () {
        const buttons = document.getElementsByTagName("button");
            for (const button of buttons) {
            button.disabled = false;
            button.style.backgroundColor = "rgb(7, 40, 41)";
        }
    }
    
    function newGame() {
        guessesLeft = 10;
        totalGuesses = 0;
        gameOver = false;
        hiddenWord = random_word();
        secretWord = get_secret_word(hiddenWord);
        update_word();
        resetImg();
        resetButtons();
    }
});