<template>
    <ul>
        <transition-group tag="ul" name="user-list">
        <li 
        v-for="user in users" 
        :key="user"
        @click="removeUser(user)"
        >{{ user }}</li>
        </transition-group>
        <!-- this tag is made to work with multiple items.
        transition-group will render to them DOM, unlike the simple transition
        Giving it a tag, makes the transition-group replace the item in the tag. -->
    </ul>
    <div>
        <input type="text" ref="userNameInput"/>
        <button @click="addUser">Add User</button>
        </div>
          
</template>
        
        

<script>
export default {
    data() {
        return {
            users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael']
        }
        
    },
    methods: {
        removeUser(user) {
            this.users= this.users.filter(usr => usr !== user);
        },
        addUser() {
            const enteredUserName = this.$refs.userNameInput.value;
            this.users.unshift(enteredUserName);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}

li {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}

li:hover {
    cursor: default;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-enter-active {
    transition: all 1s ease-out;
}


.user-enter-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}

.user-list-leave-active {
    transition: all 1s ease-in;
}

.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>