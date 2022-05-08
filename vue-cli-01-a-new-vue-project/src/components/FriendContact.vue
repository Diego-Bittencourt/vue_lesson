<template>
   <li>
       <h2>{{ friend.name }}</h2>
       <button @click="detailsVisible"> {{ toggleDetails? "Hide" : "Show" }} Details</button>
       <ul v-if="this.toggleDetails">
           <li><strong>Phone:</strong> {{ friend.phone }} </li>
           <li><strong>Email: </strong> {{ friend.email }} </li>
        </ul>
    </li> 
</template>

<script>
export default {
    data() {
        return {
            toggleDetails: false,
            friend: {
                id: "manuel",
                name: "Manuel Lorenz",
                email: "manuel@localhost.com",
                phone: '0123 45678 90',
            }
        }
    },
    methods: {
        detailsVisible() {
            this.toggleDetails = !this.toggleDetails;
        }
    }
};
</script>
