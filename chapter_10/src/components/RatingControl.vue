<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], //Whenever you use v-model in a custom component, it generates a modelValue prop and an event.
  emits: ['update:modelValue'], //this is the standart event created by Vue when using v-model on a custom component.
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // The button in the form should be reset after submiting the form. However, since the activeOption is being hold 
  // inside the data() property, it doesn't change after the form being submited.


  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   },
  // },
  // Holding the activeOption in a computed property works because the computed properties are rendered again every time
  // the variable is changed.
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: purple;
}

.active button {
  color: purple;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
