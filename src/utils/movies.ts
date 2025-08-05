import type { CreateWatchlistPayload } from "../types/movies";

export function createWatchlistFormData(
  payload: CreateWatchlistPayload,
): FormData {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("poster", payload.poster);
  formData.append("release_year", String(payload.release_year));
  formData.append("genre", payload.genre);
  formData.append("watched", String(payload.watched));
  formData.append("score", String(payload.score));

  return formData;
}
