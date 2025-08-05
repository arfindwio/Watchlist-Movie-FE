import { defineStore } from "pinia";
import { ref } from "vue";

// Services
import { login, fetchProfile } from "../services/auth";

// Types
import type { LoginPayload, User } from "../types/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(localStorage.getItem("token"));
  const loading = ref(false);

  async function loginUser(payload: LoginPayload) {
    loading.value = true;
    try {
      const data = await login(payload);
      console.log(data);
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
    user.value = data.data.user;
  }

  function logout() {
    token.value = null;
    user.value = null;
    localStorage.removeItem("token");
  }

  return { user, token, loading, loginUser, getProfile, logout };
});
