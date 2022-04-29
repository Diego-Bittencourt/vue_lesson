const app = Vue.createApp({
    data() {
        return {
            valueCalc: 0,
            displayValue: ""
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
                this.displayValue = "Not there yet.";
            } else if (this.valueCalc > 37) {
                this.displayValue = "Too much!";
            } else {
                this.displayValue = valueCalc;
            }
    
        }
    }
});

app.mount("#assignment");