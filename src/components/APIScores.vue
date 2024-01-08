<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <li v-for="item in fact">
    {{item.name}}
    </li>
  </div>
</template>
<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    fetchData() {
      const data = fetch('http://127.0.0.1:8000/xml-files', {
        method: "GET",
        headers: {
        },
      })
        .then((response) => {
          response.json().then((data) => {
            this.fact = data;
          });
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style>
button {
padding: 12px 32px;
font-size: 16px;
border-radius: 8px;
}
</style>