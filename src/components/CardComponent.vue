<template>
  <div>
    <h4>{{ searchResult.title || searchResult.name }}</h4>
    <div>{{ searchResult.original_title || searchResult.original_name }}</div>
    <img
      :src="`/flags/4x3/${searchResult.original_language}.svg`"
      :alt="searchResult.original_language"
    />
    <div>{{ searchResult.vote_average }}</div>
  </div>
</template>

<script>
// import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    searchResult: Object,
  },
};
</script>

<style lang="scss" scoped>
img {
  height: 20px;
  width: 40px;
}
</style>
