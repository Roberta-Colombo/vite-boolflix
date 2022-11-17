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
    };
  },
  methods: {
    // func per mostrare film e serie che risp ai criteri di ricerca
    getTitles() {
      // passaggio dei parametri tramite options obj
      let options = null;
      options = {
        params: {
          api_key: "843403d86580a9c697c8a3e94798c648",
          query: store.searchedTitle,
          language: "it-IT",
        },
      };

      // chiamata api per i film
      const apiurlMovie = store.baseURL + store.endpoint.movie;
      axios.get(apiurlMovie, options).then((res) => {
        store.movieList = res.data.results;
      });

      // chiamata api per le serie
      const apiurlTvShow = store.baseURL + store.endpoint.tvShow;
      axios.get(apiurlTvShow, options).then((res) => {
        store.tvShowList = res.data.results;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables" as *;
</style>
