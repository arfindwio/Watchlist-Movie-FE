<script lang="ts" setup>
import { onMounted, computed } from "vue";

// Stores
import { useMoviesStore } from "../stores/movies";

// Icons
import { Icon } from "@iconify/vue";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import Footer from "../components/footer/Footer.vue";

const moviesStore = useMoviesStore();

const watched = computed(() => moviesStore.watched);
const unwatched = computed(() => moviesStore.unwatched);

onMounted(() => {
  moviesStore.fetchMovies();
});
</script>

<template>
  <SideBar />
  <div
    class="min-h-screen w-full bg-slate-900 pt-20 sm:pl-20 sm:pt-0 md:ml-[20%] md:w-[80%] md:pl-0"
  >
    <div class="mx-auto w-full max-w-7xl px-4 pb-4 sm:p-6 lg:p-10">
      <section
        class="flex w-full flex-col gap-4 rounded-md border border-[#A41B1B] bg-slate-700 p-3 text-[#e50914] sm:gap-8 md:p-4"
      >
        <h1
          class="text-xl font-semibold text-white sm:text-2xl md:text-4xl lg:text-5xl"
        >
          Welcome to <span class="text-[#e50914]">Watchlists</span>
        </h1>
        <div class="flex flex-col gap-2 sm:gap-0">
          <p class="text-base font-normal text-slate-200 sm:text-lg">
            Browse movies, add them to watchlists
          </p>
          <p class="text-base font-normal text-slate-200 sm:gap-2 sm:text-lg">
            Just click
            <a href="#" class="text-wrap font-bold underline"
              >Create Watchlist</a
            >, click poster to see more details or
            <Icon
              icon="mdi:movie-check"
              width="20"
              height="20"
              class="inline align-middle"
            />
            to mark the movie as watched
          </p>
        </div>
      </section>

      <section
        class="flex flex-col items-center justify-center gap-3 pb-6 pt-10 sm:gap-6 sm:pb-10 sm:pt-16 md:gap-10 lg:pb-16 lg:pt-20"
        v-if="watched.length === 0 && unwatched.length === 0"
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
      </section>

      <section
        class="flex flex-col gap-3 pt-10 sm:gap-6 lg:pt-16"
        v-if="unwatched.length > 0"
      >
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-bold text-white sm:text-3xl">
            Watchlist Movies
          </h5>

          <router-link
            to="/watchlist"
            class="h-fit rounded-sm bg-[#F33F3F] px-3 py-1 text-xs font-bold text-black sm:text-sm"
          >
            See All
          </router-link>
        </div>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-8"
        >
          <MovieCard
            v-for="movie in unwatched.slice(0, 8)"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </section>

      <section
        class="flex flex-col gap-3 pt-10 sm:gap-6 lg:pt-16"
        v-if="watched.length > 0"
      >
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-bold text-white sm:text-3xl">
            Watched Movies
          </h5>

          <router-link
            to="/watched"
            class="h-fit rounded-sm bg-[#F33F3F] px-3 py-1 text-xs font-bold text-black sm:text-sm"
          >
            See All
          </router-link>
        </div>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-8"
        >
          <MovieCard v-for="movie in watched" :key="movie.id" :movie="movie" />
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>
