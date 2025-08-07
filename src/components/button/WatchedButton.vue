<script lang="ts" setup>
import { ref, computed } from "vue";

// Stores
import { useMoviesStore } from "../../stores/movies";

// Types
import type { CreateEditWatchlistPayload } from "../../types/movies";

const moviesStore = useMoviesStore();

const movie = computed(() => moviesStore.movie);

const loading = ref(false);
const error = ref<string | null>(null);

async function submitForm() {
  error.value = null;

  if (!movie.value) return;

  const payload: CreateEditWatchlistPayload = {
    title: movie?.value?.title,
    poster: null,
    release_year: Number(movie?.value?.release_year),
    genre: movie?.value?.genre,
    watched: movie?.value?.watched ? 0 : 1,
    score: movie?.value?.score,
  };

  loading.value = true;

  try {
    await moviesStore.editMovie(movie?.value?.id, payload);
  } catch (e: any) {
    error.value =
      e?.response?.data?.message || e.message || "Unknown error occurred.";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <button
    type="button"
    class="col-span-2 rounded bg-[#F33F3F] px-3 py-1 text-sm font-bold text-black hover:bg-red-600 sm:py-2 lg:px-6 lg:py-4 lg:text-base"
    @click="submitForm"
  >
    {{ moviesStore.movie?.watched ? "Mark as Unwatched" : "Mark as Watched" }}
  </button>
</template>
