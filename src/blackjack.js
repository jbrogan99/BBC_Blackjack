// data structure example
// {
//   hand: [ '5hearts', 5],  ['5clubs',  5],
//   score: 10
// }

const deck = {
  kingHeart: 10,
  aceHeart: 11 || 1,
  queenHeart: 10,
  eightHeart: 8,
  nineHeart: 9,
};

const dealCard = (currentHand) => {
  const cardsKeyValues = Object.entries(deck);

  let randomCard =
    cardsKeyValues[Math.floor(Math.random() * cardsKeyValues.length)];

  currentHand.hand.push(randomCard);

  let score = calculateScore(currentHand.hand);
  currentHand.score = score;

  let nameOfCard = randomCard[0];
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
  console.log(currentHand);
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

export const calculateScore = (hand) =>
  hand.reduce((acc, curr) => acc + curr[1], 0);

// dealHand(currentHand);
// console.log("valid", validHand(currentHand));

// console.log("king ace", KingAce(currentHand));

// hit(currentHand);
// console.log("hand", stand(currentHand));
