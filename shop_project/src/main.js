import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    //mutations must be synchronous. You can not put asynch code here. That leads to errors.
    //to put asynch events, you should use actions which, in turn, commit mutations.
    //It is considered good practice to put Actions between components and mutations.
    increment(state) {
      //Vuex garantees that the mutate receives the state as argument
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
      console.log(state, payload);
    },
  },
  actions: {
    //You don't need to use the same name in actions or mutations, but it is good to do it.
    increment(context) {
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
        context.commit('increase', payload);
    }
  },
  getters: {
    finalCounter(state) {
      // A getter is like a computed property and can take two argument, the second one can be another getter.
      return state.counter * 3;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
  },
});

app.use(store);

app.mount('#app');
