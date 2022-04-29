const app = Vue.createApp({
    data() {
        return {
            valueCalc: 0,
        }
    },
    methods: {
        increaseFive() {
            this.valueCalc = this.valueCalc + 5;
        },
        increaseOne() {
            this.valueCalc++;
        },
        displayOutput() {
            if (this.valueCalc < 37) {
                return "Not there yet.";
            } else if (this.valueCalc > 37) {
                return "Too much!";
            } else {
                return this.valueCalc;
            }
    
        }
    }
});

app.mount("#assignment");