<template>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from "../router";

onMounted(() => {
	router.replace("/team/info");
})
</script>

<style scoped>

</style>
