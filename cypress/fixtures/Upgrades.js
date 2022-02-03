import Cookie from "./Cookie";

export default class BasicUpgrades {
    checkForUpgrades(score) {
        for(let i = 6; i >= 0; i--) {
            let itemName = `productPrice${i}`;
            cy.get(`span[id=${itemName}]`, { timeout: 1000 }).then((item) => {
                let itemText = item.text().split(' ');
                let number = this.stringWithCommaToInt(itemText[0]);
                let multiplier = this.multiplierWordToNumber(itemText[1]);
                let cost = number * multiplier;
                if (cost < score) {
                    item.click()
                }
            })
        }
        let cookie = new Cookie();
        cookie.startGame();
    }

    stringWithCommaToInt(numberComma) {
        let answer = '';
        let temp = numberComma.split(',');
        for (let i = 0; i<numberComma.length; i++) {
            answer += String(temp[i]);
        }
        return parseInt(answer);
    }

    multiplierWordToNumber(multiplier) {
        switch (multiplier) {
            case 'million':
                return 1000000;
            case 'billion':
                return 1000000000;
            default:
                return 1;
        }
    }
}

/*
"310 quadrillion"
1: "26 quadrillion"
2: "2.1 quadrillion"
3: "170 trillion"
4: "14 trillion"
5: "1 trillion"
6: "75 billion"
7: "5.1 billion"
8: "330 million"
9: "20 million"
10: "1.4 million"
11: "130,000"
12: "12,000"
13: "1,100"
14: "100"
15: "15"
length: 16
[[Prototype]]: Array(0)

*/