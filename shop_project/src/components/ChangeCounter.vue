<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
    methods: {
        addOne() {
            this.$store.commit('increment');
            //to use a mutation inside the components, you should use the syntax above.
        }
    }
}
</script>

<style>

</style>