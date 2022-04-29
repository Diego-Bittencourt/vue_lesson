const app = Vue.createApp({
    data() {
        return {
            message: "I'm learning and I'll change careers into tech!",
            output: "",
            output2: ""
        }
    },
    methods: {
        alertMessage() {
            alert(this.message);
        },
        showOutput(e) {
            this.output = e.target.value
        },
        showOutput2(e) {
            this.output2 = e.target.value
        }
    }
});

app.mount("#assignment");