import { createApp } from 'vue'; 

// refering to a package, so just the package name.

import App from './App.vue'; 

//refering to a file, so the path to the file. The name after import is up to you. It's conventional
// to name the same as the file.

import FriendContact from "./componentes/FriendContact.vue"

const app = Vue.createApp(App);
 
app.component("FriendContact", FriendContact)

app.mount('#app');
