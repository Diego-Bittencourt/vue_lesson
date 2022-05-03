function getRandomValue (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            playRound: 0
        }
    },
    computed: {
        monsterHealthBar() {
            return { width: this.monsterHealth + "%" };
        },
        playerHealthBar() {
            return { width: this.playerHealth + "%" }
        },
        specialAvailable() {
            return this.playRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            let attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.playRound++;
            },
        attackPlayer() {
            let attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            },
        specialAttack() {
            let attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.playRound++;
        }
    }

});

app.mount("#game");


// Steps
// 01 - Create the Vue app and the data property with two items: The monster's health and the player's health.
// 02 - Create a vanillaJS function outside Vue to create a random number inside a range. This can be done
//      as long as the function isn't send to the html.
// 03 - Create two methods to perform the attack functionality. The attackMonster (performed by the player) refers to 
//      the attackPlayer (performed by the monster) inside the method.
// 04 - Create the click listener the computed data that changes the inline style element to reduce the healthbars.
//      In this scenario, creating a inline style command is ideal because ir too troublesome to create class to every
//      health bar lenght possible.