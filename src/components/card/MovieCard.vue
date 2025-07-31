<script lang="ts" setup>
// Icons
import { Icon } from "@iconify/vue";
</script>

<template>
  <router-link
    to="/movie-detail"
    class="relative col-span-1 flex flex-col overflow-hidden rounded-md bg-slate-600"
  >
    <img
      src="../../assets/images/poster.png"
      alt="Poster"
      class="aspect-[3/4] max-h-[340px] object-cover object-center"
    />
    <div class="p-2">
      <h5 class="text-base font-medium text-[#E1E1E1]">Top Gun: Maverick</h5>
      <p class="text-base font-extralight text-[#E1E1E1]">(2022)</p>
    </div>
    <div
      class="absolute right-0 top-0 flex items-center gap-1 bg-slate-400 bg-opacity-75 p-1 text-center"
    >
      <Icon
        icon="material-symbols:star"
        width="18"
        height="18"
        class="text-white"
      />
      <p class="text-xs font-bold text-[#E1E1E1]">50/100</p>
    </div>
  </router-link>
</template>
