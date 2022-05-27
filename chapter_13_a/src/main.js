import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import App from './App.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

// All that router related code can be transfered to a router.js file to make things neater.
// The router.js can be imported in the main.js

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', redirect: '/teams' // redirect is different from alias. 
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { needsAuth: true }, // I can add meta data that can be evaluated by a navigation guard
                                 // it can be accessed by to.meta.needsAuth argument.
      components: {
        default: TeamsList,
        footer: TeamsFooter
        //If you need more than one router rendered in the same level or component, you can add
        //the componentS property that asks for an object with pairs. Each pair has a router-view name and
        // the component. Of course, the router-view element shall receive an name, just like slots.
        // There can be one unnamed router-view.
      },
      children: [
        { name: 'team-members', path: ':teamId', component: TeamMembers, props: true}
        // the TeamMembers component is now routed as a children of teams, so there the <route-view> element
        // must be place in the parent component.
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      // beforeEnter(to, from, each) {
      //   // works the same as beforeEach, but in this case it checks only before entering /users
      // it can be placed inside the component, as long as the vue-router is being used.
      // }
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
  scrollBehavior(to, from, savedPosition) {
    //the scrollBehavior is a method that is triggered everytime the page changes.
    // it always get three arguments shown above. The names can be chosen but let's keep descriptive.
    // The savePosition is object with left and top property showing where the user scrolled to before going back.
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    };

  }
});

// router.afterEach(function(to, from) {});
//  The afterEach hook works like beforeEach, but it only takes two parameters.
//  It is often used to send data.
//  It is triggered after the navigation event completed.
//  It is not used to control the navigation.


// router.beforeEach(function (to, from, next) {
//   // next() can cancel (false) the navigation or confirm it (*empty* or true)
//   // Besides empty, true of fase, an string or an object.
//   // it can be used in an if statment.
// });
// Navigation Guards
// before each navigation event, this function will be triggered. And it needs three arguments.


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
