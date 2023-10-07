<template>
	<div class="pane">
		<div class="pane-header">
			<h3>Mapa trasy</h3>
			<md-icon-button style="margin-left: auto;" :href="AppConfig.maps[appState.teamId].route" target="_blank">
				<md-icon>open_in_new</md-icon>
			</md-icon-button>
		</div>
		<iframe style="border: none" :src="AppConfig.maps[appState.teamId].embed" width="100%" height="500"
			frameborder="0"></iframe>
	</div>
</template>

<script setup lang="ts">
import "@material/web/iconbutton/icon-button";
import "@material/web/icon/icon";
import { useAppState } from "../../stores/appState";
import AppConfig from "../../assets/config.json";

const appState = useAppState();
</script>

<style scoped></style>
