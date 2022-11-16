<template>
  <div class="my-container">
    <div v-for="(item, index) in store.movieList" :key="index">
      <CardComponent :searchResult="item" />
    </div>
  </div>
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
