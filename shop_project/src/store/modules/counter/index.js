import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  //using namespace: true you tell vuex that the whole module should be detached from the main state, not only the store.
  //
  namespaced: true,
  //after using namespaced: true the actions/getters/mutations are not available. So you should refer them to the
  //name you used to attach is to the main store, in this case, counter.
  //you can access with~:
  // this.$store.getters['counter/normalizedCounter'];
  //...mapGetters('counter', [finalCounter'])
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
