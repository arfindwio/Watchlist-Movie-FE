<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

// Icons
import { Icon } from "@iconify/vue";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}>();

const emits = defineEmits<{
  (e: "update:page", page: number): void;
  (e: "update:itemsPerPage", count: number): void;
}>();

const changePage = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emits("update:page", page);
  }
};

const updateItemsPerPage = (event: Event) => {
  const value = parseInt((event.target as HTMLSelectElement).value);
  emits("update:itemsPerPage", value);
};
</script>

<template>
  <section
    class="flex flex-col justify-center gap-3 pt-4 lg:flex-row lg:justify-between lg:gap-6"
  >
    <p
      class="flex items-center justify-center gap-2 text-base font-normal text-slate-300"
    >
      Items per page
      <select
        class="border border-slate-600 bg-transparent text-base text-white"
        @change="updateItemsPerPage"
        :value="itemsPerPage"
      >
        <option :value="15" class="text-black">15</option>
        <option :value="20" class="text-black">20</option>
      </select>
      of {{ totalItems }}
    </p>

    <div
      class="flex flex-wrap items-center justify-center gap-1 sm:gap-4"
      v-if="totalItems > itemsPerPage"
    >
      <button
        class="flex scale-90 items-center gap-2 text-slate-300 sm:scale-100"
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
      >
        <Icon icon="si:arrow-left-duotone" width="30" height="30" />
        Previous
      </button>

      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="[
          'scale-90 rounded-lg px-4 py-2 text-base font-medium sm:scale-100',
          currentPage === page
            ? 'bg-slate-500 bg-opacity-70 text-white'
            : 'text-slate-300 hover:bg-slate-500 hover:bg-opacity-35',
        ]"
      >
        {{ page }}
      </button>

      <button
        class="flex scale-90 items-center gap-2 text-slate-300 sm:scale-100"
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
      >
        Next
        <Icon icon="si:arrow-right-duotone" width="30" height="30" />
      </button>
    </div>
  </section>
</template>
