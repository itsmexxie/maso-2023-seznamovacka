<template>
	<div class="pane">
		<h3>Získané hry</H3>
		<ul v-if="appState.getGames.length > 0">
			<li v-for="game in appState.getGames">{{ AppConfig.games[game].name }}</li>
		</ul>
		<p v-else>Ještě jste nevyhráli žádné hry!</p>
	</div>
</template>

<script setup lang="ts">
import { useAppState } from "../../stores/appState";
import AppConfig from "../../assets/config.json";

const appState = useAppState();
</script>

<style scoped>

</style>
