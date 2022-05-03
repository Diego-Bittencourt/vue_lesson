function getRandomValue (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100
        }
    },
    computed: {
        monsterHealthBar() {
            return { width: this.monsterHealth + "%" };
        },
        playerHealthBar() {
            return { width: this.playerHealth + "%" }
        }
    },
    methods: {
        attackMonster() {
            let attackValue = getRandomValue(12, 5);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
            },
        attackPlayer() {
            let attackValue = getRandomValue(15, 8);
            this.playerHealth -= attackValue;
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