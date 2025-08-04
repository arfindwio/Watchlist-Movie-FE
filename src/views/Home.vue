<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";

// Images
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import Footer from "../components/footer/Footer.vue";
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

      <section class="flex flex-col gap-3 pt-10 sm:gap-6 lg:pt-16">
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-bold text-white sm:text-3xl">
            Watchlist Movies
          </h5>

          <button
            class="h-fit rounded-sm bg-[#F33F3F] px-3 py-1 text-xs font-bold text-black sm:text-sm"
          >
            See All
          </button>
        </div>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-8"
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>

      <section class="flex flex-col gap-3 py-10 sm:gap-6 lg:py-16">
        <div class="flex items-center justify-between">
          <h5 class="text-xl font-bold text-white sm:text-3xl">
            Watched Movies
          </h5>

          <button
            class="h-fit rounded-sm bg-[#F33F3F] px-3 py-1 text-xs font-bold text-black sm:text-sm"
          >
            See All
          </button>
        </div>
        <div
          class="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 xl:grid-cols-6 xl:gap-8"
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>
