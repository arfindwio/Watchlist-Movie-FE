<script lang="ts" setup>
import { ref, computed } from "vue";

// Stores
import { useAuthStore } from "../stores/auth";

// Types
import type { EditProfilePayload } from "../types/auth";

// Icons
import { Icon } from "@iconify/vue";

// Components
import SideBar from "../components/sidebar/SideBar.vue";
import Footer from "../components/footer/Footer.vue";

// Images
import defaultPhoto from "../assets/images/photo-profile.png";

const authStore = useAuthStore();

const user = computed(() => authStore.user);
const photoSrc = computed(() => {
  if (tempPhoto.value) {
    return tempPhoto.value;
  }
  if (authStore.user?.photo) {
    return authStore.user.photo;
  }
  return defaultPhoto;
});

const name = ref(user.value?.name || "");
const newPhotoFile = ref<File | null>(null);
const tempPhoto = ref<string | null>(null);
const error = ref<string | null>(null);

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  // reset foto preview lama kalau ada
  if (tempPhoto.value) {
    URL.revokeObjectURL(tempPhoto.value);
  }

  // set preview baru dan simpan file-nya
  tempPhoto.value = URL.createObjectURL(file);
  newPhotoFile.value = file;
}

async function handleUpdateProfile() {
  error.value = null;

  try {
    if (!name.value.trim()) return;

    const payload: EditProfilePayload = {
      name: name.value.trim(),
      photo: newPhotoFile.value,
    };
    const success = await authStore.updateProfile(payload);
    if (success) {
      tempPhoto.value = null;
      newPhotoFile.value = null;
    }
  } catch (err: any) {
    error.value = err?.response?.data?.message || "Login failed.";
  }
}

async function handleDeletePhoto() {
  error.value = null;
  try {
    await authStore.removePhotoProfile();
  } catch (err: any) {
    error.value = err?.response?.data?.message || "Login failed.";
  }
}

function handleLogout() {
  authStore.logout();
}
</script>

<template>
  <SideBar />
  <div
    class="min-h-screen w-full bg-slate-900 pt-20 sm:pl-20 sm:pt-0 md:ml-[20%] md:w-[80%] md:pl-0"
  >
    <div class="mx-auto w-full max-w-7xl px-4 pb-4 sm:p-6 lg:p-10">
      <section
        class="mb-10 flex flex-col items-center justify-center overflow-hidden rounded-t-md border border-[#A41B1B] bg-slate-700"
      >
        <div class="grid w-full grid-cols-2">
          <router-link
            to="/profile"
            class="col-span-1 flex w-full items-center justify-center border border-[#A41B1B] bg-[#A41B1B] px-4 py-2 text-center text-lg font-bold text-black sm:text-xl lg:text-2xl"
          >
            Profile
          </router-link>
          <router-link
            to="/change-password"
            class="col-span-1 flex w-full items-center justify-center border border-[#A41B1B] px-4 py-2 text-center text-lg font-bold text-[#A41B1B] hover:bg-[#A41B1B] hover:bg-[A41B1B] hover:text-black sm:text-xl xl:text-2xl"
          >
            Change Password
          </router-link>
        </div>
        <form class="flex w-full flex-col items-center gap-6 p-4 sm:p-6 md:p-8">
          <div class="flex flex-col items-center gap-2">
            <label
              for="photoProfile"
              class="flex items-center justify-center gap-2 text-center text-base font-medium text-slate-200 md:text-lg"
            >
              <img
                :src="photoSrc"
                alt="Photo Profile"
                class="aspect-square max-h-24 max-w-24 cursor-pointer rounded-full border-2 border-[#A41B1B] object-cover object-center"
              />
            </label>
            <div
              class="flex cursor-pointer items-center justify-center gap-2 text-center text-lg font-medium text-slate-200"
              @click="handleDeletePhoto"
            >
              <Icon icon="lucide:camera" width="30" height="30" /> Delete avatar
            </div>
            <input
              type="file"
              class="hidden"
              id="photoProfile"
              name="photoProfile"
              @change="handleFileChange"
            />
          </div>
          <div class="flex w-full flex-col items-center gap-4">
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label
                for="name"
                class="text-base font-bold text-slate-200 md:text-lg"
                >Name <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Input name"
                class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-slate-200"
                v-model="name"
              />
            </div>
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label class="text-base font-bold text-slate-200 md:text-lg"
                >Email <span class="text-red-500">*</span></label
              >
              <p
                class="w-full rounded border border-slate-500 bg-transparent px-2 py-1 text-slate-500"
              >
                {{ user?.email }}
              </p>
            </div>
          </div>
          <button
            class="w-full rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600 sm:w-[50%] lg:w-[40%] xl:w-[30%]"
            @click.prevent="handleUpdateProfile"
          >
            Save
          </button>
          <router-link
            to="/login"
            class="w-full rounded-md border border-[#F33F3F] py-1 text-center text-lg font-bold text-[#F33F3F] hover:bg-[#F33F3F] hover:text-black sm:w-[50%] lg:w-[40%] xl:w-[30%]"
            @click="handleLogout"
          >
            Logout
          </router-link>
        </form>
      </section>

      <Footer />
    </div>
  </div>
</template>
