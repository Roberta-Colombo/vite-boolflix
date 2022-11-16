import { reactive } from "vue";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3",
  movieList: [],
  search: {
    title: "",
    name: "",
  },
  tvShowList: [],
  searchedTitle: "",
});
