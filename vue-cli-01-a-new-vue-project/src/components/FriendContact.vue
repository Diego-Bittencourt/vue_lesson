<template>
   <li>
       <h2>{{ name }}<span v-if="friendIsFavorite">(Favorite)</span></h2>
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
    data() {
        return {
            toggleDetails: false,
            friendIsFavorite: true
            
        }
    },
    methods: {
        detailsVisible() {
            this.toggleDetails = !this.toggleDetails;
        },
        toggleFavorite() {
            this.friendIsFavorite = !this.friendIsFavorite;
        }
    }
};
</script>
