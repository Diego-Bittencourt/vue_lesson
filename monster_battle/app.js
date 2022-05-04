function getRandomValue (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            playRound: 0,
            winner: null,
            battleLog: []
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth <= 0) {
                return {width: "0%"}
            }
            return { width: this.monsterHealth + "%" };
        },
        playerHealthBar() {
            if (this.playerHealth <= 0) {
                return {width: "0%"}
            }
            return { width: this.playerHealth + "%" }
        },
        specialAvailable() {
            return this.playRound % 3 !== 0;
        },
        healAvailable() {
            return this.playRound % 2 != 0;
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "monster";
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = "draw";
            } else if (value <= 0) {
                this.winner = "player";
            }
        }
    },
    methods: {
        attackMonster() {
            let attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.playRound++;
            this.battleLog.unshift("You deal " + attackValue + " damage to the Monster!")
            },
        attackPlayer() {
            let attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.battleLog.unshift("The Monster inflicted " + attackValue + " damage.")
            },
        specialAttack() {
            let attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            this.playRound++;
            this.battleLog.unshift("Your special attack hits and the Monster loses " + attackValue + " hitpoints!")
        },
        healPlayer() {
            this.playRound++;
            let healValue = getRandomValue(7, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.battleLog.unshift("You healed " + healValue + " hitpoints.")
        },
        resetGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.playRound = 0;
            this.winner = null;
            this.battleLog = [];
        },
        surrender() {
            this.winner = "monster";
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
// 05 - Create the special attack button. The special attack button has a bigger damage number, but can only be used every three 
//      rounds. To keep track of rounds, I created a data property and every attack button adds to the round data property.
// 06 - Create the heal button. The heal has an if statement to be sure the total HP and the heal amount don't exceed 100.
//      Used an if statement for that. After, the heal method triggers the monster attack and the round count. I created a
//      track to only use the heal ability every other round. I use the round tracker and the % operator.
// 07 - Time to implement a game over window. Create two watcher to watch the player health and the monster health. 
// 08 - Create a data property to hold the winner. The winner property is set to null initially because I'll use a
//      v-if to triger the game over screen, therefore using null is a falsy value which doesn't trigger the v-if.
// 09 - Implement the zero health bar. Just adding an if statement to the computed properties. The health number can be zero, 
//      but the health bar can't.
// 10 - The game over screen should remove the game buttons. So it can be achieved with an v-else statemente since these
//      two sections are direct neighbours.
// 11 - Adding a button to reset the game that triggers a methods that resets the value of health, round counter and winner.
// 12 - Added the surrender functionality by triggering a methods that sets the winner to monster.
// 13 - I implemented the battle log by creating an empty array and a unshift method to every methods. Each methods triggered
//      unshifts a hardcoded sentence to the battle log array and the array is rendered on the html by v-for.

