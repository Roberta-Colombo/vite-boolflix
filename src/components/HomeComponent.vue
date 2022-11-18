<template>
  <section class="popular-movies">
    <div class="my-container">
      <h2>I film pi&ugrave; popolari su Boolflix</h2>
      <div ref="box" class="row g-0">
        <button class="left-btn" @click="scrollLftMovie">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div
          class="col"
          v-for="(item, index) in store.popularMovieList"
          :key="index"
        >
          <CardPopularMovie :popularMovieList="item" />
        </div>
      </div>
      <button class="right-btn" @click="scrollRgtMovie">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </section>

  <section class="popular-tvshows">
    <div class="my-container">
      <h2>Le serie pi&ugrave; popolari su Boolflix</h2>
      <div ref="box2" class="row g-0">
        <button class="left-btn" @click="scrollLftShow">
          <i class="fa-solid fa-angle-left"></i>
        </button>
        <div
          class="col"
          v-for="(item, index) in store.popularTvShowList"
          :key="index"
        >
          <CardPopularShow :popularTvShowList="item" />
        </div>
      </div>
      <button class="right-btn" @click="scrollRgtShow">
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import CardPopularMovie from "./CardPopularMovie.vue";
import CardPopularShow from "./CardPopularShow.vue";

export default {
  name: "HomeComponent",
  components: { CardPopularMovie, CardPopularShow },
  data() {
    return {
      store,
    };
  },
  methods: {
    scrollLftMovie() {
      const element = this.$refs.box;
      element.scrollBy({
        left: -900,
        behavior: "smooth",
      });
    },
    scrollRgtMovie() {
      const element = this.$refs.box;
      element.scrollBy({
        left: 900,
        behavior: "smooth",
      });
    },
    scrollLftShow() {
      const element = this.$refs.box2;
      element.scrollBy({
        left: -900,
        behavior: "smooth",
      });
    },
    scrollRgtShow() {
      const element = this.$refs.box2;
      element.scrollBy({
        left: 900,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/home_results_style" as *;
</style>
