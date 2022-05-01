const app = Vue.createApp({
    data() {
        return {
            hideParagraph: false,
            showParagraph: true,
            userClass: "",
            bckgroundColor: ""
        }
    },
    computed: {
        paragraphClasses() {
            return {
                hidden: this.hideParagraph,
                visible: this.showParagraph,
                
            }
        }
    },
    methods: {
        toggleVisible() {
            if(this.hideParagraph != this.showParagraph) {
                this.hideParagraph = !this.hideParagraph;
                this.showParagraph = !this.showParagraph;
            } else {
                alert("Error in the toggle paragraph!");
            }

        }
    }

});

app.mount("#assignment")