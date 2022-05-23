import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import App from './App.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/teams', component: TeamsList
        },
        {
            path: '/users', component: UsersList
        },
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app');


//The router functionality allows to load certain components in different url's. It might useful to share direct links.

// 1- install the package with the command npm install --save vue-router@next
// It's a official vue package to deal with routers.
// 2 - Then, import the package and two functions from the package: createRouter and createWebHistory.
// 3 - the webHistory is to keep track from the previous page an user has visited. Nowadays, this command only
// ask the brouswer to use the built-in method.
// 4 - The createRouter function creates a router that holds an object as above.
// 5 - Inside the routes, it goes and array of object which each object has an path and component property.
// The path shows the url in which the component should be visualized.
// 6 - Each component should be imported in the main.js file.
// 7 - After that, the Vue needs to know where to render the component. For that, we use a vue-router built-in
// element called: <router-view></router-view> and use the app.use() function with the library inside braces.
// NOTE: The path should start with /, not with ./
// 8 - Now, to navigate inside the app, I should use the vue-router built-in element: <router-link></router-link>
// which is rendered as a link in the browser.