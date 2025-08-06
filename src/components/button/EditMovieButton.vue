<script lang="ts" setup>
import { ref, computed } from "vue";

// Stores
import { useMoviesStore } from "../../stores/movies";

// Types
import type { CreateEditWatchlistPayload } from "../../types/movies";

// Icons
import { Icon } from "@iconify/vue";

const store = useMoviesStore();

const movie = computed(() => store.movie);

const showModal = ref(false);

const title = ref("");
const posterFile = ref<File | null>(null);
const releaseYear = ref("");
const genre = ref("");
const watched = ref(0);
const score = ref<number | null>(null);
const currentPosterUrl = ref("");

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
    !releaseYear.value ||
    !genre.value ||
    score.value === null
  ) {
    error.value = "Please fill all required fields.";
    return;
  }

  if (!movie.value?.id) {
    error.value = "Movie ID not found.";
    return;
  }

  const payload: CreateEditWatchlistPayload = {
    title: title.value,
    poster: posterFile.value,
    release_year: parseInt(releaseYear.value),
    genre: genre.value,
    watched: watched.value,
    score: score.value,
  };

  loading.value = true;

  try {
    await store.editMovie(movie.value.id, payload);
    closeModal();
  } catch (e: any) {
    error.value =
      e?.response?.data?.message || e.message || "Unknown error occurred.";
  } finally {
    loading.value = false;
  }
}

function openModal() {
  if (!movie.value) return;

  error.value = null;
  title.value = movie.value.title || "";
  releaseYear.value = movie.value.release_year?.toString() || "";
  genre.value = movie.value.genre || "";
  watched.value = movie.value.watched ? 1 : 0;
  score.value = movie.value.score || null;
  currentPosterUrl.value = movie.value.poster || "";
  posterFile.value = null;
  showModal.value = true;
}

function closeModal() {
  error.value = null;
  showModal.value = false;
}
</script>

<template>
  <button
    @click="openModal"
    class="col-span-1 rounded bg-yellow-500 px-3 text-base font-bold text-black hover:bg-yellow-600"
  >
    <Icon
      icon="lucide:edit"
      width="30"
      height="30"
      class="mx-auto scale-75 text-white xl:scale-100"
    />
  </button>

  <div
    class="fixed left-0 top-0 z-20 flex h-screen w-screen bg-black bg-opacity-30"
    v-if="showModal"
    @click.self="closeModal"
  >
    <form
      class="relative left-1/2 top-1/2 flex h-fit max-h-[90vh] w-[80%] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto rounded-md bg-slate-500 p-3 sm:w-[50%] sm:p-5"
      @submit.prevent="submitForm"
    >
      <button
        type="button"
        class="absolute right-2 top-2 rounded-sm p-1 hover:bg-opacity-70"
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
        Edit Movie
      </h5>

      <div class="flex flex-col gap-2 sm:gap-4">
        <div class="flex flex-col">
          <label
            for="title"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Title <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Input title"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            v-model="title"
            required
          />
        </div>

        <div class="flex flex-col">
          <label
            for="poster"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Poster
          </label>

          <input
            type="file"
            id="poster"
            name="poster"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            accept="image/*"
            @change="onFileChange"
          />
        </div>

        <div class="flex flex-col">
          <label
            for="releaseYear"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Release Year <span class="text-red-500">*</span>
          </label>
          <input
            type="number"
            id="releaseYear"
            name="releaseYear"
            placeholder="Input release year"
            min="1900"
            :max="new Date().getFullYear() + 10"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            v-model="releaseYear"
            required
          />
        </div>

        <div class="flex flex-col">
          <label
            for="genre"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Genre <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Input genre"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            v-model="genre"
            required
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
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            required
          >
            <option :value="0" class="bg-slate-600 text-slate-200">No</option>
            <option :value="1" class="bg-slate-600 text-slate-200">Yes</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label
            for="score"
            class="text-sm font-bold text-slate-200 sm:text-base md:text-lg"
          >
            Score<span class="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="1"
            max="100"
            id="score"
            name="score"
            placeholder="Input score"
            class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-200 focus:border-[#F33F3F] focus:outline-none sm:text-base"
            v-model.number="score"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        class="flex-1 rounded-md bg-[#F33F3F] py-2 text-center text-lg font-bold text-black hover:bg-red-600 disabled:opacity-50"
        :disabled="loading"
      >
        Update
      </button>
    </form>
  </div>
</template>
