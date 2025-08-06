<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

// Stores
import { useMoviesStore } from "../stores/movies";

// Icons
import { Icon } from "@iconify/vue";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import Footer from "../components/footer/Footer.vue";

const route = useRoute();
const moviesSore = useMoviesStore();

const query = computed(() => (route.query.q as string) || "");

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
            v-for="movie in filteredWatched"
            :key="movie.id"
            :movie="movie"
          />
          <MovieCard
            v-for="movie in filteredUnwatched"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <section
        class="flex flex-col justify-center gap-3 pb-10 pt-4 lg:flex-row lg:justify-between lg:gap-6 lg:pb-16"
      >
        <p
          class="flex items-center justify-center gap-2 text-base font-normal text-slate-300"
        >
          Item per page
          <select class="border border-slate-600 bg-transparent text-base">
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          of 200
        </p>
        <div class="flex flex-wrap items-center justify-center gap-1 sm:gap-4">
          <button
            class="flex scale-90 items-center gap-2 text-slate-300 sm:scale-100"
          >
            <Icon icon="si:arrow-left-duotone" width="30" height="30" />
            Previous
          </button>
          <button
            class="scale-90 rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35 sm:scale-100"
          >
            1
          </button>
          <p
            class="scale-90 rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35 sm:scale-100"
          >
            ...
          </p>
          <button
            class="scale-90 rounded-lg bg-slate-500 bg-opacity-70 px-4 py-2 text-base font-medium text-white sm:scale-100"
          >
            3
          </button>
          <p
            class="scale-90 rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35 sm:scale-100"
          >
            ...
          </p>
          <button
            class="scale-90 rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35 sm:scale-100"
          >
            9
          </button>
          <button
            class="flex scale-90 items-center gap-2 text-slate-300 sm:scale-100"
          >
            Next
            <Icon icon="si:arrow-right-duotone" width="30" height="30" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>
