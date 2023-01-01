export const dealHand = () => {
  let cards = {
    kingHeart: 10,
    queenHeart: 10,
    eightHeart: 8,
    nineHeart: 9,
  };

  const cardsKeyValues = Object.entries(cards);
  let twoCards = [];
  let count = 0;
  while (count < 2) {
    let randomCard =
      cardsKeyValues[Math.floor(Math.random() * cardsKeyValues.length)];
    twoCards.push(randomCard);
    count++;
  }
  return twoCards;
};
