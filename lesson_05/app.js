const app = Vue.createApp({
    data() {
        return {
            toDos: [],
            userInput: ""
        }
    },
    methods: {
        addToDo() {
            this.toDos.push(this.userInput);
            this.userInput = "";
        }
    }
});

app.mount("#assignment");

// Steps:
// 01 - Created the Vue.app;
// 02 - Created the data properties to hold the goal arrays and the user's input.
// 03 - Create the button click and enter event listener and assigned them to the addToDo method.