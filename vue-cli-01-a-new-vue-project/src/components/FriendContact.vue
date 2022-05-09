<template>
   <li>
       <h2>{{ name }}<span v-if="isFavorite">(Favorite)</span></h2>
       <button @click="toggleFavorite">Favorite</button>
           <br>
           <br>
       <button @click="detailsVisible"> {{ toggleDetails? "Hide" : "Show" }} Details</button>
       
       <ul v-if="toggleDetails">
           <li><strong>Phone:</strong> {{ phoneNumber }} </li>
           <li><strong>Email: </strong> {{ emailAddress }} </li>
        </ul>
    </li> 
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true

        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }

    },
    // emits: ['toggle-favorite'];
    // the emits property isn't mandatory, but it documents all the emits your component has.
    // It's good for own documentation as well as other team members.
    emits: {
        'toggle-favorite': function(id) {
            if(id) {
                return true;
            } else {
                console.log("Id is missing.");
                return false
            }
        }
    },
    data() {
        return {
            toggleDetails: false            
        }
    },
    methods: {
        detailsVisible() {
            this.toggleDetails = !this.toggleDetails;
        },
        toggleFavorite() {
            this.$emit('toggle-favorite', this.id);
            //to send a message from the component to the parent, we can use the this.$emit() build-in function.
            // the this.$emit() function receives many arguments with the name of the event (your choice, kebab-case)
            // being the first argument and every extra argument is data that will be passed to the method in the
            // parent App.
            // This event can be listened in the parent app by binding with v-on (or @). In this case:
            // @toggle-favorite
            // then, the v-on can trigger a method that do the thing.
        }
    }
};
</script>
