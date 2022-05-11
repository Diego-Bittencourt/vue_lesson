<template>
    <active-user 
    v-for="user in loghistory"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    :age="user.age"> {{ user }}
    </active-user>  
    <user-data @logUser="userLogged"> 
    </user-data>
</template>

<script>

export default {
    data() {
     return {
         loghistory: []
     }  
    },
    methods: {
        userLogged(userId, user, age) {
            const newUser = {
                id: userId,
                name: user,
                age: age
            };
            this.loghistory.unshift(newUser);
        }
    }
};
</script>
