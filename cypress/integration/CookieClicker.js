/// <reference types="cypress" />

import Cookie from "../fixtures/Cookie";

describe("test cookie website", () => {
  const cookie = new Cookie();

  beforeEach(() => {
    cy.visit("https://orteil.dashnet.org/cookieclicker/");
    cy.viewport(1500, 1000);
  });

  it("automate the game", () => {
    setTimeout(() => cookie.startGame(), 5000);
  });
});
