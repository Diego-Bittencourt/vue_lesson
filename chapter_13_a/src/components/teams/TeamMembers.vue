<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  created() {
    //this is the hook that gets activated when the page is created.
    // The $route is available in this component because this component is created through the router.
    //this.$route.path // /teams/t1
    const teamId = this.$route.params.teamId; 
    const selectedTeam = this.teams.find(team => team.id === teamId)
    const members = selectedTeam.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUsers = this.users.find(user => user.id === member);
      selectedMembers.push(selectedUsers);
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
      //this params takes all the parameters that were used to get to this page.
    // I can use console.log(this.$route) to see all data available in this $route
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>