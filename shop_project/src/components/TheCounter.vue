<template>
  <h3>{{ finalCounter }}</h3>
<button @click="counter">Add 1</button>
</template>

<script>
import { mapGetters } from'vuex';
export default {
    computed: {
        // counter() {
        //     return this.$store.getters.finalCounter;
        // }
        //mapGetters takes an array or object as argument and returns the properties listed in that arguments.
        //...mapGetters({
        //     finalCounter: 'finalCounter'
        // })
        ...mapGetters('counter', ['finalCounter'])
    },

}
</script>

<style>

</style>