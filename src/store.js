import { reactive } from "vue";

export const store = reactive({
  baseURL: "https://api.themoviedb.org/3",
  endpoint: {
    movie: "/search/movie",
    tvShow: "/search/tv",
    popularMovie: "/movie/popular",
    popularTvShow: "/tv/popular",
  },
  movieList: [],
  tvShowList: [],
  popularMovieList: [],
  popularTvShowList: [],
  searchedTitle: "",
  showHome: true,
});
