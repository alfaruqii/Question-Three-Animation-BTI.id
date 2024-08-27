<script setup lang="ts">
defineProps<{ imgPath: string; category: string }>();
</script>

<template>
  <li class="cursor-pointer flex flex-col items-center">
    <img :src="imgPath" class="w-8" />
    <p>{{ category }}</p>
  </li>
</template>
