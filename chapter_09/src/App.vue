<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <keep-alive>
    <component :is="selectedComponent" />
    </keep-alive>
    <button @click="toggleComponent('active-goals')">Active Goals</button>
    <button @click="toggleComponent('manage-goals')">Manage Goals</button>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';
export default {
  components: {
  TheHeader,
  BadgeList,
  UserInfo,
  ActiveGoals,
  ManageGoals
},
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      selectedComponent: ''
    };
  },
  methods: {
    toggleComponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>