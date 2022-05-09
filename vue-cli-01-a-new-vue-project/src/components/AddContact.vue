<template>
    <form>
        <label><h1> Add New Contact</h1></label>
        <button type="button" @click="toggleInput">Add New Contact</button>
        <div v-if="inputIsVisible">
            Name: <input type="text" v-model="this.friend.name"> <br> 
            Phone Number: <input type="text" v-model="this.friend.phone"> <br> 
            Email: <input type="text" v-model="this.friend.email"> <br> {{ friend }}
            Favorite? <input type="text" v-model="this.favorite">
            <button type="button" @click="sendContact">Create Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            inputIsVisible: true,
            friend: {
                id: "",
                name: "",
                phone: "",
                email: "",
                favorite: false
            }
        }
    },
    methods: {
        toggleInput() {
            this.inputIsVisible = !this.inputIsVisible;
        },
        sendContact() {
            let id = this.friend.name.split(" ")[0];
            this.friend.id = id.toLowerCase();
            this.$emit('create-contact', this.friend);
        }
    }
}
</script>
