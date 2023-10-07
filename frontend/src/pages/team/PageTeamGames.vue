<template>
	<div class="pane">
		<h3>Získané hry</H3>
		<ul>
			<li v-for="game in appState.getGames">{{ AppConfig.games[game] }}</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useAppState } from "../../stores/appState";
import AppConfig from "../../assets/config.json";

const appState = useAppState();
</script>

<style scoped>

</style>
