<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";

// Images
import SideBar from "../components/sidebar/SideBar.vue";
import Footer from "../components/footer/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen w-full">
    <SideBar />
    <div class="ml-[20%] w-[80%] bg-slate-900">
      <div class="mx-auto w-full max-w-7xl p-10 pb-4">
        <section
          class="mb-10 flex flex-col items-center justify-center overflow-hidden rounded-t-md border border-[#A41B1B] bg-slate-700"
        >
          <div class="grid w-full grid-cols-2">
            <h1
              class="col-span-1 w-full cursor-pointer border border-[#A41B1B] bg-[#A41B1B] px-4 py-2 text-center text-2xl font-bold text-black"
            >
              Profile
            </h1>
            <h1
              class="col-span-1 w-full cursor-pointer border border-[#A41B1B] px-4 py-2 text-center text-2xl font-bold text-[#A41B1B] hover:bg-[#A41B1B] hover:bg-[A41B1B] hover:text-black"
            >
              Change Password
            </h1>
          </div>
          <form class="flex w-full flex-col items-center gap-6 p-8">
            <div class="flex flex-col items-center gap-2">
              <img
                src="../assets/images/photo-profile.png"
                alt="Photo Profile"
                class="aspect-square max-h-24 max-w-24 rounded-full border-2 border-[#A41B1B] object-cover object-center"
              />
              <label
                for="photoProfile"
                class="flex items-center justify-center gap-2 text-center text-lg font-medium text-slate-200"
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
              <div class="flex w-[30%] flex-col">
                <label for="name" class="text-lg font-bold text-slate-200"
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
              <div class="flex w-[30%] flex-col">
                <label for="name" class="text-lg font-bold text-slate-200"
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
              class="w-[30%] rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600"
            >
              Save
            </button>
            <button
              class="w-[30%] rounded-md border border-[#F33F3F] py-1 text-center text-lg font-bold text-[#F33F3F] hover:bg-[#F33F3F] hover:text-black"
            >
              Logout
            </button>
          </form>
        </section>

        <Footer />
      </div>
    </div>
  </div>
</template>
