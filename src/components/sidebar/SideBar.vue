<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="fixed bottom-0 left-0 top-0 w-[20%] bg-black px-6 pt-4">
    <div class="relative flex h-full flex-col gap-6">
      <h1 class="text-center text-3xl font-bold text-[#e50914]">WATCHLISTS</h1>
      <input
        type="text"
        placeholder="Search"
        class="w-full rounded border border-slate-600 bg-transparent px-4 py-2 focus:text-white"
      />
      <ul class="flex flex-col gap-3">
        <router-link
          to="/"
          class="flex cursor-pointer gap-2 rounded bg-slate-500 bg-opacity-70 px-3 py-2 text-base text-white"
        >
          <Icon icon="bx:home" width="24" height="24" />
          Home
        </router-link>
        <router-link
          to="/watchlist"
          class="flex cursor-pointer gap-2 rounded px-3 py-2 text-base text-white hover:bg-slate-500 hover:bg-opacity-35"
        >
          <Icon icon="mdi:movie-star" width="24" height="24" />
          Watchlist
        </router-link>
        <router-link
          to="/watched"
          class="flex cursor-pointer gap-2 rounded px-3 py-2 text-base text-white hover:bg-slate-500 hover:bg-opacity-35"
        >
          <Icon icon="mdi:movie-check" width="24" height="24" />
          Watched
        </router-link>
      </ul>
      <button
        class="flex w-full items-center justify-center gap-1 rounded bg-[#e50914] px-3 py-2 text-center text-base font-semibold text-black"
      >
        <Icon icon="mdi:movie-plus" width="24" height="24" />
        Create Whitelist
      </button>

      <button
        class="absolute bottom-10 flex w-full items-center gap-3 truncate rounded border border-white bg-transparent px-3 py-2 text-start text-base uppercase text-slate-300"
      >
        <p class="rounded-full bg-white p-1 text-black">
          <Icon icon="ri:user-line" width="22" height="22" />
        </p>
        Guest
      </button>
    </div>
  </div>
</template>
