import { dealHand } from "../src/blackjack.js";

describe("In blackjack", () => {
  test("I am dealt my opening hand, I should have two cards", () => {
    expect(Object.entries(dealHand())).toHaveLength(2);
  });
});
