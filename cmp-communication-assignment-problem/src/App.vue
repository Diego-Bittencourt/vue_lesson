<template>
    <active-user> 
    </active-user>  
    <user-data @logUser="userLogged"> 
    </user-data>
    <p>{{loghistory}}</p>

<h1> {{ test }} </h1>
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
