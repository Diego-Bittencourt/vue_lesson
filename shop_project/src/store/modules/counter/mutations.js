export default {
  increment(state) {
    //Vuex garantees that the mutate receives the state as argument
    state.counter = state.counter + 2;
  },
  increase(state, payload) {
    state.counter = state.counter + payload.value;
    console.log(state, payload);
  },
};
