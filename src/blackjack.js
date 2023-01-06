const deck = {
  aceHeart: [1, 11],
  aceDiam: [1, 11],
  aceSpade: [1, 11],
  aceClub: [1, 11],
  kingHeart: [10],
  kingHDiam: [10],
  kingSpade: [10],
  kingClub: [10],
  queenHeart: [10],
  queenDiam: [10],
  queenSpade: [10],
  queenClub: [10],
  jackHeart: [10],
  jackDiam: [10],
  jackSpade: [10],
  jackClub: [10],
  tenHeart: [10],
  tenDiam: [10],
  tenSpade: [10],
  tenClub: [10],
  nineHeart: [9],
  nineDiam: [9],
  nineSpade: [9],
  nineClub: [9],
  eightHeart: [8],
  eightDiam: [8],
  eightSpade: [8],
  eightClub: [8],
  sevenHeart: [7],
  sevenDiam: [7],
  sevenSpade: [7],
  sevenClub: [7],
  sixHeart: [6],
  sixDiam: [6],
  sixSpade: [6],
  sixClub: [6],
  fiveHeart: [5],
  fiveDiam: [5],
  fiveSpade: [5],
  fiveClub: [5],
  fourHeart: [4],
  fourDiam: [4],
  fourSpade: [4],
  fourClub: [4],
  threeHeart: [3],
  threeDiam: [3],
  threeSpade: [3],
  threeClub: [3],
  twoHeart: [2],
  twoDiam: [2],
  twoSpade: [2],
  twoClub: [2],
};

const dealCard = (currentHand) => {
  const cardsKeyValues = Object.entries(deck);

  const randomCard =
    cardsKeyValues[Math.floor(Math.random() * cardsKeyValues.length)];

  const nameOfCard = randomCard[0];
  const valueOfCard = randomCard[1];

  const newCard = {
    card: nameOfCard,
    values: valueOfCard,
  };

  currentHand.hand.push(newCard);

  const score = calculateBestScore(currentHand.hand);
  currentHand.score = score;
  delete deck[nameOfCard];
};

export const dealHand = (currentHand) => {
  let count = 0;
  while (count < 2) {
    dealCard(currentHand);
    count++;
  }
  return currentHand;
};

export const hit = (currentHand) => {
  dealCard(currentHand);
  return currentHand;
};

export const stand = (currentHand) => {
  return currentHand;
};

export const validHand = (currentHand) => {
  const score = currentHand.score;
  if (score <= 21) {
    return true;
  }
};

export const invalidHand = (currentHand) => {
  const score = currentHand.score;
  if (score >= 22) {
    return false;
  }
};

export const calculateBestScore = (hand) => {
  const score = hand.reduce((acc, current) => {
    const highestValue = Math.max(...current.values);
    const lowestValue = Math.min(...current.values);
    if (highestValue + acc <= 21) {
      return acc + highestValue;
    }
    return acc + lowestValue;
  }, 0);

  return score;
};
