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
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props:['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: []
    };
  },
  methods: {
    loadTeamMembers(teamId) {
    //const teamId = route.params.teamId; 
    const selectedTeam = this.teams.find(team => team.id === teamId)
    const members = selectedTeam.members;
    const selectedMembers = [];
    for (const member of members) {
      const selectedUsers = this.users.find(user => user.id === member);
      selectedMembers.push(selectedUsers);
    }
    this.members = selectedMembers;
    this.teamName = selectedTeam.name;
    
    }
  },
  created() {
    this.loadTeamMembers(this.teamId)
    // this.loadTeamMembers(this.$route); this way is not optimal.
    // this is the hook that gets activated when the page is created.
    // The $route is available in this component because this component is created through the router.
    // this.$route.path // /teams/t1
    //this params takes all the parameters that were used to get to this page.
    // I can use console.log(this.$route) to see all data available in this $route
    // For better design, I'll move the function that was here to a method.
    
  },
  // beforeRouteUpdate(to, from, next) {
  //   // The beforeRouteUpdate can be used by a component which is reused t=with different data to evaluate, deny or accept
  //   // the new data.
       // it can be used to call a method to grab new data and reloads the component. In this app,there is already 
       // code to handle that, so it is not necessary. But it is an alternative.
  // },
  watch: {
    teamId(newId) {
    // $route(newRoute) {
      this.loadTeamMembers(newId);
    }
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