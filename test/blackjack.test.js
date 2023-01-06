import {
  dealHand,
  hit,
  calculateBestScore,
  validHand,
  invalidHand,
  stand,
} from "../src/blackjack.js";

describe("In blackjack", () => {
  test("I am dealt my opening hand, I should have two cards", () => {
    const currentHand = {
      hand: [],
      score: 0,
    };

    const handAndScore = dealHand(currentHand);
    expect(handAndScore.hand).toHaveLength(2);
  });

  test("When I choose hit, then I receive another card and my score is updated", () => {
    const currentHand = {
      hand: [
        {
          card: "kingHeart",
          values: [10],
        },
        {
          card: "queenHeart",
          values: [10],
        },
      ],
      score: 0,
    };

    const newHand = hit(currentHand);
    const valueOfCardAdded = newHand.hand[2].values;

    expect(newHand.hand).toHaveLength(3);
    if (valueOfCardAdded.length > 1) {
      expect(newHand.score === 21 || newHand.score === 31).toBe(true);
    } else {
      expect(newHand.score).toEqual(valueOfCardAdded[0] + 20);
    }
  });
  test("When I have a valid hand of cards, when I choose stand no further cards are given and my score is evaluated", () => {
    const currentHand = {
      hand: [
        {
          card: "kingHeart",
          values: [10],
        },
        {
          card: "queenHeart",
          values: [10],
        },
      ],
      score: 20,
    };
    expect(stand(currentHand)).toEqual(currentHand);
  });
  test("When I have a king and an ace, my score is 21", () => {
    const hand = [
      {
        card: "kingHeart",
        values: [10],
      },
      {
        card: "aceHeart",
        values: [11],
      },
    ];
    expect(calculateBestScore(hand)).toEqual(21);
  });
  test("Given my hand is 21 or less, then I have a valid hand", () => {
    const currentHand = {
      hand: [
        {
          card: "kingHeart",
          values: [10],
        },
        {
          card: "queenHeart",
          values: [10],
        },
      ],
      score: 20,
    };
    expect(validHand(currentHand)).toBe(true);
  });
  test("Given my hand is 22 or more, then I have an invalid hand", () => {
    const currentHand = {
      hand: [
        {
          card: "kingHeart",
          values: [10],
        },
        {
          card: "queenHeart",
          values: [10],
        },
        {
          card: "eightHeart",
          values: [8],
        },
      ],
      score: 28,
    };
    expect(invalidHand(currentHand)).toBe(false);
  });
  test("Given I have a king, a queen, and an ace.  When my score is evaluated.Then my score is 21", () => {
    const hand = [
      {
        card: "kingHeart",
        values: [10],
      },
      {
        card: "queenHeart",
        values: [10],
      },
      {
        card: "aceHeart",
        values: [1, 11],
      },
    ];
    expect(calculateBestScore(hand)).toEqual(21);
  });
  test("Given I have a nine, an ace, and another ace. When my score is evaluated. Then my score is 21", () => {
    const hand = [
      {
        card: "nineHeart",
        values: [9],
      },
      {
        card: "aceHeart",
        values: [1, 11],
      },
      {
        card: "aceClub",
        values: [1, 11],
      },
    ];

    expect(calculateBestScore(hand)).toEqual(21);
  });
});
