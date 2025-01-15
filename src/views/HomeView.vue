<template>
  <MainLayout>
    <SearchBarComponent />
    <div>
      <section class="hero relative text-white h-96 md:h-[500px] mx-4">
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
      <section class="categories-list mx-4 md:mx-12 my-16 md:my-20">
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
      <section class="best-seller my-16 md:my-20 mx-4 md:mx-12">
        <div class="text-center text-2xl font-bold">Meilleurs Ventes</div>
        <div class="my-4 flex flex-wrap gap-y-5">
          <ProductCard :product="product" v-for="product in products" :key="product.id" />
        </div>
      </section>
      <section class="stories my-16 md:my-20 mx-4 md:mx-12">
        <div class="text-center text-2xl font-bold mb-6">Nos stories instagram</div>
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 mx-auto">
          <div class="storie-card relative group">
            <img
              src="@/assets/images/login.png"
              class="w-1/2 h-auto mx-auto md:w-[250px] md:h-[250px] brightness-100 hover:brightness-75 transition"
              alt=""
            />
            <div
              class="absolute md:top-full top-1/2 left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:opacity-0 md:group-hover:top-1/2 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 md:transition-all md:duration-500 md:ease-in-out bg-white rounded-full p-3"
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="storie-card relative group">
            <img
              src="@/assets/images/forgotmdp.png"
              class="w-1/2 h-auto mx-auto md:w-[250px] md:h-[250px] brightness-100 hover:brightness-75 transition"
              alt=""
            />
            <div
              class="absolute md:top-full top-1/2 left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:opacity-0 md:group-hover:top-1/2 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 md:transition-all md:duration-500 md:ease-in-out bg-white rounded-full p-3"
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="storie-card relative group">
            <img
              src="@/assets/images/login.png"
              class="w-1/2 h-auto mx-auto md:w-[250px] md:h-[250px] brightness-100 hover:brightness-75 transition"
              alt=""
            />
            <div
              class="absolute md:top-full top-1/2 left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:opacity-0 md:group-hover:top-1/2 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 md:transition-all md:duration-500 md:ease-in-out bg-white rounded-full p-3"
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="storie-card relative group">
            <img
              src="@/assets/images/signup.png"
              class="w-1/2 h-auto mx-auto md:w-[250px] md:h-[250px] brightness-100 hover:brightness-75 transition"
              alt=""
            />
            <div
              class="absolute md:top-full top-1/2 left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 md:translate-y-0 md:opacity-0 md:group-hover:top-1/2 md:group-hover:opacity-100 md:group-hover:-translate-y-1/2 md:transition-all md:duration-500 md:ease-in-out bg-white rounded-full p-3"
            >
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 50 50"
                >
                  <path
                    d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="my-16 w-2/3 md:w-full mx-auto md:my-20 md:px-12">
        <div class="text-center text-2xl font-bold mb-6">Nos Extras</div>
        <div class="flex flex-col gap-y-8 md:flex-row">
          <div class="extra-card mx-4 md:w-1/4 flex flex-col items-start">
            <fa-icon icon="fa-solid fa-shipping-fast" size="2xl"></fa-icon>
            <div class="font-bold my-2 text-lg">Livraison Gratuite</div>
            <p class="text-sm">Livraison gratuite pour les commandes au dessus de 100 000 FCFA</p>
          </div>
          <div class="extra-card mx-4 md:w-1/4 flex flex-col items-start">
            <fa-icon icon="fa-solid fa-coins" size="2xl"></fa-icon>
            <div class="font-bold my-2 text-lg">Garantie</div>
            <p class="text-sm">Avec 30 jours pour etre satisfait ou remboursé</p>
          </div>
          <div class="extra-card mx-4 md:w-1/4 flex flex-col items-start">
            <fa-icon icon="fa-solid fa-headphones" size="2xl"></fa-icon>
            <div class="font-bold my-2 text-lg">Service en Ligne</div>
            <p class="text-sm">Disponible 24h/24h et 7 jours sur 7</p>
          </div>
          <div class="extra-card mx-4 md:w-1/4 flex flex-col items-start">
            <fa-icon icon="fa-solid fa-credit-card" size="2xl"></fa-icon>
            <div class="font-bold my-2 text-lg">Paiement Flexible</div>
            <p class="text-sm">Payer par mobile money ou par carte bancaire</p>
          </div>
        </div>
      </section>
    </div>
  </MainLayout>
</template>
<script setup lang="ts">
import SearchBarComponent from '@/components/SearchBarComponent.vue'
import ButtonComp from '@/components/ButtonComp.vue'
import { onMounted } from 'vue'
import ProductCard from '@/components/product/ProductCard.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'

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

const products = [
  {
    id: 1,
    title: 'Roadster  azrjgrjb',
    price: 25000,
    image: 'src/assets/images/tshirt.png',
    categorie: 'Printed Cotton T-Shirt',
  },
  {
    id: 2,
    title: 'Tshirt Super',
    price: 35000,
    image: 'src/assets/images/tshirt3.png',
    categorie: 'T-Shirt en coton made in Bénin evackéef ergie geohzier hu',
  },
  {
    id: 3,
    title: 'Tshirt Jaune hhfyhv grshd',
    price: 35000,
    image: 'src/assets/images/tshirt-yellow.png',
    categorie: 'T-Shirt en coton made in Bénin evackéef ergie geohzier hu',
  },
  {
    id: 4,
    title: 'Tshirt cooll',
    price: 35000,
    image: 'src/assets/images/tshirt.png',
    categorie: 'T-Shirt en coton made in Bénin evackéef ergie geohzier hu',
  },
]
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
