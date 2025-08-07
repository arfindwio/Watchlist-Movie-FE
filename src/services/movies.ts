// Axios
import api from "../lib/axios";

// Types
import type {
  CreateEditWatchlistPayload,
  MoviesListResponse,
  CreateEditWatchlistResponse,
  UnatchedMoviesResponse,
  WatchedMoviesResponse,
  MovieDetailResponse,
  DeleteMovieResponse,
} from "../types/movies";

// Utils
import { createEditWatchlistFormData } from "../utils/movies";

export async function getMovies(): Promise<MoviesListResponse> {
  const res = await api.get("/movies");

  return res.data;
}

export async function createwatchlist(
  payload: CreateEditWatchlistPayload,
): Promise<CreateEditWatchlistResponse> {
  const formData = createEditWatchlistFormData(payload);

  const res = await api.post("/movies/watchlist", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function getUnwatchedMovies(): Promise<UnatchedMoviesResponse> {
  const res = await api.get("/movies/unwatched");

  return res.data;
}

export async function getWatchedMovies(): Promise<WatchedMoviesResponse> {
  const res = await api.get("/movies/watched");

  return res.data;
}

export async function getMovieDetail(
  id: number,
): Promise<{ data: MovieDetailResponse }> {
  const res = await api.get(`/movies/${id}`);

  return res.data;
}

export async function editMovieDetail(
  id: number,
  payload: CreateEditWatchlistPayload,
): Promise<{ data: CreateEditWatchlistResponse }> {
  const formData = createEditWatchlistFormData(payload);

  const res = await api.post(`/movies/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res;
}

export async function deleteMovieDetail(
  id: number,
): Promise<{ data: DeleteMovieResponse }> {
  const res = await api.delete(`/movies/${id}`);

  return res;
}
