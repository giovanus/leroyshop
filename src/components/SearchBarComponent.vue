<template>
  <!-- <div class="my-4 md:my-10 flex gap-6 md:justify-center"> -->
  <div class="mx-4 md:mx-0 flex gap-6 md:justify-center">
    <input
      type="text"
      placeholder="rechercher un produit"
      class="border-primary border-2 w-2/3 rounded-md mb-4 h-10 p-2 md:w-1/3"
    />
    <!-- <button class="bg-primary text-white px-6 rounded-md h-10">rechercher</button> -->
    <ButtonComp class="px-6 h-10">Rechercher</ButtonComp>
  </div>
</template>

<script setup lang="ts">
import ButtonComp from './ButtonComp.vue'
</script>
