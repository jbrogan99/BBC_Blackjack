// data structure example
// {
//   hand: [ '5hearts', 5],  ['5clubs',  5],
//   score: 10
// }

const deck = {
  kingHeart: 10,
  queenHeart: 10,
  eightHeart: 8,
  nineHeart: 9,
};

let currentHand = {
  hand: [],
  score: 0,
};

const dealCard = (card) => {
  const cardsKeyValues = Object.entries(deck);

  let randomCard =
    cardsKeyValues[Math.floor(Math.random() * cardsKeyValues.length)];

  card.hand.push(randomCard);

  let score = card.hand.reduce((acc, curr) => acc + curr[1], 0);
  card.score = score;

  let nameOfCard = randomCard[0];
  delete deck[nameOfCard];
};

const dealHand = (card) => {
  let count = 0;
  while (count < 2) {
    dealCard(card);
    count++;
  }
  return currentHand;
};

const hit = (card) => {
  dealCard(card);
  return currentHand;
};

const stand = (hand) => {
  return hand;
};

const validHand = (hand) => {
  const score = hand.score;
  if (score <= 21) {
    return currentHand;
  }
};

dealHand(currentHand);
console.log("valid", validHand(currentHand));

// hit(currentHand);
// console.log("hand", stand(currentHand));
