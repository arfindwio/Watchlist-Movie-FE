export interface CreateEditWatchlistPayload {
  title: string;
  poster: File | null;
  release_year: number;
  genre: string;
  watched: number;
  score: number;
}

export interface Movies {
  id: number;
  user_id: number;
  title: string;
  poster: string;
  release_year: number;
  genre: string;
  watched: boolean;
  score: number;
  created_at: string;
  updated_at: string;
}

export interface MoviesListResponse {
  status: boolean;
  message: string;
  data: {
    watched: Movies[];
    unwatched: Movies[];
  };
}

export interface CreateEditWatchlistResponse {
  status: boolean;
  message: string;
  data: Movies;
}

export interface WatchedMoviesResponse {
  status: boolean;
  message: string;
  data: Movies[];
}
export interface UnatchedMoviesResponse {
  status: boolean;
  message: string;
  data: Movies[];
}

export interface MovieDetailResponse {
  status: boolean;
  message: string;
  data: Movies;
}

export interface DeleteMovieResponse {
  status: boolean;
  message: string;
  data: null;
}
