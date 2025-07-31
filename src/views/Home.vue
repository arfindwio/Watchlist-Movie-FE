<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";

// Images
import SideBar from "../components/sidebar/SideBar.vue";
</script>

<template>
  <div class="flex min-h-screen w-full">
    <SideBar />
    <div class="ml-[20%] w-[80%] bg-slate-900">
      <div class="mx-auto w-full max-w-7xl p-10">
        <section
          class="flex w-full flex-col gap-8 rounded-md border bg-slate-700 p-4 text-[#e50914]"
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
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
          </div>
        </section>

        <section class="flex flex-col gap-6 py-16">
          <h5 class="text-3xl font-bold text-white">Watched Movies</h5>
          <div class="grid grid-cols-5 gap-8">
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
            <router-link
              to="/movie-detail"
              class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
            >
              <img
                src="../assets/images/poster.png"
                alt="Poster"
                class="aspect-[3/4] max-h-[340px] object-cover object-center"
              />
              <div class="p-2">
                <h5 class="text-base font-medium text-[#E1E1E1]">
                  Top Gun: Maverick
                </h5>
                <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
              </div>
              <div
                class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
              >
                <Icon
                  icon="material-symbols:star"
                  width="18"
                  height="18"
                  class="text-white"
                />
                <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
              </div>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
