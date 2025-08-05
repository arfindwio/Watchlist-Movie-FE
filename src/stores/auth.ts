import { defineStore } from "pinia";
import { ref, watch } from "vue";

// Services
import { login, register, fetchProfile } from "../services/auth";

// Types
import type { LoginPayload, RegisterPayload, User } from "../types/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem("token"));
  const loading = ref(false);

  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    user.value = JSON.parse(savedUser);
  }

  async function loginUser(payload: LoginPayload) {
    loading.value = true;
    try {
      const data = await login(payload);
      token.value = data.data.token;
      localStorage.setItem("token", data.data.token);
      await getProfile();

      return true;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function registerUser(payload: RegisterPayload) {
    loading.value = true;
    try {
      const data = await register(payload);
      token.value = data.data.token;
      localStorage.setItem("token", data.data.token);
      await getProfile();

      return true;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function getProfile() {
    const data = await fetchProfile();
    user.value = data.data;
  }

  function logout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem("token");
  }

  watch(token, (newToken) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  });

  watch(user, (newUser) => {
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  });

  return { user, token, loading, loginUser, registerUser, getProfile, logout };
});
