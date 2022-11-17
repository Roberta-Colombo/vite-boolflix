<template>
  <section class="movies">
    <div class="my-container">
      <h2>FILM</h2>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 my-5"
          v-for="(item, index) in store.movieList"
          :key="index"
        >
          <CardComponent :searchResult="item" />
        </div>
      </div>
    </div>
  </section>

  <section class="tv-shows">
    <div class="my-container">
      <h2>SERIE TV</h2>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-md-4 col-lg-3 my-5"
          v-for="(item, index) in store.tvShowList"
          :key="index"
        >
          <CardComponent :searchResult="item" />
        </div>
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
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

.row {
  height: 100vh;
  flex-wrap: nowrap;
  overflow-x: auto;
}

h2 {
  margin-top: 40px;
  color: $white;
}
</style>
