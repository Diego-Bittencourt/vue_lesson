import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: AllUsers },
        {path: '/goals', component: CourseGoals}
    ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router.isReady().then(function () {
    app.mount('#app');
});

// Using this syntax, the app won't make transition at the initial load.


