const app = Vue.createApp({
    data() {
        return {
            valueCalc: 0, 
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
        incrementValue(num) {
            this.valueCalc = this.valueCalc + num;
        }          
    },
    watch: {
        displayOutput() {
            console.log("working");
            const that = this;
           setTimeout(() => {
                that.valueCalc = 0;                
            }, 5000);
            
          }
    }
});

app.mount("#assignment");