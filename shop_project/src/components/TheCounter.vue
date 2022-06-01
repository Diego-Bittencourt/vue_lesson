<template>
  <h3>{{ counter }}</h3>
<button @click="counter">Add 1</button>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.finalCounter;
        }
    }
}
</script>

<style>

</style>