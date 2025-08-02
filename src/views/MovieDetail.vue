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
        <section class="flex items-center gap-6 pb-10">
          <img
            src="../assets/images/poster.png"
            alt="Poster"
            class="aspect-[3/4] max-w-80 object-cover object-center"
          />
          <div class="flex w-full flex-col gap-10">
            <div class="flex flex-col gap-3">
              <h5 class="text-4xl font-bold text-[#E1E1E1]">
                Top Gun: Maverick
                <span class="font-extralight text-[#E1E1E1]">(2022)</span>
              </h5>
              <div class="flex flex-wrap items-center gap-2">
                <p
                  class="rounded-full border border-slate-500 bg-slate-800 px-2 py-[2px] text-base text-slate-200"
                >
                  Action
                </p>
                <p
                  class="rounded-full border border-slate-500 bg-slate-800 px-2 py-[2px] text-base text-slate-200"
                >
                  Drama
                </p>
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <h5 class="text-xl font-bold text-slate-200">Overview</h5>
              <p class="text-base font-[320] text-slate-200">
                After more than thirty years of service as one of the Navy’s top
                aviators, and dodging the advancement in rank that would ground
                him, Pete “Maverick” Mitchell finds himself training a
                detachment of TOP GUN graduates for a specialized mission the
                likes of which no living pilot has ever seen.
              </p>
            </div>

            <div class="flex items-center gap-10">
              <div
                class="flex flex-col justify-center gap-1 rounded-lg border border-[#A41B1B] bg-slate-700 px-3 py-2 text-center"
              >
                <p class="text-xl font-bold text-slate-200">Score</p>
                <p class="text-4xl font-bold text-[#F33F3F]">83</p>
              </div>
              <div class="flex gap-2">
                <button
                  class="rounded bg-[#F33F3F] px-6 py-4 text-base font-bold text-black hover:bg-red-600"
                >
                  Add to Watchlist
                </button>
                <button
                  class="rounded bg-yellow-500 px-3 text-base font-bold text-black hover:bg-yellow-600"
                >
                  <Icon
                    icon="lucide:edit"
                    width="30"
                    height="30"
                    class="text-white"
                  />
                </button>
                <button
                  class="rounded bg-red-700 px-3 text-base font-bold text-black hover:bg-red-800"
                >
                  <Icon
                    icon="tabler:trash"
                    width="30"
                    height="30"
                    class="text-white"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  </div>
</template>
