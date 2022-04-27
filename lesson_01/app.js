const app = Vue.createApp({
    data() {
        return {
        Name: "Diego",
        Age: 36,
        Link: "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/9/4/e/4/94e433db2d4f10372c5c057df199871b.jpg"
        };
    },
    methods: {
        agePlusFive() {
            return this.Age + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});
app.mount("#assignment");
