import { dealHand, hit } from "../src/blackjack.js";

let handAndScore = dealHand();

describe("In blackjack", () => {
  test("I am dealt my opening hand, I should have two cards", () => {
    expect(handAndScore.hand).toHaveLength(2);
  });

  test("When I choose hit, then I receive another card and my score is updated", () => {});
});
