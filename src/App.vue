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
      // elementi che compongono l'api
      endPointMovie: "/search/movie",
      endPointShow: "/search/tv",
      apiKey: "?api_key=843403d86580a9c697c8a3e94798c648",
      apiQuery: "&query=",
      apiLanguage: "&language=it-IT",
    };
  },
  // costruzione delle due api
  computed: {
    apiMovie() {
      return (
        store.apiURL +
        this.endPointMovie +
        this.apiKey +
        this.apiQuery +
        store.searchedTitle +
        this.apiLanguage
      );
    },
    apiTvShow() {
      return (
        store.apiURL +
        this.endPointShow +
        this.apiKey +
        this.apiQuery +
        store.searchedTitle +
        this.apiLanguage
      );
    },
  },
  methods: {
    // func per mostrare film e serie che risp ai criteri di ricerca
    getTitles() {
      // chiamata api per i film
      let optionsMovie = null;
      if (store.searchedTitle) {
        optionsMovie = {
          params: {
            title: store.searchedTitle,
          },
        };
      }
      axios.get(this.apiMovie, optionsMovie).then((res) => {
        store.movieList = res.data.results;
        console.log(store.movieList);
      });

      // chiamata api per le serie tv
      let optionsTvShow = null;
      if (store.searchedTitle) {
        optionsTvShow = {
          params: {
            name: store.searchedTitle,
          },
        };
      }

      axios.get(this.apiTvShow, optionsTvShow).then((res) => {
        store.tvShowList = res.data.results;
        console.log(store.tvShowList);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
