export const getLocalCards = function() {
    const cardsData = JSON.parse(localStorage.getItem("cardsData"));
    if (Array.isArray(cardsData)) return cardsData;
    return [];
}