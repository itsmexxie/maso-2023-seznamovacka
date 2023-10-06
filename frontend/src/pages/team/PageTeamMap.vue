<template>
	<div class="pane">
		<h3>Mapa trasy</h3>
		<iframe style="border: none" :src="AppConfig.maps[appState.teamId].embed" width="100%" height="500"
			frameborder="0"></iframe>
	</div>
</template>

<script setup lang="ts">
import { useAppState } from "../../stores/appState";
import AppConfig from "../../assets/config.json";

const appState = useAppState();
</script>

<style scoped></style>
