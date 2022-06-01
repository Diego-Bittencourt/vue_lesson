import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state) {
            //Vuex garantees that the mutate receives the state as argument
            state.counter = state.counter + 2;
        },
        increase(state, payload) {
            state.counter = state.counter + payload.value;
            console.log(state, payload)
        }
    },
    getters: {
        finalCounter(state) {
            // A getter is like a computed property and can take two argument, the second one can be another getter.
            return state.counter * 3;
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;
            if(finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            } else {
                return finalCounter;
            }
            
        }
    }
});

app.use(store);

app.mount('#app');
