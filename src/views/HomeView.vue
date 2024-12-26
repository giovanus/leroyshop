<template>
  <div class="">
    <NavabarComponent></NavabarComponent>
  </div>
  <SearchBarComponent />

  <div class="h-screen">
    <section class="hero relative text-white h-1/2 md:h-4/5 mx-4">
      <div class="flex flex-col gap-1 ml-4 h-full justify-center relative md:gap-3 md:ml-16">
        <div class="text-xl font-semibold md:text-3xl">Classic Exclusive</div>
        <div class="text-2xl font-extrabold md:text-5xl">Women's Collection</div>
        <div class="font-medium md:text-lg">UPTO 40% OFF</div>
        <div class="">
          <ButtonComp class="mt-2 md:mt-4 p-4 text-xs md:text-md">
            Visitez ici <fa-icon class="ml-2" icon="fa-solid fa-arrow-right" />
          </ButtonComp>
        </div>
      </div>
    </section>
    <section class="categories-list mx-4 md:mx-12 my-4 md:my-8">
      <div class="section-title my-4 md:my-6 flex justify-between">
        <div class="text-2xl font-bold">Nos Categories</div>
        <div class="hidden md:block">
          <button
            id="slider-prev-btn"
            class="bg-primary text-white px-4 py-3 rounded-md mx-2 disabled:bg-gray-100 disabled:text-black"
          >
            <fa-icon icon="fa-solid fa-arrow-left"></fa-icon>
          </button>
          <button
            id="slider-next-btn"
            class="bg-primary text-white px-4 py-3 rounded-md mx-2 disabled:bg-gray-100 disabled:text-black"
          >
            <fa-icon icon="fa-solid fa-arrow-right"></fa-icon>
          </button>
        </div>
      </div>

      <div id="cat-slider" class="my-4 overflow-x-auto whitespace-nowrap scroll-smooth">
        <div
          class="categorie-card overflow-hidden h-60 mx-4 w-1/2 md:w-[20%] shadow-md bg-gray-200 relative inline-block"
        >
          <div
            class="before:content-['Tshirt'] before:left-4 before:text-6xl before:absolute before:font-extrabold before:text-gray-300 before:z-0"
          ></div>
          <div class="relative z-2 card-img h-56 overflow-hidden">
            <img src="@/assets/images/tshirt.png" alt="" />
          </div>
          <div class="absolute w-full bottom-2 p-4">
            <button class="w-full py-2 bg-white text-lg rounded-lg font-bold">Tshirt</button>
          </div>
        </div>
        <div
          class="categorie-card overflow-hidden h-60 mx-4 w-1/2 md:w-[20%] shadow-md bg-gray-200 relative inline-block"
        >
          <div
            class="before:content-['Tshirt'] before:left-4 before:text-6xl before:absolute before:font-extrabold before:text-gray-300 before:z-0"
          ></div>
          <div class="relative z-2 card-img h-56 overflow-hidden">
            <img src="@/assets/images/tshirt.png" alt="" />
          </div>
          <div class="absolute w-full bottom-2 p-4">
            <button class="w-full py-2 bg-white text-lg rounded-lg font-bold">Tshirt</button>
          </div>
        </div>
        <div
          class="categorie-card overflow-hidden h-60 mx-4 w-1/2 md:w-[20%] shadow-md bg-gray-200 relative inline-block"
        >
          <div
            class="before:content-['Tshirt'] before:left-4 before:text-6xl before:absolute before:font-extrabold before:text-gray-300 before:z-0"
          ></div>
          <div class="relative z-2 card-img h-56 overflow-hidden">
            <img src="@/assets/images/tshirt.png" alt="" />
          </div>
          <div class="absolute w-full bottom-2 p-4">
            <button class="w-full py-2 bg-white text-lg rounded-lg font-bold">Tshirt</button>
          </div>
        </div>
      </div>
    </section>
    <section class="best-seller my-4 md:my-6 mx-4 md:mx-12">
      <div class="text-center text-2xl font-bold">Meilleurs Ventes</div>
      <div class="my-4 flex gap-4">
        <div class="product-card w-1/2 p-2 border-2 h-72">
          <div class="mb-3 flex flex-col justify-center relative h-48">
            <div class="flex flex-col absolute top-2 right-2">
              <fa-icon
                icon="fa-solid fa-star"
                class="border p-1 mb-2 rounded-full bg-white"
              ></fa-icon>
              <fa-icon
                icon="fa-solid fa-share"
                class="border p-1 mb-2 rounded-full bg-white"
              ></fa-icon>
            </div>
            <img src="@/assets/images/tshirt.png" width="150px" alt="" />
            <button class="shadow text-sm bg-gray-100 px-2 py-1">Ajouter au Panier</button>
          </div>
          <div class="product-description">
            <div class="font-bold text my-1">Roadster</div>
            <div class="font-light text-xs">Printed Cotton T-Shirt</div>
            <div class="text-sm font-semibold">
              XOF 38000 <span class="text-xs text-gray-500 ml-1 line-through">XOF 40000</span>
            </div>
          </div>
        </div>
        <div class="product-card w-1/2 p-2 border-2 h-72">
          <div class="mb-3 flex flex-col justify-center relative h-48">
            <div class="flex flex-col absolute top-2 right-2">
              <fa-icon
                icon="fa-solid fa-star"
                class="border p-1 mb-2 rounded-full bg-white"
              ></fa-icon>
              <fa-icon
                icon="fa-solid fa-share"
                class="border p-1 mb-2 rounded-full bg-white"
              ></fa-icon>
            </div>
            <img src="@/assets/images/tshirt-yellow.png" width="150px" alt="" />
            <button class="shadow text-sm bg-gray-100 px-2 py-1">Ajouter au Panier</button>
          </div>
          <div class="product-description">
            <div class="font-bold text my-1">Tshirt Jaune</div>
            <div class="font-light text-xs">T-Shirt en coton made in Bénin</div>
            <div class="text-sm font-semibold">
              XOF 38000 <span class="text-xs text-gray-500 ml-1 line-through">XOF 40000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import NavabarComponent from '@/components/NavabarComponent.vue'
