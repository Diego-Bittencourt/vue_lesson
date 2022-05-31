<template>
  <h3>{{ this.$store.state.counter }}</h3>
<button @click="addagain">Add 1</button>
</template>

<script>
export default {
    methods: {
        addagain() {
            return this.$store.state.counter++;
        }
    }
}
</script>

<style>

</style>