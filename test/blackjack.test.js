import {
  dealHand,
  hit,
  calculateScore,
  validHand,
  invalidHand,
  stand,
} from "../src/blackjack.js";

describe("In blackjack", () => {
  test("I am dealt my opening hand, I should have two cards", () => {
    let currentHand = {
      hand: [],
      score: 0,
    };

    let handAndScore = dealHand(currentHand);
    expect(handAndScore.hand).toHaveLength(2);
  });

  test("When I choose hit, then I receive another card and my score is updated", () => {
    let currentHand = {
      hand: [
        ["aceHeart", 11],
        ["kingHeart", 10],
      ],
      score: 0,
    };
    let newHand = hit(currentHand);
    let newScore = newHand.hand.reduce((acc, curr) => acc + curr[1], 0);
    expect(newHand.hand).toHaveLength(3);
    expect(newHand.score).toEqual(newScore);
  });
  test("When I have a valid hand of cards, when I choose stand no further cards are given and my score is evaluated", () => {
    let currentHand = {
      hand: [
        ["aceHeart", 11],
        ["kingHeart", 10],
      ],
      score: 21,
    };
    expect(stand(currentHand)).toEqual(currentHand);
  });
  test("When I have a king and an ace, my score is 21", () => {
    const hand = [
      ["aceHeart", 11],
      ["kingHeart", 10],
    ];
    expect(calculateScore(hand)).toEqual(21);
  });
  test("Given my hand is 21 or less, then I have a valid hand", () => {
    const currentHand = {
      hand: [
        ["aceHeart", 11],
        ["kingHeart", 10],
      ],
      score: 21,
    };
    expect(validHand(currentHand)).toBe(true);
  });
  test("Given my hand is 22 or more, then I have an invalid hand", () => {
    const currentHand = {
      hand: [
        ["aceHeart", 11],
        ["kingHeart", 10],
        ["queenHeart", 10],
      ],
      score: 31,
    };
    expect(invalidHand(currentHand)).toBe(false);
  });
  test("Given I have a king, a queen, and an ace.  When my score is evaluated.Then my score is 21", () => {
    const hand = [
      ["aceHeart", 1],
      ["kingHeart", 10],
      ["queenHeart", 10],
    ];
    expect(calculateScore(hand)).toEqual(21);
  });
  test("Given I have a nine, an ace, and another ace. When my score is evaluated.Then my score is 21", () => {
    const hand = [
      ["aceHearts", 11],
      ["aceClubs", 1],
      ["nineHeart", 9],
    ];
    expect(calculateScore(hand)).toEqual(21);
  });
});
