<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Stores
import { useAuthStore } from "../stores/auth";

// Types
import type { LoginPayload } from "../types/auth";

const router = useRouter();
const auth = useAuthStore();

const email = ref("");
const password = ref("");
const error = ref<string | null>(null);

const handleLogin = async () => {
  error.value = null;
  try {
    const payload: LoginPayload = {
      email: email.value,
      password: password.value,
    };
    const login = await auth.loginUser(payload);

    if (login) router.push("/");
  } catch (err: any) {
    error.value = err?.response?.data?.message || "Login failed.";
  }
};
</script>

<template>
  <div
    class="relative flex h-screen items-center justify-center bg-[url('./images/background-movies.jpg')] bg-cover bg-center"
  >
    <div class="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

    <div
      class="relative z-10 flex h-screen w-full flex-col justify-center rounded-md bg-black bg-opacity-75 p-10 sm:h-auto sm:w-[45%] md:w-[40%] lg:w-[35%]"
    >
      <h1 class="mb-6 text-center text-3xl font-bold text-[#e50914]">
        WATCHLISTS
      </h1>
      <div class="mb-4 w-full">
        <p class="mx-auto max-w-60 text-xl font-bold text-white sm:max-w-none">
          Login
        </p>
      </div>
      <form
        class="mx-auto flex w-full max-w-60 flex-col gap-4 sm:max-w-none"
        @submit.prevent="handleLogin"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          class="focus:border-1 w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white"
          v-model="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="current-password"
          class="focus:border-1 w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white"
          v-model="password"
        />
        <button
          type="submit"
          class="rounded-md bg-[#e50914] py-2 text-center text-base font-semibold text-white"
          :disabled="auth.loading"
        >
          Login
        </button>
        <p class="text-center font-normal text-slate-400">ATAU</p>
        <router-link
          to="/register"
          class="rounded-md bg-slate-600 bg-opacity-60 py-2 text-center text-base font-semibold text-white"
        >
          Register
        </router-link>
      </form>
    </div>
  </div>
</template>
