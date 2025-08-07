<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

// Stores
import { useMoviesStore } from "../stores/movies";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import pagination from "../components/pagination/pagination.vue";
import Footer from "../components/footer/Footer.vue";

const route = useRoute();
const moviesSore = useMoviesStore();

const query = computed(() => (route.query.q as string) || "");
const currentPage = ref(1);
const itemsPerPage = ref(15);

const filteredWatched = computed(() => {
  if (!query.value) return moviesSore.watched;
  return moviesSore.watched.filter((movie) =>
    movie.title.toLowerCase().includes(query.value.toLowerCase()),
  );
});

const filteredUnwatched = computed(() => {
  if (!query.value) return moviesSore.unwatched;
  return moviesSore.unwatched.filter((movie) =>
    movie.title.toLowerCase().includes(query.value.toLowerCase()),
  );
});

const combinedMovies = computed(() => {
  return [...filteredWatched.value, ...filteredUnwatched.value];
});

const totalPages = computed(() =>
  Math.ceil(combinedMovies.value.length / itemsPerPage.value),
);

const paginatedMovies = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return combinedMovies.value.slice(start, start + itemsPerPage.value);
});
</script>

<template>
  <SideBar />
  <div
    class="min-h-screen w-full bg-slate-900 pt-20 sm:pl-20 sm:pt-0 md:ml-[20%] md:w-[80%] md:pl-0"
  >
    <div class="mx-auto w-full max-w-7xl px-4 pb-4 sm:p-6 lg:p-10">
      <section class="flex flex-col gap-3 sm:gap-6">
        <h5 class="text-xl font-bold text-white sm:text-3xl">Movies</h5>
        <p class="mt-1 text-base font-medium text-white">
          Result for <span class="text-[#F33F3F]">"{{ query }}"</span>
        </p>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-7 lg:grid-cols-5 lg:gap-8"
        >
          <MovieCard
            v-for="movie in paginatedMovies"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <pagination
        v-if="combinedMovies.length > itemsPerPage"
        :currentPage="currentPage"
        :totalPages="totalPages"
        :itemsPerPage="itemsPerPage"
        :totalItems="combinedMovies.length"
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
