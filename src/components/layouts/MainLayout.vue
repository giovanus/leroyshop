<template>
  <NavbarComponent />
  <slot></slot>
  <FooterComponent />
</template>
<script lang="ts" setup>
import FooterComponent from './FooterComponent.vue'
import NavbarComponent from './NavbarComponent.vue'
</script>
