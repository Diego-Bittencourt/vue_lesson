<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  {{ changesSaved }}
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // do something
      // to navigate away without links.
      // Since Im using the router, I have this property
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
      console.log('aeeeee');
    },
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    if (this.changesSaved) {
      return next();
    } else {
      const userWantsToLeave =  confirm("There is unsaved data. Do you still want to leave");
      next(userWantsToLeave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
