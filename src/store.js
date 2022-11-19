import { reactive } from "vue";

export const store = reactive({
  baseURL: "https://api.themoviedb.org/3",
  endpoint: {
    movie: "/search/movie",
    tvShow: "/search/tv",
    popularMovie: "/movie/popular",
    popularTvShow: "/tv/popular",
    genreMovie: "/genre/movie/list",
  },
  movieList: [],
  tvShowList: [],
  popularMovieList: [],
  popularTvShowList: [],
  genresList: [],
  searchedTitle: "",
  showHome: true,
  loading: {
    movie: false,
    tvShow: false,
  },
  errorMessage: {
    movie: false,
    tvShow: false,
  },
});
