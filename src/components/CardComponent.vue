<template>
  <div>
    <h4>{{ searchResult.title }}</h4>
    <div>{{ searchResult.original_title }}</div>
    <div>{{ searchResult.original_language }}</div>
    <div>{{ searchResult.vote_average }}</div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    searchResult: Object,
  },
};
</script>

<style lang="scss" scoped></style>
