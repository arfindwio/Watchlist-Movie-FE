import { defineStore } from "pinia";
import { ref, watch } from "vue";

// Services
import { getMovies } from "../services/movies";

// Types
import type { Movies } from "../types/movies";

export const useMoviesStore = defineStore("movies", () => {
  const watched = ref<Movies[]>([]);
  const unwatched = ref<Movies[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  function loadFromStorage() {
    const watchedStr = localStorage.getItem("movies_watched");
    const unwatchedStr = localStorage.getItem("movies_unwatched");

    if (watchedStr) watched.value = JSON.parse(watchedStr);
    if (unwatchedStr) unwatched.value = JSON.parse(unwatchedStr);
  }

  async function fetchMovies() {
    loading.value = true;
    try {
      const data = await getMovies();
      watched.value = data.data.watched;
      unwatched.value = data.data.unwatched;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  watch(
    watched,
    (newVal) => {
      localStorage.setItem("movies_watched", JSON.stringify(newVal));
    },
    { deep: true },
  );

  watch(
    unwatched,
    (newVal) => {
      localStorage.setItem("movies_unwatched", JSON.stringify(newVal));
    },
    { deep: true },
  );

  loadFromStorage();

  return {
    watched,
    unwatched,
    loading,
    error,
    fetchMovies,
  };
});
