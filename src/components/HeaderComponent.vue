<template>
  <div class="header">
    <div class="my-container d-flex justify-content-between align-items-center">
      <div class="logo">BOOLFLIX</div>

      <div class="searchbar">
        <input
          type="text"
          id="search-title"
          placeholder="Search title..."
          v-model.trim="store.searchedTitle"
          @keyup.enter="search"
        />

        <button @click="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
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
    search() {
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
  font-size: 2rem;
  letter-spacing: 0.25rem;
  font-weight: 500;
}

button {
  background-color: transparent;
  border-style: none;
  padding-left: 0.5rem;
}

i {
  color: $white;
  font-size: 1.4rem;
}

input {
  background-color: $cardblack;
  color: $white;
}
</style>
