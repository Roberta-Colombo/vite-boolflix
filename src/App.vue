<template>
  <div></div>
</template>

<script>
import { store } from "./store";
import axios from "axios";

export default {
  data() {
    return {
      store,
      endPoint: "search/movie",
      apiKey: "?api_key=843403d86580a9c697c8a3e94798c648",
    };
  },
};
</script>

<style lang="scss" scoped></style>
