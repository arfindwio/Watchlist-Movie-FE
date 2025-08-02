import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Watchlist from "../views/Watchlist.vue";
import Watched from "../views/Watched.vue";
import Movies from "../views/Movies.vue";
import MovieDetail from "../views/MovieDetail.vue";
import UserProfile from "../views/UserProfile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/watchlist", name: "Watchlist Movie", component: Watchlist },
  { path: "/watched", name: "Watched Movie", component: Watched },
  { path: "/movies", name: "Search Movies", component: Movies },
  { path: "/movie-detail", name: "Movie Detail", component: MovieDetail },
  { path: "/profile", name: "User Profile", component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
