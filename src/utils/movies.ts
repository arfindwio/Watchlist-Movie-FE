// Types
import type { CreateEditWatchlistPayload } from "../types/movies";

export function createEditWatchlistFormData(
  payload: CreateEditWatchlistPayload,
): FormData {
  const formData = new FormData();

  formData.append("title", payload.title);
  formData.append("release_year", String(payload.release_year));
  formData.append("genre", payload.genre);
  formData.append("watched", String(payload.watched));
  formData.append("score", String(payload.score));
  if (payload.poster) {
    formData.append("poster", payload.poster);
  }

  return formData;
}
