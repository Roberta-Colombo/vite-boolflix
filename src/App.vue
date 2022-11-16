<template>
  <header>
    <HeaderComponent @filteredTitles="getTitles" />
  </header>

  <main>
    <ResultsList />
  </main>
</template>

<script>
import { store } from "./store";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import ResultsList from "./components/ResultsList.vue";

export default {
  components: { HeaderComponent, ResultsList },
  data() {
    return {
      store,
      endPoint: "search/movie",
      apiKey: "?api_key=843403d86580a9c697c8a3e94798c648",
      apiQuery: "&query=",
      apiLanguage: "&language=it-IT",
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
        this.store.search.title +
        this.apiLanguage;
      axios.get(movieApi, options).then((res) => {
        store.movieList = res.data.results;
        console.log(store.movieList);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
