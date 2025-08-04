<script lang="ts" setup>
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
            class="col-span-1 flex w-full items-center justify-center border border-[#A41B1B] px-4 py-2 text-center text-lg font-bold text-[#A41B1B] hover:bg-[#A41B1B] hover:bg-[A41B1B] hover:text-black sm:text-xl xl:text-2xl"
          >
            Profile
          </router-link>
          <router-link
            to="/change-password"
            class="col-span-1 flex w-full items-center justify-center border border-[#A41B1B] bg-[#A41B1B] px-4 py-2 text-center text-lg font-bold text-black sm:text-xl lg:text-2xl"
          >
            Change Password
          </router-link>
        </div>
        <form class="flex w-full flex-col items-center gap-6 p-4 sm:p-6 md:p-8">
          <div class="flex w-full flex-col items-center gap-4">
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label
                for="oldPassword"
                class="text-base font-bold text-slate-200 md:text-lg"
                >Old Password <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                id="oldPassword"
                name="oldPassword"
                placeholder="Input Old Password"
                class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-slate-200"
              />
            </div>
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label
                for="newPassword"
                class="text-base font-bold text-slate-200 md:text-lg"
                >New Password <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                id="newPassword"
                name="newPassword"
                placeholder="Input New Password"
                class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-slate-200"
              />
            </div>
            <div class="flex w-full flex-col sm:w-[50%] lg:w-[40%] xl:w-[30%]">
              <label
                for="confirmNewPassword"
                class="text-base font-bold text-slate-200 md:text-lg"
                >Confirm New Password <span class="text-red-500">*</span></label
              >
              <input
                type="text"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Input Confirm New Password"
                class="w-full rounded border border-slate-200 bg-transparent px-2 py-1 text-slate-200"
              />
            </div>
          </div>
          <button
            class="w-full rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600 sm:w-[50%] lg:w-[40%] xl:w-[30%]"
          >
            Save
          </button>
        </form>
      </section>

      <Footer />
    </div>
  </div>
</template>
