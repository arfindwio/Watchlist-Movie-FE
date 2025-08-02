<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";

// Images
import SideBar from "../components/sidebar/SideBar.vue";
import MovieCard from "../components/card/MovieCard.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen w-full">
    <SideBar />
    <div class="ml-[20%] w-[80%] bg-slate-900">
      <div class="mx-auto w-full max-w-7xl p-10 pb-4">
        <section
          class="flex w-full flex-col gap-8 rounded-md border border-[#A41B1B] bg-slate-700 p-4 text-[#e50914]"
        >
          <h1 class="text-5xl font-semibold text-white">
            Welcome to <span class="text-[#e50914]">Watchlists</span>
          </h1>
          <div class="flex flex-col">
            <p class="text-lg font-normal text-slate-200">
              Browse movies, add them to watchlists
            </p>
            <p
              class="flex items-center gap-2 text-lg font-normal text-slate-200"
            >
              Just click
              <a href="" class="font-bold underline">Create Watchlist</a>, click
              poster to see more details or
              <Icon icon="mdi:movie-check" width="24" height="24" /> to mark the
              movie as watched
            </p>
          </div>
        </section>

        <section class="flex flex-col gap-6 pt-16">
          <h5 class="text-3xl font-bold text-white">Watchlist Movies</h5>
          <div class="grid grid-cols-5 gap-8">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>

        <section class="flex flex-col gap-6 py-16">
          <h5 class="text-3xl font-bold text-white">Watched Movies</h5>
          <div class="grid grid-cols-5 gap-8">
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
  </div>
</template>
