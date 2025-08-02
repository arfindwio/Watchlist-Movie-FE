import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Watchlist from "../views/Watchlist.vue";
import Watched from "../views/Watched.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/watchlist", name: "Watchlist Movie", component: Watchlist },
  { path: "/watched", name: "Watched Movie", component: Watched },
  { path: "/movie-detail", name: "Movie Detail", component: MovieDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
