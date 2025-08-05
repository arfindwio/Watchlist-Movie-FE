// Axios
import api from "../lib/axios";

// Types
import type {
  CreateWatchlistPayload,
  CreateWatchlistResponse,
  MoviesListResponse,
} from "../types/movies";

// Utils
import { createWatchlistFormData } from "../utils/movies";

export async function createwatchlist(
  payload: CreateWatchlistPayload,
): Promise<CreateWatchlistResponse> {
  const formData = createWatchlistFormData(payload);

  const res = await api.post("/movies/watchlist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function getMovies(): Promise<MoviesListResponse> {
  const res = await api.get("/movies");

  return res.data;
}