import SearchBarComponent from '@/components/SearchBarComponent.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const slider = document.getElementById('cat-slider')
  const prevBtn = document.getElementById('slider-prev-btn') as HTMLButtonElement
  const nextBtn = document.getElementById('slider-next-btn') as HTMLButtonElement
  const scrollAmount = 300

  const updateButtons = () => {
    prevBtn.disabled = slider!.scrollLeft === 0
    nextBtn.disabled = slider!.scrollLeft + slider!.offsetWidth >= slider!.scrollWidth
  }

  prevBtn.addEventListener('click', () => {
    if (slider) {
      slider.scrollLeft -= scrollAmount
      updateButtons()
    }
  })

  nextBtn.addEventListener('click', () => {
    if (slider) {
      slider!.scrollLeft += scrollAmount
      updateButtons()
    }
  })

  updateButtons()
})
</script>

<style>
.hero::before {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/hero_bg.jpg'), #1e293b;
  background-size: cover;
  filter: brightness(70%);
  background-repeat: no-repeat;
}

::-webkit-scrollbar {
  width: 13px; /* Largeur de la scrollbar */
}

::-webkit-scrollbar-track {
  background: #e0e0e0; /* Couleur du fond de la scrollbar */
  border-radius: 6px; /* Arrondi pour le fond */
}

::-webkit-scrollbar-thumb {
  background: #888; /* Couleur de la barre défilante */
  border-radius: 6px; /* Arrondi pour la barre */
  border: 3px solid #e0e0e0; /* Ajoute une bordure pour créer un espace entre le track et le thumb */
}

::-webkit-scrollbar-thumb:hover {
  background: #555; /* Couleur de la barre en hover */
}
</style>
