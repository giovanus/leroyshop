<!-- <template>
  <div class="p-2">
    <div class="logo">
      <img src="@/assets/images/logo.png" width="100px" alt="" />
    </div>
    <div class="nav-links">
      <ul>
        <li>Accueil</li>
        <li>Boutique <fa-icon icon="fa-solid fa-chevron-down" /></li>
        <li>Contactez-nous</li>
      </ul>

      <ul>
        <li><fa-icon icon="fa-solid fa-search" /></li>
        <li><fa-icon icon="fa-solid fa-heart" /></li>
        <li><fa-icon icon="fa-solid fa-cart-flatbed" /></li>
        <li><button class="btn bg-primary text-white p-2">Login</button></li>
      </ul>
    </div>
  </div>
</template> -->
<template>
  <div class="p-4">
    <div class="flex justify-between items-center">
      <div class="logo">
        <img src="@/assets/images/logo.png" width="100px" alt="" />
      </div>
      <ul class="hidden md:flex gap-6 items-center">
        <li><a href="" class="font-bold">Accueil</a></li>
        <li
          class="font-bold cursor-pointer"
          @click="
            () => {
              isMegMenuOpen = !isMegMenuOpen
              isOpen = false
            }
          "
        >
          Boutique <fa-icon icon="fa-solid fa-chevron-down" />
        </li>
        <li><a href="" class="font-bold">Contactez-nous</a></li>
        <li class="">
          <button class="bg-primary text-white font-bold rounded-md px-6 py-2">Login</button>
        </li>
      </ul>
      <ul class="nav-actions flex gap-6 relative">
        <li><fa-icon icon="fa-regular fa-heart" size="lg" /></li>
        <li><fa-icon icon="fa-solid fa-cart-shopping" size="lg" /></li>
        <li @click="isOpen = !isOpen" class="md:hidden">
          <fa-icon icon="fa-solid fa-bars" size="lg" />
        </li>
      </ul>
      <div
        :class="isMegMenuOpen ? 'block' : 'hidden'"
        class="mega-menu absolute top-4 right-4 h-screen w-80 bg-white py-4 rounded-lg shadow-lg md:top-16 md:left-1/2 md:-translate-x-1/2 md:h-fit md:min-h-48 md:w-2/3"
      >
        <fa-icon
          icon="fa-solid fa-close"
          @click="isMegMenuOpen = false"
          class="absolute top-4 right-4 cursor-pointer"
          size="lg"
        />
        <div
          class="flex flex-col mt-4 md:flex-row gap-10 justify-center md:justify-around items-center"
        >
          <div>
            <div class="font-bold text-lg">Categorie 1</div>
            <ul class="mt-2">
              <li>sousous cat 1</li>
              <li>sousous cat 1</li>
              <li>sousous cat 1</li>
              <li>sousous cat 1</li>
            </ul>
          </div>
          <div>
            <div class="font-bold text-lg">Categorie 2</div>
            <ul class="mt-2">
              <li>sous cat 2</li>
              <li>sous cat 2</li>
              <li>sous cat 2</li>
              <li>sous cat 2</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="my-4 md:my-10 flex gap-6 md:justify-center">
      <input
        type="text"
        placeholder="rechercher un produit"
        class="border-primary border-2 w-2/3 rounded-md mb-4 h-10 p-2 md:w-1/3"
      />
      <button class="bg-primary text-white px-6 rounded-md h-10">rechercher</button>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="nav-links bg-white shadow-lg absolute top-16 right-0 w-full"
    >
      <ul class="flex flex-col justify-center items-start px-4 py-4 gap-6">
        <li class="text-lg">Accueil</li>
        <li
          class="text-lg"
          @click="
            () => {
              isMegMenuOpen = !isMegMenuOpen
              isOpen = false
            }
          "
        >
          Boutique <fa-icon icon="fa-solid fa-chevron-down" />
        </li>
        <li class="text-lg">Contactez-nous</li>
        <li class="text-lg">
          <button class="bg-primary text-white w-48 rounded-md p-2">Login</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const isMegMenuOpen = ref(false)
</script>
