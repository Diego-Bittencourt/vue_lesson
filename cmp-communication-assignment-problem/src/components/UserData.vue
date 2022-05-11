<template>
    <div class="wrapper">
        <form @submit.prevent="userLogin">
        <label> Name:
            <input type="text" v-model="this.loggedUser" required>
        </label>
        <label> Age:
            <input type="number" v-model="loggedAge" required>
        </label>
        <button type="submit">
            Log in
        </button>
        </form>
        <p>{{ loggedUser }}</p>
        <p> {{loggedAge }} </p>
    </div>
</template>

<script>
export default {
    data  () {
        return {
            loggedUser: "",
            loggedAge: ""
        }
    },
    methods: {
        userLogin() {
            this.$emit("LogUser", this.loggedUser, this.loggedAge);
        }
    }
}
</script>
