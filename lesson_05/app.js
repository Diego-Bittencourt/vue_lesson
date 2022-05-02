const app = Vue.createApp({
    data() {
        return {
            toDos: [],
            userInput: "",
            listVisible: true
        }
    },
    methods: {
        addToDo() {
            if (this.userInput !== "") {
                this.toDos.push(this.userInput);
                this.userInput = "";
            }
        },
        toggleVisibility() {
            this.listVisible = !this.listVisible;
        },
        removeItem(idx) {
            this.toDos.splice(idx, 1);
        }  
    }
});

app.mount("#assignment");

// Steps:
// 01 - Created the Vue.app;
// 02 - Created the data properties to hold the goal arrays and the user's input.
// 03 - Create the button click and enter event listener and assigned them to the addToDo method.
// 04 - Created an if statement to manage invalid input from the user (empty string or one whitespace).
        // It might a good idea to use regex to manage that.
// 05 - Created a method to toggle visibility. The method is activated by the click in the button and 
        // change the listVisibile data property.
// 06 - I created a new <p> element using v-else as a placeholder to keep the list organized.
// 07 - I implemented the click to remove the item from the list. It works.gi stat