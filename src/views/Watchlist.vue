<script lang="ts" setup>
import { ref, computed } from "vue";

// Stores
import { useMoviesStore } from "../stores/movies";

// Icons
import { Icon } from "@iconify/vue";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import pagination from "../components/pagination/pagination.vue";
import Footer from "../components/footer/Footer.vue";

const moviesStore = useMoviesStore();

const unwatched = computed(() => moviesStore.unwatched);

const currentPage = ref(1);
const itemsPerPage = ref(15);

const totalPages = computed(() => {
  return Math.ceil(unwatched.value.length / itemsPerPage.value);
});

const paginatedMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return unwatched.value.slice(start, start + itemsPerPage.value);
});
</script>

<template>
  <SideBar />
  <div
    class="min-h-screen w-full bg-slate-900 pt-20 sm:pl-20 sm:pt-0 md:ml-[20%] md:w-[80%] md:pl-0"
  >
    <div class="mx-auto w-full max-w-7xl px-4 pb-4 sm:p-6 lg:p-10">
      <section class="flex flex-col gap-3 sm:gap-6">
        <h5 class="text-xl font-bold text-white sm:text-3xl">
          Watchlist Movies
        </h5>
        <div
          class="flex w-full flex-col items-center justify-center gap-3 pt-10 sm:gap-6 md:gap-10"
          v-if="unwatched.length === 0"
        >
          <Icon
            icon="streamline-kameleon-color:movie-film"
            width="100"
            height="100"
            class="scale-100 sm:scale-125 md:scale-150"
          />
          <div class="flex flex-col text-center">
            <h5
              class="text-lg font-bold text-[#e50914] sm:text-xl md:text-2xl lg:text-3xl"
            >
              Your watchlist is empty.
            </h5>
            <p
              class="text-base font-medium text-white sm:text-lg md:text-xl lg:text-2xl"
            >
              Start adding movies you want to watch!
            </p>
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-7 lg:grid-cols-5 lg:gap-8"
          v-if="unwatched.length > 0"
        >
          <MovieCard
            v-for="movie in paginatedMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <pagination
        v-if="unwatched.length > 0"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :itemsPerPage="itemsPerPage"
        :totalItems="unwatched.length"
        @update:page="(page) => (currentPage = page)"
        @update:itemsPerPage="
          (count) => {
            itemsPerPage = count;
            currentPage = 1;
          }
        "
      />

      <Footer />
    </div>
  </div>
</template>
