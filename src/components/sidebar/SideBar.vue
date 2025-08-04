<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="fixed bottom-0 left-0 top-0 z-10 hidden bg-black px-2 py-2 sm:flex sm:w-[20%] sm:max-w-20 sm:py-4 md:max-w-none md:px-3 lg:px-6"
  >
    <div
      class="relative flex h-full w-full flex-col items-center gap-6 md:items-start"
    >
      <router-link
        to="/"
        class="hidden w-full text-center font-bold text-[#e50914] md:block md:text-xl lg:text-2xl xl:text-3xl"
      >
        WATCHLISTS
      </router-link>
      <button
        class="hidden w-fit rounded-sm bg-slate-400 bg-opacity-30 p-1 sm:inline-block md:hidden"
      >
        <Icon
          icon="ci:hamburger-md"
          width="24"
          height="24"
          class="text-white"
        />
      </button>
      <input
        type="text"
        placeholder="Search"
        class="hidden w-full rounded border border-slate-600 bg-transparent px-3 py-2 text-sm focus:text-white md:inline lg:px-4 lg:py-2 lg:text-base"
      />
      <ul
        class="flex w-full flex-col items-center gap-2 md:items-start md:gap-3"
      >
        <router-link
          to="/"
          class="flex w-fit gap-2 rounded bg-slate-500 bg-opacity-70 px-2 py-[6px] text-base text-white md:w-full md:px-3 md:py-2"
        >
          <Icon icon="bx:home" width="24" height="24" />
          <p class="hidden md:block">Home</p>
        </router-link>
        <router-link
          to="/watchlist"
          class="flex w-fit gap-2 rounded px-2 py-[6px] text-base text-white hover:bg-slate-500 hover:bg-opacity-35 md:w-full md:px-3 md:py-2"
        >
          <Icon icon="mdi:movie-star" width="24" height="24" />
          <p class="hidden md:block">Watchlist</p>
        </router-link>
        <router-link
          to="/watched"
          class="flex w-fit gap-2 rounded px-2 py-[6px] text-base text-white hover:bg-slate-500 hover:bg-opacity-35 md:w-full md:px-3 md:py-2"
        >
          <Icon icon="mdi:movie-check" width="24" height="24" />
          <p class="hidden md:block">Watched</p>
        </router-link>
      </ul>
      <button
        class="flex w-fit items-center justify-center gap-1 rounded bg-[#F33F3F] px-1 py-1 text-base font-semibold text-black hover:bg-red-600 md:w-full md:px-3 md:py-2"
      >
        <Icon
          icon="mdi:movie-plus"
          width="24"
          height="24"
          class="md:scale-125 lg:scale-100"
        />
        <p class="hidden text-sm font-bold md:block">Create Whitelist</p>
      </button>

      <button
        class="absolute bottom-5 flex w-fit items-center gap-3 truncate rounded border border-white bg-transparent px-2 py-2 text-start text-base uppercase text-slate-300 md:w-full md:px-3 md:py-2"
      >
        <p class="rounded-full bg-white p-1 text-black">
          <Icon icon="ri:user-line" width="22" height="22" />
        </p>
        <p class="hidden md:block">Guest</p>
      </button>
    </div>
  </div>

  <!-- Mobile View -->
  <div class="fixed z-10 flex w-full items-center bg-black px-3 py-4 sm:hidden">
    <button class="rounded-sm bg-slate-400 bg-opacity-40 p-1">
      <Icon icon="ci:hamburger-md" width="20" height="20" class="text-white" />
    </button>
    <router-link
      to="/"
      class="w-full text-center text-2xl font-bold text-[#e50914]"
    >
      WATCHLISTS
    </router-link>
  </div>

  <!-- Open SideBar Mobile-->
  <!-- <div class="fixed z-10 h-screen w-screen bg-black bg-opacity-70">
    <div class="fixed flex h-screen w-full max-w-xs flex-col bg-black">
      <div class="relative flex h-full w-full flex-col">
        <div class="flex w-full justify-between border-b border-slate-700 p-4">
          <h1 class="text-2xl font-bold text-[#e50914]">WATCHLISTS</h1>
          <button class="rounded-sm bg-slate-400 bg-opacity-30 p-1">
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
              class="text-white"
            />
          </button>
        </div>
        <ul class="flex w-full flex-col gap-3 p-4">
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
        <div class="absolute bottom-5 w-full p-4">
          <button
            class="flex w-full items-center gap-3 truncate rounded border border-white bg-transparent px-3 py-2 text-start text-base uppercase text-slate-300"
          >
            <p class="rounded-full bg-white p-1 text-black">
              <Icon icon="ri:user-line" width="22" height="22" />
            </p>
            Guest
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>
