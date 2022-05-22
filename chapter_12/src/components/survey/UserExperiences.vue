<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
        <survey-result v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating">
        </survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import BaseButton from '../UI/BaseButton.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
    BaseButton
},
  data() {
    return {
      results: []
    }
  },
  methods: {
    loadExperiences() {
      fetch('https://vue-http-demo-69dfb-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json').then((response) => {
        if (response.ok) {
          return response.json();
        }
      }).then((data) => {
        const results = [];
        for (const id in data) {
          results.push({
            id: id,
            name: data[id].name,
            rating: data[id].rating,
          })
        }
        this.results = results;
      });
      
    }
  }
};
      //Now I'm sending a GET request. Since the GET request is the defaul, there is no need to write it.
      //Every GET request returns a promise that can be used with the .then() method which takes a function inside.
      //The object returned from that has a method .ok() to check if the procedure was succesful.
      //The data comes in a json format, so we can use the json method to return it.
      //The json method also returns a promise. We can see the data inside the json file if we use another .then with a console.log
      //The arrow function syntax is used because the this. keyword inside an arrow function has the same functionality as it was outsite the arrow function.
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>