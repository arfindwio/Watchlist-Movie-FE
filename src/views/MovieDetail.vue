<script lang="ts" setup>
import { computed } from "vue";

// Stores
import { useMoviesStore } from "../stores/movies";

// Icons
import { Icon } from "@iconify/vue";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import Footer from "../components/footer/Footer.vue";

// Images
import defaultPhoto from "../assets/images/poster.png";

const moviesStore = useMoviesStore();
const movie = computed(() => moviesStore.movie);
</script>

<template>
  <SideBar />
  <div
    class="min-h-screen w-full bg-slate-900 pt-20 sm:pl-20 sm:pt-0 md:ml-[20%] md:w-[80%] md:pl-0"
  >
    <div class="mx-auto w-full max-w-7xl px-4 pb-4 sm:p-6 lg:p-10">
      <section
        class="flex flex-col items-start gap-2 pb-10 sm:flex-row sm:gap-6 xl:items-center"
      >
        <img
          :src="movie?.poster ?? defaultPhoto"
          :alt="movie?.title"
          class="aspect-video object-contain object-center sm:aspect-[3/4] sm:max-w-52 sm:object-cover md:max-w-64 lg:max-w-80"
        />
        <div class="flex w-full flex-col gap-5 sm:gap-6 xl:gap-10">
          <div class="flex flex-col sm:gap-2 md:gap-3">
            <h5
              class="text-xl font-bold text-[#E1E1E1] sm:text-2xl md:text-3xl lg:text-4xl"
            >
              {{ movie?.title }}
              <span class="font-extralight text-[#E1E1E1]"
                >({{ movie?.release_year }})</span
              >
            </h5>
            <div class="flex w-fit flex-wrap items-center gap-2">
              <p
                v-for="genre in movie?.genre?.split(',')"
                :key="genre"
                class="rounded-full border border-slate-500 bg-slate-800 px-2 py-[2px] text-xs text-slate-200 md:text-sm xl:text-base"
              >
                {{ genre.trim() }}
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-1 xl:gap-2">
            <h5 class="text-lg font-bold text-slate-200 lg:text-xl">
              Overview
            </h5>
            <p
              class="text-xs font-[320] text-slate-200 sm:text-sm lg:text-base"
            >
              After more than thirty years of service as one of the Navy’s top
              aviators, and dodging the advancement in rank that would ground
              him, Pete “Maverick” Mitchell finds himself training a detachment
              of TOP GUN graduates for a specialized mission the likes of which
              no living pilot has ever seen.
            </p>
          </div>

          <div class="flex items-center gap-6 sm:gap-10">
            <div
              class="flex flex-col justify-center gap-1 rounded-lg border border-[#A41B1B] bg-slate-700 px-3 py-2 text-center"
            >
              <p class="text-xl font-bold text-slate-200">Score</p>
              <p class="text-4xl font-bold text-[#F33F3F]">
                {{ movie?.score }}
              </p>
            </div>
            <div class="grid grid-cols-2 gap-2 xl:flex">
              <button
                class="col-span-2 rounded bg-[#F33F3F] px-3 py-1 text-sm font-bold text-black hover:bg-red-600 sm:py-2 lg:px-6 lg:py-4 lg:text-base"
              >
                Add to Watchlist
              </button>
              <button
                class="col-span-1 rounded bg-yellow-500 px-3 text-base font-bold text-black hover:bg-yellow-600"
              >
                <Icon
                  icon="lucide:edit"
                  width="30"
                  height="30"
                  class="mx-auto scale-75 text-white xl:scale-100"
                />
              </button>
              <button
                class="col-span-1 rounded bg-red-700 px-3 text-base font-bold text-black hover:bg-red-800"
              >
                <Icon
                  icon="tabler:trash"
                  width="30"
                  height="30"
                  class="mx-auto scale-75 text-white xl:scale-100"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  </div>
</template>
