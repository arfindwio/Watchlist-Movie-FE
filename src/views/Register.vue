<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// Stores
import { useAuthStore } from "../stores/auth";

// Types
import type { RegisterPayload } from "../types/auth";

const router = useRouter();
const auth = useAuthStore();

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const error = ref<string | null>(null);

const handleRegister = async () => {
  error.value = null;
  try {
    const payload: RegisterPayload = {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    };

    const register = await auth.registerUser(payload);

    if (register) router.push("/");
  } catch (err: any) {
    error.value = err?.response?.data?.message || "Register failed.";
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
          Register
        </p>
      </div>
      <form
        class="mx-auto flex w-full max-w-60 flex-col gap-4 sm:max-w-none"
        @submit.prevent="handleRegister"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          autocomplete="name"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none"
          v-model="name"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          autocomplete="email"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none"
          v-model="email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="new-password"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none"
          v-model="password"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          autocomplete="new-password"
          class="w-full rounded-md border-2 border-slate-500 bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none"
          v-model="passwordConfirmation"
        />
        <button
          type="submit"
          class="rounded-md bg-[#e50914] py-2 text-center text-base font-semibold text-white hover:bg-red-700"
          :disabled="auth.loading"
        >
          Register
        </button>
        <p class="text-center font-normal text-slate-400">ATAU</p>
        <router-link
          to="/login"
          class="rounded-md bg-slate-600 bg-opacity-60 py-2 text-center text-base font-semibold text-white hover:bg-opacity-100"
        >
          Login
        </router-link>
      </form>
    </div>
  </div>
</template>
