<template>
  <section class="movies">
    <div class="my-container">
      <h2>FILM</h2>
      <div class="row">
        <div class="col" v-for="(item, index) in store.movieList" :key="index">
          <CardComponent :searchResult="item" />
        </div>
      </div>
    </div>
  </section>

  <section class="tv-shows">
    <div class="my-container">
      <h2>SERIE TV</h2>
      <div class="row">
        <div class="col" v-for="(item, index) in store.tvShowList" :key="index">
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

section {
  height: 513px;
  margin-bottom: 300px;
}
.row {
  padding-bottom: 200px;
  flex-wrap: nowrap;
  overflow: hidden;
  overflow-x: auto;
}
.col {
  flex-basis: calc(100% / 6);
}
h2 {
  margin-top: 40px;
  color: $white;
}
</style>
