<template>
   <li>
       <h2>{{ name }}</h2>
       <button @click="detailsVisible"> {{ toggleDetails? "Hide" : "Show" }} Details</button>
       <ul v-if="this.toggleDetails">
           <li><strong>Phone:</strong> {{ phoneNumber }} </li>
           <li><strong>Email: </strong> {{ emailAddress }} </li>
        </ul>
    </li> 
</template>

<script>
export default {
    props: [
        "name",
        "phoneNumber",
        "emailAddress"
    ],
    data() {
        return {
            toggleDetails: false
            
        }
    },
    methods: {
        detailsVisible() {
            this.toggleDetails = !this.toggleDetails;
        }
    }
};
</script>
