<script setup lang="ts">
  const props = defineProps<{chiffre: number}>();
  const nombre = defineModel<number>();
</script>

<template>
    <button @click="nombre = nombre! * 10 + chiffre">{{ chiffre }}</button>
</template>