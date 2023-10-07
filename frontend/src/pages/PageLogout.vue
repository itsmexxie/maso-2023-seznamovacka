<template>
	<h3>Redirecting...</h3>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from '../router';
import { useAppState } from '../stores/appState';

onMounted(() => {
	localStorage.removeItem("MASO_TEAM_ID");
	localStorage.removeItem("MASO_COLLECTED_GAMES");

	useAppState().logout();
	router.push("/");
});
</script>
