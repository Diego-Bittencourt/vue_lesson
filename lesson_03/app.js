const app = Vue.createApp({
    data() {
        return {
            valueCalc: 0, 
            output_test: ""
        }
    },
    computed: {
        displayOutput() {
            if (this.valueCalc < 37) {
                return "Not there yet.";
            } else if (this.valueCalc > 37) {
                return "Too much!";
            } else {
                return this.valueCalc;
            }
        }
    },
    methods: {
        increaseFive() {
            this.valueCalc = this.valueCalc + 5;
        },
        increaseOne() {
            this.valueCalc++;
        },
               
    },
    watch: {
        displayOutput() {
            console.log("working");
            const that = this;
            setTimeout(() => {that.valueCalc = 0}, 5000);
          
        }
    }
});

app.mount("#assignment");