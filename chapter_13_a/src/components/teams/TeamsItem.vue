<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="teamMembersLink">View Members</router-link>
    <!-- <router-link :to="'/teams/' + id">View Members</router-link> -->
    <!-- I can bind the to="" property to a value received by props and glue it using normal JS code.
    I'll outsource it to a computed property.  -->
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id;
      // each router can have a name that can be invoked in the code.
      // in the case below, the router is using dynamic url, so it needs the params object with a
      // pair that the router needs to receive, in this case, the binded parameters to the props.
      // Also, I can change the path in the main.js without changeing all the routers in the code.
      return {
        name: 'team-members',
        params: {
          teamId: this.id,
        },
        query: {
          // the query parameters are passed through url and are optional.
          // query parameters are accessed by $router, so they're not available as props.
          sort: 'asc', 
        },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
