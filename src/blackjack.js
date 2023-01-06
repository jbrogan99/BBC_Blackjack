import { deck } from "./deck.js";
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
