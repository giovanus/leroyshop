<template>
  <AuthLayout>
    <template #image-field>
      <img src="@/assets/images/forgotmdp.png" alt="" />
    </template>
    <template #form-field>
      <div>
        <div class="mb-4">
          <a href=""><fa-icon icon="fa-solid fa-chevron-left" /> Back</a>
        </div>
        <div class="text-2xl font-bold my-2">Mot de passe oublié</div>
        <p class="text-xs font-medium text-gray-400">
          Entrez l'adresse email associé a votre compte et nous vous enverrons un code pour
          réinitialiser votre mot de passe
        </p>
      </div>
      <div class="form mt-8">
        <div>
          <label for="email" class="text-xs">Adresse Email </label>
          <input
            type="email"
            id="email"
            class="bg-primary border-2 rounded-md block mb-4 w-full h-10 p-2"
          />
        </div>
        <div>
          <button class="bg-primary text-white p-3 w-full rounded-lg hover:bg-slate-700">
            Envoyer le code
          </button>
        </div>
      </div>
    </template>
  </AuthLayout>
</template>
<script setup lang="ts">
import AuthLayout from '@/components/layouts/AuthLayout.vue'
</script>
