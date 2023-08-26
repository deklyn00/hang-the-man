document.addEventListener("DOMContentLoaded", function () {
    let guessesLeft = 10;
    let totalGuesses = 0;
    let gameOver = false;
    let hiddenWord = random_word();
    let secretWord = get_secret_word(hiddenWord);
    update_word();

    // Select all buttons
    const buttons = document.querySelectorAll('.guess_buttons button');

    // Add click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (!gameOver) {
                const letter = button.textContent;
                guess(letter);
            }
        });
    });

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
            "subway entrance", "billboard", "monument", "litter", "graffiti", "ATM", "news ticker", "staircase", "news van",
            "bus shelter", "garden", "skate park", "stadium", "court", "musician", "busker", "crowd", "lawn", "food truck"
        ];
        const randomWordIndex = Math.floor(Math.random() * cityItems.length);
        return cityItems[randomWordIndex];
    }

    function get_hidden_word() {
        const hiddenWord = random_word();
        return hiddenWord;
    }

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

    function update_word() {
        let seenWord = document.getElementById('hidden_word');
        seenWord.textContent = secretWord;
    }

    function guess(letter) {
        let correctGuess = false;
        for (let x = 0; x < hiddenWord.length; x++) {
            if (letter === hiddenWord[x]) {
                secretWord = secretWord.substring(0, x) + letter + secretWord.substring(x + 1);
                correctGuess = true;
            }
        }

        if (!correctGuess) {
            totalGuesses++;
            guessesLeft--;
            if (guessesLeft <= 0) {
                gameOver = true;
            }
        }

        update_word();

        if (secretWord.indexOf('*') === -1) {
            gameOver = true;
        }
    }
});