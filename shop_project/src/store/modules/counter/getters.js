export default {
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
  };