import BasicUpgrades from '../fixtures/Upgrades'

export default class Cookie {
    clickCookie() {
        const bigCookie = cy.xpath("//div[@id='bigCookie']");
        for (let index = 0; index < 600; index++) {
          bigCookie.click()
          bigCookie.click()
        }
    }

    getCookieScore() {
      const upgrades = new BasicUpgrades();
      cy.get(`div[id=${'cookies'}]`, { timeout: 1000 }).then((item) => {
        let score = item.text().split(' ')[0];
        upgrades.checkForUpgrades(score);
      })
    }

    startGame() {
      this.clickCookie();
      this.getCookieScore();
    }
}