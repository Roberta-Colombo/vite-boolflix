import { reactive } from "vue";

export const store = reactive({
  baseURL: "https://api.themoviedb.org/3",
  endpoint: {
    movie: "/search/movie",
    tvShow: "/search/tv",
  },
  movieList: [],
  tvShowList: [],
  searchedTitle: "",
});
