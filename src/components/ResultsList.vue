<template>
  <section class="movies">
    <h2>FILM</h2>
    <div class="my-container">
      <div v-for="(item, index) in store.movieList" :key="index">
        <CardComponent :searchResult="item" />
      </div>
    </div>
  </section>

  <section class="tv-shows">
    <h2>SERIE TV</h2>
    <div class="my-container">
      <div v-for="(item, index) in store.tvShowList" :key="index">
        <CardComponent :searchResult="item" />
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

<style lang="scss" scoped></style>
