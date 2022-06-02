<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
   computed: {
      isAuth() {
          return this.$store.getters.userIsAuthenticated;
      }
    },
  methods: {
    addOne() {
      // this.$store.commit('increase', {value: 10});
      //You can pass extra data through the second argument to the mutations.
      //The mutations can be accessed using the $store.commit() function.
      //There is also an alternative syntax where you pass an object to the commit()
      //When doing that, you must pass an object with a type property in which you pass the
      //mutation name as a string.
      //Passing an object, you can pass as many data as you want.
      this.$store.dispatch({
        //dispatch triggers action, not mutations.
        type: 'increase',
        value: 10
      })
    },
  },
};
//VERY IMPORTANT: Never change the state from inside your components. This is a BAD PRACTICE.
//Instead, change the state by using mutations.
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
