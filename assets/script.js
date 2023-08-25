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
function get_secret_word() {
    const secretWord='';
    var newWord= random_word();
    for (let i=0; i < newWord.length; i++) {
        if (newWord[i] == ' '){
            secretWord = secretWord +' ';
        } else {
            secretWord = secretWord + '*';}
    }
}
console.log(random_word());
console.log(get_secret_word());