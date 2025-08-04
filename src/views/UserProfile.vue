<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";

// Images
import SideBar from "../components/sidebar/SideBar.vue";
import Footer from "../components/footer/Footer.vue";
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
            <img
              src="../assets/images/photo-profile.png"
              alt="Photo Profile"
              class="aspect-square max-h-24 max-w-24 rounded-full border-2 border-[#A41B1B] object-cover object-center"
            />
            <label
              for="photoProfile"
              class="flex items-center justify-center gap-2 text-center text-base font-medium text-slate-200 md:text-lg"
            >
              <Icon icon="lucide:camera" width="30" height="30" />
              Add an avatar
            </label>
            <input
              type="file"
              class="hidden"
              id="photoProfile"
              name="photoProfile"
            />
            <!-- <button
                class="flex items-center justify-center gap-2 text-center text-lg font-medium text-slate-200"
              >
                <Icon icon="lucide:camera" width="30" height="30" /> Delete
                avatar
              </button> -->
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
              />
            </div>
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label
                for="email"
                class="text-base font-bold text-slate-200 md:text-lg"
                >Email <span class="text-red-500">*</span></label
              >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Input email"
                class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-slate-200"
              />
            </div>
          </div>
          <button
            class="w-full rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600 sm:w-[50%] lg:w-[40%] xl:w-[30%]"
          >
            Save
          </button>
          <button
            class="w-full rounded-md border border-[#F33F3F] py-1 text-center text-lg font-bold text-[#F33F3F] hover:bg-[#F33F3F] hover:text-black sm:w-[50%] lg:w-[40%] xl:w-[30%]"
          >
            Logout
          </button>
        </form>
      </section>

      <Footer />
    </div>
  </div>
</template>
