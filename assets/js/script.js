document.addEventListener("DOMContentLoaded", function () {
    random_word();
    get_hidden_word();
    get_secret_word();
    update_word();
    let guessesLeft = 10;
    let totalGuesses = 0;
});
/*Getting the Random word from our array*/
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
/*Getting the hidden word*/
function get_hidden_word() {
    const hiddenWord= random_word();
    return hiddenWord;

}
/*creating the secret word from the hidden word*/
function get_secret_word() {
    let secretWord='';
    const newWord= hiddenWord;
    for (let i=0; i < newWord.length; i++) {
        if (newWord[i] == ' '){
            secretWord += ' '
        } else {
            secretWord +='*';}
    }
    return secretWord;    
}
/*Word user is guessing*/
const hiddenWord = get_hidden_word();
/*Word user sees*/
const secretWord = get_secret_word();
/*displaying the secret word in the label*/
function update_word() {
let seenWord = document.getElementById('hidden_word');
seenWord.textContent=secretWord;
}
/*Code to register which letter the user is guessing*/
    // Select all buttons
    const buttons = document.querySelectorAll('.guess_buttons button');

    /** Add click event listeners to buttons*/
    function guessed_letter() {
        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const letter = button.textContent;
                let seenLetter = document.getElementById('hidden_word');
                return letter;
            });
        });
    }