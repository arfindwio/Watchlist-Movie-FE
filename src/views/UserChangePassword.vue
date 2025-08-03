<script lang="ts" setup>
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
              class="col-span-1 w-full cursor-pointer border border-[#A41B1B] px-4 py-2 text-center text-2xl font-bold text-[#A41B1B] hover:bg-[#A41B1B] hover:bg-[A41B1B] hover:text-black"
            >
              Profile
            </h1>
            <h1
              class="col-span-1 w-full cursor-pointer border border-[#A41B1B] bg-[#A41B1B] px-4 py-2 text-center text-2xl font-bold text-black"
            >
              Change Password
            </h1>
          </div>
          <form class="flex w-full flex-col items-center gap-6 p-8">
            <div class="flex w-full flex-col items-center gap-4">
              <div class="flex w-[30%] flex-col">
                <label
                  for="oldPassword"
                  class="text-lg font-bold text-slate-200"
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
              <div class="flex w-[30%] flex-col">
                <label
                  for="newPassword"
                  class="text-lg font-bold text-slate-200"
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
              <div class="flex w-[30%] flex-col">
                <label
                  for="confirmNewPassword"
                  class="text-lg font-bold text-slate-200"
                  >Confirm New Password
                  <span class="text-red-500">*</span></label
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
              class="w-[30%] rounded-md bg-[#F33F3F] py-1 text-center text-lg font-bold text-black hover:bg-red-600"
            >
              Save
            </button>
          </form>
        </section>

        <Footer />
      </div>
    </div>
  </div>
</template>
