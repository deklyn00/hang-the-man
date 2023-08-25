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
console.log(get_secret_word());