<template>
  <header>
    <HeaderComponent @filteredTitles="getTitles" />
  </header>
</template>

<script>
import { store } from "./store";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: { HeaderComponent },
  data() {
    return {
      store,
      endPoint: "search/movie",
      apiKey: "?api_key=843403d86580a9c697c8a3e94798c648",
      apiQuery: "&query=",
    };
  },
  methods: {
    getTitles() {
      let options = null;
      if (store.search.title) {
        options = {
          params: {
            title: store.search.title,
          },
        };
      }
      const movieApi =
        store.apiURL +
        this.endPoint +
        this.apiKey +
        this.apiQuery +
        this.store.search.title;
      axios.get(movieApi, options).then((res) => {
        store.movieList = res.data.results;
        console.log(store.movieList);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
