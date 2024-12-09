<template>
  <AuthLayout>
    <template #image-field>
      <img src="@/assets/images/login.png" alt="" />
    </template>
    <template #form-field>
      <div>
        <div class="text-2xl font-bold my-2">Bienvenue 👋</div>
        <p class="text-xs font-medium text-gray-400">connectez-vous ici</p>
      </div>
      <div class="form mt-8">
        <div>
          <label for="email" class="text-xs">Adresse Email </label>
          <input
            type="text"
            id="email"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div>
          <label for="Password" class="text-xs">Mot de passe </label>
          <input
            type="password"
            id="Password"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div class="flex justify-between mb-6">
          <div>
            <input type="checkbox" id="remember" class="accent-slate-800 rounded-md" />
            <label for="remember" class="ml-2">Se souvenir de moi</label>
          </div>
          <a class="text-sm cursor-pointer">Mot de passe oublié ?</a>
        </div>

        <div>
          <button class="bg-primary text-white p-3 w-full rounded-lg hover:bg-slate-700">
            Se Connecter
          </button>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
</script>
