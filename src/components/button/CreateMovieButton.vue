<script lang="ts" setup>
import { ref } from "vue";

// Stores
import { useMoviesStore } from "../../stores/movies";

// Types
import type { CreateEditWatchlistPayload } from "../../types/movies";

// Icons
import { Icon } from "@iconify/vue";

const store = useMoviesStore();

const title = ref("");
const posterFile = ref<File | null>(null);
const releaseYear = ref("");
const genre = ref("");
const watched = ref(0);
const score = ref<number | null>(null);
const showModal = ref(false);

const loading = ref(false);
const error = ref<string | null>(null);

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement;
  posterFile.value = input.files?.[0] ?? null;
}

async function submitForm() {
  error.value = null;

  if (
    !title.value ||
    !posterFile.value ||
    !releaseYear.value ||
    !genre.value ||
    score.value === null
  ) {
    error.value = "Please fill all required fields.";
    return;
  }

  const payload: CreateEditWatchlistPayload = {
    title: title.value,
    poster: posterFile.value as any,
    release_year: parseInt(releaseYear.value),
    genre: genre.value,
    watched: watched.value,
    score: score.value,
  };

  loading.value = true;

  try {
    await store.createWatchlist(payload);

    title.value = "";
    posterFile.value = null;
    releaseYear.value = "";
    genre.value = "";
    watched.value = 0;
    score.value = null;
    showModal.value = false;
  } catch (e: any) {
    error.value =
      e?.response?.data?.message || e.message || "Unknown error occurred.";
  } finally {
    loading.value = false;
  }
}

function openModal() {
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<template>
  <button
    type="button"
    class="flex w-full items-center justify-center gap-1 rounded bg-[#F33F3F] px-1 py-1 text-base font-semibold text-black hover:bg-red-600 md:w-full md:px-3 md:py-2"
    @click="openModal"
  >
    <Icon
      icon="mdi:movie-plus"
      width="24"
      height="24"
      class="md:scale-125 lg:scale-100"
    />
    <p class="text-sm font-bold">Create Whitelist</p>
  </button>

  <div
    class="fixed left-0 top-0 z-20 flex h-screen w-screen bg-black bg-opacity-30"
    v-if="showModal"
  >
    <form
      class="relative left-1/2 top-1/2 flex h-fit max-h-[90vh] w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto rounded-md bg-slate-500 p-3 sm:w-[50%] sm:p-5"
      @submit.prevent="submitForm"
    >
      <button
        type="button"
        class="absolute right-0 top-0 rounded-sm bg-opacity-30 p-1"
        @click="closeModal"
      >
        <Icon
          icon="material-symbols:close-rounded"
          width="24"
          height="24"
          class="text-white"
        />
      </button>
      <h5 class="text-center text-xl font-bold text-[#F33F3F] sm:text-3xl">
        Create Watchlist
      </h5>
      <div class="flex flex-col gap-2 sm:gap-4">
        <div class="flex flex-col">
          <label
            for="title"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
            >Title <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Input title"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            v-model="title"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="poster"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
            >Poster <span class="text-red-500">*</span></label
          >
          <input
            type="file"
            id="poster"
            name="poster"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            accept="image/*"
            @change="onFileChange"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="releaseYear"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
            >Release Year <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="releaseYear"
            name="releaseYear"
            placeholder="Input release year"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            v-model="releaseYear"
          />
        </div>
        <div class="flex flex-col">
          <label
            for="genre"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
            >Genre <span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Input genre"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            v-model="genre"
          />
        </div>
        <div class="flex flex-col">
          <label
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Watched <span class="text-red-500">*</span>
          </label>
          <select
            v-model="watched"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            required
          >
            <option :value="0" selected class="text-black">No</option>
            <option :value="1" class="text-black">Yes</option>
          </select>
        </div>
        <div class="flex flex-col">
          <label
            for="score"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
            >Score <span class="text-red-500">*</span></label
          >
          <input
            type="number"
            min="1"
            max="100"
            id="score"
            name="score"
            placeholder="Input score"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 sm:text-base"
            v-model.number="score"
          />
        </div>
      </div>
      <button
        type="submit"
        class="mt-2 w-full rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600"
        :disabled="loading"
      >
        Create
      </button>
    </form>
  </div>
</template>
