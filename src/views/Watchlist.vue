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
        <section class="flex flex-col gap-6 pb-10">
          <h5 class="text-3xl font-bold text-white">Watchlist Movies</h5>
          <div class="grid grid-cols-5 gap-8">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>

        <section class="flex items-center justify-between pb-16">
          <p
            class="flex items-center gap-2 text-base font-normal text-slate-300"
          >
            Item per page
            <select class="border border-slate-600 bg-transparent text-base">
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
            of 200
          </p>
          <div class="flex items-center gap-4">
            <button class="flex items-center gap-2 text-slate-300">
              <Icon icon="si:arrow-left-duotone" width="30" height="30" />
              Previous
            </button>
            <button
              class="rounded-lg bg-slate-500 bg-opacity-70 px-4 py-2 text-base font-medium text-white"
            >
              1
            </button>
            <button
              class="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35"
            >
              2
            </button>
            <p
              class="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35"
            >
              ...
            </p>
            <button
              class="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35"
            >
              8
            </button>
            <button
              class="rounded-lg px-4 py-2 text-base font-medium text-slate-300 hover:bg-slate-500 hover:bg-opacity-35"
            >
              9
            </button>
            <button class="flex items-center gap-2 text-slate-300">
              Next
              <Icon icon="si:arrow-right-duotone" width="30" height="30" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  </div>
</template>
