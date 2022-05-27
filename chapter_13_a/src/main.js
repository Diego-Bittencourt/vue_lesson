import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import App from './App.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', redirect: '/teams' // redirect is different from alias. 
    },
    {
      path: '/teams',
      component: TeamsList,
      children: [
        { path: ':teamId', component: TeamMembers, props: true}
        // the TeamMembers component is now routed as a children of teams, so there the <route-view> element
        // must be place in the parent component.
      ]
    },
    {
      path: '/users',
      component: UsersList,
    },
    // { 
    //     path: '/teams/:teamId', // dynamic route/path. Binding with : you can change with anything you want after.
    //     component: TeamMembers, // It is important to keep in mind that the order in ther router matter. If I put
    //     props: true             // another route after /teams with a fixed value, it won't be triggered but it will 
    //                             // be captured by the dynamic one first.
    //                             // For example, if I put a '/teams/new' route after the dynamic one, the '/teams/:teamId'
    //                             // rout will catch if first and try to render it, making the '/teams/new' path hidden, not functional.
    //                             // Setting this to true, the router pass the teamId as a prop, not only through $router.
    // },
    {
      path: '/:notFound(.*)',   // this is useful because it has a regex that catches any invalid link that the user 
      component: NotFound,
    }
  ],
  linkActiveClass: 'active',
});

const app = createApp(App);
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
