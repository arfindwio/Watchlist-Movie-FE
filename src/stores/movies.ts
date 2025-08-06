import { defineStore } from "pinia";
import { ref, watch } from "vue";

// Services
import { getMovies } from "../services/movies";

// Types
import type { Movies } from "../types/movies";

export const useMoviesStore = defineStore("movies", () => {
  const movie = ref<Movies | null>(null);
  const watched = ref<Movies[]>([]);
  const unwatched = ref<Movies[]>([]);
  const searchQuery = ref<string>("");
  const searchResults = ref<Movies[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  function loadFromStorage() {
    const movieStr = localStorage.getItem("movie_detail");
    const watchedStr = localStorage.getItem("movies_watched");
    const unwatchedStr = localStorage.getItem("movies_unwatched");

    if (movieStr) movie.value = JSON.parse(movieStr);
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

  function setMovieDetail(data: Movies) {
    movie.value = data;
  }

  function searchMovies(query: string) {
    searchQuery.value = query.toLowerCase();

    const allMovies = [...watched.value, ...unwatched.value];

    searchResults.value = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.value),
    );
  }

  watch(
    watched,
    (newVal) => {
      if (newVal && newVal.length > 0) {
        localStorage.setItem("movies_watched", JSON.stringify(newVal));
      } else {
        localStorage.removeItem("movies_watched");
      }
    },
    { deep: true },
  );

  watch(
    unwatched,
    (newVal) => {
      if (newVal && newVal.length > 0) {
        localStorage.setItem("movies_unwatched", JSON.stringify(newVal));
      } else {
        localStorage.removeItem("movies_unwatched");
      }
    },
    { deep: true },
  );

  watch(
    movie,
    (newVal) => {
      if (newVal) {
        localStorage.setItem("movie_detail", JSON.stringify(newVal));
      } else {
        localStorage.removeItem("movie_detail");
      }
    },
    { deep: true },
  );

  loadFromStorage();

  return {
    movie,
    watched,
    unwatched,
    searchQuery,
    searchResults,
    loading,
    error,
    fetchMovies,
    setMovieDetail,
    searchMovies,
  };
});
