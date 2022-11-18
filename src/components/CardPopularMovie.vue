<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <!-- poster film/serie + placeholder in caso di img mancante -->
        <img
          class="poster img-fluid"
          :src="
            popularMovieList.poster_path
              ? imgBasePath + popularMovieList.poster_path
              : 'https://via.placeholder.com/342x513/CCCCCC/FFFFFF.jpg?text=No+image+available'
          "
          :alt="popularMovieList.original_title + 'image'"
        />
      </div>

      <div class="flip-card-back">
        <!-- titolo film/serie: prima in italiano poi titolo originale -->
        <h4 class="my-4">
          {{ popularMovieList.title || popularTvShowList.name }}
        </h4>
        <div class="my-3">
          {{
            popularMovieList.original_title || popularTvShowList.original_name
          }}
        </div>

        <!-- bandierina della lingua originale -->
        <img
          class="flag"
          v-if="
            this.availableFlags.includes(popularMovieList.original_language)
          "
          :src="`/flags/4x3/${popularMovieList.original_language}.svg`"
          :alt="popularMovieList.original_language"
        />

        <!-- bandierina di default in caso di img mancante -->
        <img
          class="unknown-flag"
          v-else
          src="/flags/4x3/unknown1.png"
          alt="Country flag not available"
        />
        <br />

        <!-- valutazione in stelline -->
        <div
          v-for="n in 5"
          class="fa-star"
          :class="n <= rating ? 'fa-solid' : 'fa-regular'"
        ></div>

        <!-- riassunto film/serie -->
        <div class="overview">
          {{ popularMovieList.overview }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    popularMovieList: Object,
  },
  data() {
    return {
      imgBasePath: "https://image.tmdb.org/t/p/w342/",
      availableFlags: [
        "ad",
        "ae",
        "af",
        "ag",
        "ai",
        "al",
        "am",
        "ao",
        "aq",
        "ar",
        "as",
        "at",
        "au",
        "aw",
        "ax",
        "az",
        "ba",
        "bb",
        "bd",
        "be",
        "bf",
        "bg",
        "bh",
        "bi",
        "bj",
        "bl",
        "bm",
        "bn",
        "bo",
        "bq",
        "br",
        "bs",
        "bt",
        "bv",
        "bw",
        "by",
        "bz",
        "ca",
        "cc",
        "cd",
        "cf",
        "cg",
        "ch",
        "ci",
        "ck",
        "cl",
        "cm",
        "cn",
        "co",
        "cr",
        "cu",
        "cv",
        "cw",
        "cx",
        "cy",
        "cz",
        "de",
        "dj",
        "dk",
        "dm",
        "do",
        "dz",
        "ec",
        "ee",
        "eg",
        "eh",
        "er",
        "es",
        "et",
        "fi",
        "fj",
        "fk",
        "fm",
        "fo",
        "fr",
        "ga",
        "en",
        "gd",
        "ge",
        "gf",
        "gg",
        "gh",
        "gi",
        "gl",
        "gm",
        "gn",
        "gp",
        "gq",
        "gr",
        "gs",
        "gt",
        "gu",
        "gw",
        "gy",
        "hk",
        "hm",
        "hn",
        "hr",
        "ht",
        "hu",
        "id",
        "ie",
        "il",
        "im",
        "in",
        "io",
        "iq",
        "ir",
        "is",
        "it",
        "je",
        "jm",
        "jo",
        "jp",
        "ke",
        "kg",
        "kh",
        "ki",
        "km",
        "kn",
        "kp",
        "kr",
        "kw",
        "ky",
        "kz",
        "la",
        "lb",
        "lc",
        "li",
        "lk",
        "lr",
        "ls",
        "lt",
        "lu",
        "lv",
        "ly",
        "ma",
        "mc",
        "md",
        "me",
        "mf",
        "mg",
        "mh",
        "mk",
        "ml",
        "mm",
        "mn",
        "mo",
        "mp",
        "mq",
        "mr",
        "ms",
        "mt",
        "mu",
        "mv",
        "mw",
        "mx",
        "my",
        "mz",
        "na",
        "nc",
        "ne",
        "nf",
        "ng",
        "ni",
        "nl",
        "no",
        "np",
        "nr",
        "nu",
        "nz",
        "om",
        "pa",
        "pe",
        "pf",
        "pg",
        "ph",
        "pk",
        "pl",
        "pm",
        "pn",
        "pr",
        "ps",
        "pt",
        "pw",
        "py",
        "qa",
        "re",
        "ro",
        "rs",
        "ru",
        "rw",
        "sa",
        "sb",
        "sc",
        "sd",
        "se",
        "sg",
        "sh",
        "si",
        "sj",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sr",
        "ss",
        "st",
        "sv",
        "sx",
        "sy",
        "sz",
        "tc",
        "td",
        "tf",
        "tg",
        "th",
        "tj",
        "tk",
        "tl",
        "tm",
        "tn",
        "to",
        "tr",
        "tt",
        "tv",
        "tw",
        "tz",
        "ua",
        "ug",
        "um",
        "us",
        "uy",
        "uz",
        "va",
        "vc",
        "ve",
        "vg",
        "vi",
        "vn",
        "vu",
        "wf",
        "ws",
        "ye",
        "yt",
        "za",
        "zm",
        "zw",
      ],
    };
  },
  computed: {
    rating() {
      return Math.ceil(this.popularMovieList.vote_average / 2);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.flag {
  height: 25px;
  width: 50px;
  margin: 15px 0;
}

.unknown-flag {
  height: 25px;
  width: 42px;
  padding-left: 0.4rem;
  margin: 15px 0;
}

.poster {
  max-width: 100%;
  height: 100%;
}

.overview {
  font-size: 0.8rem;
  text-align: justify;
  margin: 20px 20px;
}

// Layout effetto flip-card
.flip-card {
  background-color: transparent;
  width: 342px;
  height: 513px;
  perspective: 1000px;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the back side */
.flip-card-back {
  background-color: $cardblack;
  color: white;
  transform: rotateY(180deg);
}
</style>
