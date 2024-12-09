<template>
  <AuthLayout>
    <template #image-field>
      <img src="@/assets/images/signup.png" alt="" />
    </template>
    <template #form-field>
      <div>
        <div class="text-2xl font-bold my-2">Créer un nouveau compte</div>
        <p class="text-xs font-medium text-gray-400">veuillez entrer les informations demandées</p>
      </div>
      <div class="form mt-8">
        <div>
          <label for="firstname" class="text-xs">Prénoms</label>
          <input
            type="text"
            id="firstname"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div>
          <label for="lastname" class="text-xs">Nom</label>
          <input
            type="text"
            id="lastname"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div>
          <label for="email" class="text-xs">Adresse Email</label>
          <input
            type="eamil"
            id="email"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div>
          <label for="Password" class="text-xs">Mot de passe</label>
          <input
            type="password"
            id="Password"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div class="flex justify-between mb-6">
          <div>
            <input type="checkbox" id="agreed" class="accent-slate-800 rounded-md" />
            <label for="agreed" class="ml-2"
              >J'accepte les
              <span><a href="" class="font-bold">Termes & Conditions</a></span></label
            >
          </div>
        </div>

        <div>
          <button class="bg-primary text-white p-3 w-full rounded-lg hover:bg-slate-700">
            Signup
          </button>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
</script>
