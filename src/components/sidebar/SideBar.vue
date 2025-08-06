<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

// Stores
import { useAuthStore } from "../../stores/auth";

// Components
import CreateMovieButton from "../button/CreateMovieButton.vue";

// Icons
import { Icon } from "@iconify/vue";

// Images
import defaultPhoto from "../../assets/images/photo-profile.png";

const route = useRoute();
const authStore = useAuthStore();
const router = useRouter();

const query = ref("");

const user = computed(() => authStore.user);
const isActiveHome = computed(() => route.path === "/");
const isActiveWatchlist = computed(() => route.path === "/watchlist");
const isActiveWatched = computed(() => route.path === "/watched");
const isMobileSidebarOpen = ref(false);

const windowWidth = ref(window.innerWidth);
const isBetween640and767 = () =>
  windowWidth.value >= 640 && windowWidth.value <= 767;

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

function handleEnter() {
  if (query.value.trim() !== "") {
    router.push({ path: "/movies", query: { q: query.value } });
  }
}

function toggleMobileSidebar() {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value;
}

function closeMobileSidebar() {
  isMobileSidebarOpen.value = false;
}
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
        @click="toggleMobileSidebar"
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
        class="hidden w-full rounded border border-slate-600 bg-transparent px-3 py-2 text-sm text-white md:inline lg:px-4 lg:py-2 lg:text-base"
        v-model="query"
        @keyup.enter="handleEnter"
      />
      <ul
        class="flex w-full flex-col items-center gap-2 md:items-start md:gap-3"
      >
        <component
          :is="isBetween640and767() ? 'div' : 'router-link'"
          to="/"
          :class="[
            isActiveHome
              ? 'bg-slate-500 bg-opacity-70'
              : 'hover:bg-slate-500 hover:bg-opacity-35',
            'flex w-fit gap-2 rounded px-2 py-[6px] text-base text-white md:w-full md:px-3 md:py-2',
          ]"
        >
          <Icon icon="bx:home" width="24" height="24" />
          <p class="hidden md:block">Home</p>
        </component>
        <component
          :is="isBetween640and767() ? 'div' : 'router-link'"
          to="/watchlist"
          :class="[
            isActiveWatchlist
              ? 'bg-slate-500 bg-opacity-70'
              : 'hover:bg-slate-500 hover:bg-opacity-35',
            'flex w-fit gap-2 rounded px-2 py-[6px] text-base text-white md:w-full md:px-3 md:py-2',
          ]"
        >
          <Icon icon="mdi:movie-star" width="24" height="24" />
          <p class="hidden md:block">Watchlist</p>
        </component>
        <component
          :is="isBetween640and767() ? 'div' : 'router-link'"
          to="/watched"
          :class="[
            isActiveWatched
              ? 'bg-slate-500 bg-opacity-70'
              : 'hover:bg-slate-500 hover:bg-opacity-35',
            'flex w-fit gap-2 rounded px-2 py-[6px] text-base text-white md:w-full md:px-3 md:py-2',
          ]"
        >
          <Icon icon="mdi:movie-check" width="24" height="24" />
          <p class="hidden md:block">Watched</p>
        </component>
      </ul>
      <button
        type="button"
        class="flex w-full items-center justify-center gap-1 rounded bg-[#F33F3F] px-1 py-1 text-base font-semibold text-black hover:bg-red-600 md:hidden"
      >
        <Icon
          icon="mdi:movie-plus"
          width="24"
          height="24"
          class="md:scale-125 lg:scale-100"
        />
        <p class="hidden text-sm font-bold md:block">Create Whitelist</p>
      </button>
      <div class="hidden w-full md:block">
        <CreateMovieButton />
      </div>

      <router-link
        to="/profile"
        class="absolute bottom-5 flex w-fit items-center gap-3 truncate rounded border border-white bg-transparent px-2 py-2 text-start text-base uppercase text-slate-300 md:w-full md:px-3 md:py-2"
      >
        <img
          :src="user?.photo ?? defaultPhoto"
          loading="lazy"
          alt="Photo Profile"
          class="h-8 w-8"
        />
        <p class="hidden md:block">{{ user?.name }}</p>
      </router-link>
    </div>
  </div>

  <!-- Mobile View -->
  <div class="fixed z-10 flex w-full items-center bg-black px-3 py-4 sm:hidden">
    <button
      class="rounded-sm bg-slate-400 bg-opacity-40 p-1"
      @click="toggleMobileSidebar"
    >
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
  <div
    class="fixed z-10 h-screen w-screen bg-black bg-opacity-70 md:hidden"
    v-if="isMobileSidebarOpen"
  >
    <div class="fixed flex h-screen w-full max-w-xs flex-col bg-black">
      <div class="relative flex h-full w-full flex-col">
        <div class="flex w-full justify-between border-b border-slate-700 p-4">
          <h1 class="text-2xl font-bold text-[#e50914]">WATCHLISTS</h1>
          <button
            class="rounded-sm bg-slate-400 bg-opacity-30 p-1"
            @click="closeMobileSidebar"
          >
            <Icon
              icon="material-symbols:close-rounded"
              width="24"
              height="24"
              class="text-white"
            />
          </button>
        </div>
        <ul class="flex w-full flex-col gap-3 p-4">
          <input
            type="text"
            placeholder="Search"
            class="w-full rounded border border-slate-600 bg-transparent px-3 py-2 text-sm text-white md:inline lg:px-4 lg:py-2 lg:text-base"
            v-model="query"
            @keyup.enter="handleEnter"
          />
          <router-link
            to="/"
            class="flex cursor-pointer gap-2 rounded bg-slate-500 bg-opacity-70 px-3 py-2 text-base text-white"
            @click="closeMobileSidebar"
          >
            <Icon icon="bx:home" width="24" height="24" />
            Home
          </router-link>
          <router-link
            to="/watchlist"
            class="flex cursor-pointer gap-2 rounded px-3 py-2 text-base text-white hover:bg-slate-500 hover:bg-opacity-35"
            @click="closeMobileSidebar"
          >
            <Icon icon="mdi:movie-star" width="24" height="24" />
            Watchlist
          </router-link>
          <router-link
            to="/watched"
            class="flex cursor-pointer gap-2 rounded px-3 py-2 text-base text-white hover:bg-slate-500 hover:bg-opacity-35"
            @click="closeMobileSidebar"
          >
            <Icon icon="mdi:movie-check" width="24" height="24" />
            Watched
          </router-link>
          <CreateMovieButton />
          <!-- <button
            class="flex w-full items-center justify-center gap-1 rounded bg-[#F33F3F] px-3 py-2 text-base font-semibold text-black hover:bg-red-600"
          >
            <Icon
              icon="mdi:movie-plus"
              width="24"
              height="24"
              class="md:scale-125 lg:scale-100"
            />
            <p class="text-sm font-bold md:block">Create Whitelist</p>
          </button> -->
        </ul>
        <div class="absolute bottom-5 w-full p-4">
          <router-link
            to="/profile"
            class="flex w-full items-center gap-3 truncate rounded border border-white bg-transparent px-3 py-2 text-start text-base uppercase text-slate-300"
          >
            <img
              :src="user?.photo ?? defaultPhoto"
              loading="lazy"
              alt="Photo Profile"
              class="h-8 w-8"
            />
            {{ user?.name }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
