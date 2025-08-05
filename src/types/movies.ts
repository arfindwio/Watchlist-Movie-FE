export interface CreateWatchlistPayload {
  title: string;
  poster: string;
  release_year: number;
  genre: string;
  watched: boolean;
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

export interface CreateWatchlistResponse {
  status: boolean;
  message: string;
  data: Movies;
}

export interface MoviesListResponse {
  status: boolean;
  message: string;
  data: {
    watched: Movies[];
    unwatched: Movies[];
  };
}
