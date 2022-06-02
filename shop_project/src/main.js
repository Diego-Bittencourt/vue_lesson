import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index.js';
//Modules are separated stores that can hold logic for determined logics. It makes your code easier to read and understant
// as your app grows. And once they're put in the modules property, they work as usual, in the same level.
//Mutations, getters and actions are global, but the state is local to the module it belongs.
//Therefore, a getter only have access to the state in the same module.

const app = createApp(App);

app.use(store);

app.mount('#app');
