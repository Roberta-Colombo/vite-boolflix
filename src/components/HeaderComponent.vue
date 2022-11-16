<template>
  <div class="header">
    <div class="my-container d-flex justify-content-between align-items-center">
      <div class="logo">BOOLFIX</div>

      <div class="searchbar">
        <input
          type="text"
          id="search-title"
          placeholder="Search title..."
          v-model.trim="store.search.title"
        />
        <button type="submit" @click="searchTitles">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  name: "HeaderComponent",
  data() {
    return {
      store,
    };
  },
  methods: {
    searchTitles() {
      this.$emit("filteredTitles");
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.header {
  height: 90px;
  background-color: $headerblack;
}

.my-container {
  height: 90px;
}

.logo {
  color: red;
}
</style>
