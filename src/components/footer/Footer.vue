<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="flex flex-col gap-2">
    <div class="grid grid-cols-1 gap-6 py-4 sm:grid-cols-3 sm:gap-4">
      <div class="col-span-1 flex flex-col gap-2 sm:gap-4 lg:gap-6">
        <h4 class="text-3xl font-bold text-[#e50914] sm:text-2xl lg:text-3xl">
          WATCHLISTS
        </h4>
        <div class="flex flex-col gap-2">
          <h5 class="text-xl font-bold text-white">Contact Us</h5>
          <ul class="flex w-full gap-2">
            <a
              href="https://arfin-portfolio.vercel.app/"
              class="w-fit rounded-lg bg-slate-300 p-1 text-slate-800"
            >
              <Icon icon="mdi:web" width="30" height="30" />
            </a>
            <a
              href="https://www.github.com/arfindwio"
              class="w-fit rounded-lg bg-slate-300 p-1 text-slate-800"
            >
              <Icon icon="mdi:github" width="30" height="30" />
            </a>
            <a
              href="https://www.linkedin.com/in/arfindwioctavianto/"
              class="w-fit rounded-lg bg-slate-300 p-1 text-slate-800"
            >
              <Icon icon="ri:linkedin-fill" width="30" height="30" />
            </a>
          </ul>
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-2 sm:gap-4">
        <h5 class="text-xl font-bold text-white">Explore</h5>
        <ul class="flex w-full flex-col gap-1 sm:gap-2">
          <router-link
            to="/home"
            class="text-base text-slate-200 hover:text-white"
          >
            Home
          </router-link>
          <router-link
            to="/home"
            class="text-base text-slate-200 hover:text-white"
          >
            Watchlist
          </router-link>
          <router-link
            to="/home"
            class="text-base text-slate-200 hover:text-white"
          >
            Watched
          </router-link>
        </ul>
      </div>
      <div class="col-span-1 flex flex-col gap-2 sm:gap-4">
        <h5 class="text-xl font-bold text-white">Help</h5>
        <ul class="flex w-full flex-col gap-1 sm:gap-2">
          <li class="text-base font-normal text-slate-200">Contact Us</li>
          <li class="text-base font-normal text-slate-200">Policy Report</li>
          <li class="text-base font-normal text-slate-200">Policies</li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-500 pt-4 text-center">
      <p class="w-full text-sm font-semibold text-white sm:text-base">
        © 2025 arfindwio. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>
