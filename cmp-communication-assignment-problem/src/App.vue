<template>
<div  class="outwrapper">
    <div v-if="this.loghistory.length" class="activeuserwrapper inneritem">
        <active-user 
    v-for="(user, index) in loghistory"
    :index="index"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    :age="user.age"> {{ index }} - {{ user }}
    </active-user> 
    </div> 
    <user-data
    class="inneritem"
    @logUser="userLogged"> 
    </user-data>
    </div>
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

<style>
.outwrapper {
    display: flex;
    width: 80vw;
    min-height: 200px; 
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 10px;
    margin: 0 auto;
}

.inneritem {
    /* flex: 1 1 150px; */
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}

</style>