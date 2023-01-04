const dealHand = () => {
  let cards = {
    kingHeart: 10,
    queenHeart: 10,
    eightHeart: 8,
    nineHeart: 9,
  };

  const cardsKeyValues = Object.entries(cards);
  let handScore = {};
  let twoCards = [];
  let count = 0;
  while (count < 2) {
    // choose random card
    let randomCard =
      cardsKeyValues[Math.floor(Math.random() * cardsKeyValues.length)];

    // get name of card
    let nameOfCard = randomCard[0];
    // return card if matches with current card in deck
    const duplicateCards = twoCards.filter((cardsInDeck, index) => {
      return cardsInDeck[0] === nameOfCard;
    });
    // checks if duplicate card is true
    if (duplicateCards.length === 0) {
      count++;
      twoCards.push(randomCard);
    }
  }
  //convert array into array of objects, easier to work with
  let hand = twoCards.map((el) => {
    return {
      name: el[0],
      value: el[1],
    };
  });
  handScore["hand"] = hand;
  console.log(handScore);

  // data structure example
  // {
  //   hand: [
  //     {
  //       name: '5hearts',
  //       value: 5
  //     },
  //     {
  //       name: '5hearts',
  //       value: 5
  //     }
  //   ],
  //   score: 10
  // }
};

dealHand();
