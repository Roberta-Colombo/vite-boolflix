<template>
  <div class="header">
    <div class="my-container d-flex justify-content-between align-items-center">
      <nav class="d-flex justify-content-between align-items-center">
        <div class="logo">BOOLFLIX</div>

        <ul class="d-flex mt-3">
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New & Popular</a></li>
          <li><a href="#">My List</a></li>
          <li><a href="#">Browse by Languages</a></li>
        </ul>
      </nav>

      <div
        class="searchbar text-white d-flex justify-content-end align-items-center"
      >
        <input
          type="text"
          id="search-title"
          placeholder="Cerca titolo..."
          v-model.trim="store.searchedTitle"
          @keyup.enter="search"
        />

        <button @click="search">
          <i class="fa-solid fa-magnifying-glass p-1"></i>
        </button>

        <div class="px-3"><a href="#">Kids</a></div>
        <i class="p-2 fa-regular fa-bell"></i>
        <i class="p-3 fa-regular fa-user"></i>
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
  font-size: 1.8rem;
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
  cursor: pointer;
}

input {
  background-color: $cardblack;
  color: $white;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: $white;
  padding: 0.4rem;
  font-size: 0.9rem;
}

a:hover {
  color: rgb(178, 175, 175);
}

nav {
  height: 90px;
}
</style>
