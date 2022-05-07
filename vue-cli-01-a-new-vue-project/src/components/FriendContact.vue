<template>
   <li>
       <h2>{{ name }}</h2>
       <button>Show Details</button>
       <ul>
           <li><strong>Phone:</strong> {{ friend.phone }} </li>
           <li><strong>Email: </strong> {{ friend.email }} </li>
           <li><strong>
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
