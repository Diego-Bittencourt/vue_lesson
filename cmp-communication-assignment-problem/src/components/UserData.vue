<template>
    <div>
        <form @submit.prevent="userLogin" class="wrapper">
        <label> Name:
            <input type="text" v-model="this.loggedUser" required>
        </label>
        <label> Age:
            <input type="number" v-model="loggedAge" required>
        </label>
        <button type="submit" class="inputbtn">
            Log in
        </button>
        </form>
     </div>
</template>

<script>
export default {
    // data  () {
    //     return {
    //         loggedUser: "",
    //         loggedAge: ""
    //     }
    // },
    methods: {
        userLogin() {
            let userId = this.loggedUser + this.loggedAge + Math.floor(Math.random() * 1000);
            this.$emit("LogUser", userId, this.loggedUser, this.loggedAge);
            
        }
    }
}
</script>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    
}
label, input {
    margin: 10px 20px;
    display: block;
    width: 70%;
    text-align: center;
}


.inputbtn {
    align-self: auto;
}
</style>