<template>
  <button @click="inc">Add 2</button>
  <button @click="increase({value: 11})">Add 11</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne() {
        //     this.$store.dispatch('increment');
        //     //to use a mutation inside the components, you should use the syntax above.
        // }
        //The mapActions work similarly to mapGetters.
        // actions inside methods. getter inside computed.
        // ...mapActions(['increment', 'increase'])
        ...mapActions({
            inc: 'increment',
            increase: 'increase'

        })
    }
}
</script>

<style>

</style>