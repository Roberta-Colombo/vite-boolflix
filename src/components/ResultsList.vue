<template>
  <section class="movies">
    <!-- Loader per section film -->
    <div class="loader" v-if="store.loading.movie">
      <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

    <!-- Risultati ricerca film -->
    <div class="my-container">
      <div class="text-white mt-5" v-if="store.errorMessage.movie">
        Non esistono film con questo nome
      </div>

      <div v-if="!store.errorMessage.movie">
        <h2>Film che corrispondono alla tua ricerca</h2>
        <div ref="box" class="row g-0">
          <button class="left-btn" @click="scrollLftMovie">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div
            class="col"
            v-for="(item, index) in store.movieList"
            :key="index"
          >
            <CardComponent :searchResult="item" />
          </div>
          <button class="right-btn" @click="scrollRgtMovie">
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>

  <section class="tv-shows">
    <!-- Loader per section serie -->
    <div class="loader" v-if="store.loading.tvShow">
      <i class="fa-solid fa-spinner fa-spin"></i>
    </div>

    <!-- Risultati ricerca serie -->
    <div class="my-container">
      <div class="text-white" v-if="store.errorMessage.tvShow">
        Non esistono serie con questo nome
      </div>

      <div v-if="!store.errorMessage.tvShow">
        <h2>Serie che corrispondono alla tua ricerca</h2>
        <div ref="box2" class="row g-0">
          <button class="left-btn" @click="scrollLftShow">
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <div
            class="col"
            v-for="(item, index) in store.tvShowList"
            :key="index"
          >
            <CardComponent :searchResult="item" />
          </div>
        </div>
        <button class="right-btn" @click="scrollRgtShow">
          <i class="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { store } from "../store";
import CardComponent from "./CardComponent.vue";

export default {
  name: "ResultsList",
  data() {
    return {
      store,
    };
  },
  components: { CardComponent },
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

.loader i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  font-size: 3.5rem;
}
</style>
