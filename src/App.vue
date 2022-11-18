<template>
  <header>
    <HeaderComponent @filteredTitles="getTitles" />
  </header>

  <main>
    <!-- I due componenti appaiono alternativamente: inizialmente home e poi pagina risultati dopo aver effettuato una ricerca -->
    <HomeComponent v-if="store.showHome" />
    <ResultsList v-if="!store.showHome" />
  </main>
</template>

<script>
import { store } from "./store";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import ResultsList from "./components/ResultsList.vue";
import HomeComponent from "./components/HomeComponent.vue";

export default {
  components: { HeaderComponent, ResultsList, HomeComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
    // func per mostrare film e serie che risp ai criteri di ricerca
    getTitles() {
      store.showHome = false;
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
    getPopular() {
      let options = null;
      options = {
        params: {
          api_key: "843403d86580a9c697c8a3e94798c648",
          language: "it-IT",
        },
      };

      // chiamata api film popolari
      const apiurlPopularMovie = store.baseURL + store.endpoint.popularMovie;
      axios.get(apiurlPopularMovie, options).then((res) => {
        store.popularMovieList = res.data.results;
      });

      // chiamata api serie tv popolari
      const apiurlPopularTvShow = store.baseURL + store.endpoint.popularTvShow;
      axios.get(apiurlPopularTvShow, options).then((res) => {
        store.popularTvShowList = res.data.results;
      });
    },
  },
  created() {
    this.getPopular();
  },
};
</script>

<style lang="scss" scoped></style>
