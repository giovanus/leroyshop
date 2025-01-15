<template>
  <div
    class="product-card w-[45%] mx-2 md:w-[20%] md:mx-auto p-2 flex flex-col items-center justify-between group"
  >
    <div class="flex-grow">
      <div class="mb-3 flex flex-col justify-center items-center relative max-h-2/3">
        <div
          class="flex flex-col absolute top-2 right-0 transition-all md:opacity-0 md:translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <fa-icon
            icon="fa-solid fa-star"
            class="border p-1 mb-2 rounded-full bg-white cursor-pointer"
          ></fa-icon>
          <fa-icon
            icon="fa-solid fa-share"
            class="border p-1 mb-2 rounded-full bg-white cursor-pointer"
          ></fa-icon>
        </div>
        <img :src="product.image" width="150px" :alt="product.title" />
        <button
          class="shadow text-sm bg-gray-100 px-2 py-1 transition-all md:opacity-0 md:translate-x-10 group-hover:opacity-100 group-hover:translate-x-0"
        >
          Ajouter au Panier
        </button>
      </div>
      <div class="product-description">
        <div class="product-name font-bold my-1 h-8 line-clamp-2">{{ product.title }}</div>
        <div class="product-categorie font-light text-xs h-8 line-clamp-2">
          {{ product.categorie }}
        </div>
        <div class="text-sm font-semibold">
          XOF {{ product.price }}
          <span class="text-xs text-gray-500 ml-1 line-through inline-block"
            >XOF {{ product.price + 2000 }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from 'vue';
interface Product {
  title: string
  categorie: string
  price: number
  image: string
}
defineProps<{ product: Product }>()
</script>
