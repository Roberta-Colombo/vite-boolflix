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
      store.loading.movie = true;
      axios
        .get(apiurlMovie, options)
        .then((res) => {
          store.movieList = res.data.results;
          console.log(store.movieList.length);
          store.loading.movie = false;
          // gestione nessun risultato trovato
          if (store.movieList.length == 0) {
            store.errorMessage.movie = true;
          } else {
            store.errorMessage.movie = false;
          }
        })
        .catch((error) => {
          console.log(error);
        });

      // chiamata api per le serie
      const apiurlTvShow = store.baseURL + store.endpoint.tvShow;
      store.loading.tvShow = true;
      axios
        .get(apiurlTvShow, options)
        .then((res) => {
          store.tvShowList = res.data.results;
          store.loading.tvShow = false;
          // gestione nessun risultato trovato
          if (store.tvShowList.length == 0) {
            store.errorMessage.tvShow = true;
          } else {
            store.errorMessage.tvShow = false;
          }
        })
        .catch((error) => {
          console.log(error);
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
      axios
        .get(apiurlPopularMovie, options)
        .then((res) => {
          store.popularMovieList = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });

      // chiamata api serie tv popolari
      const apiurlPopularTvShow = store.baseURL + store.endpoint.popularTvShow;
      axios
        .get(apiurlPopularTvShow, options)
        .then((res) => {
          store.popularTvShowList = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // getGenres() {
    //   let options = null;
    //   options = {
    //     params: {
    //       api_key: "843403d86580a9c697c8a3e94798c648",
    //       language: "it-IT",
    //     },
    //   };

    //   // chiamata api generi film
    //   const apiurlGenresMovie = store.baseURL + store.endpoint.genreMovie;
    //   axios
    //     .get(apiurlGenresMovie, options)
    //     .then((res) => {
    //       store.genresList = res.data.genres;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  created() {
    this.getPopular();
    // this.getGenres();
  },
};
</script>

<style lang="scss" scoped></style>
