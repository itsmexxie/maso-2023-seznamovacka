<template>
	<div class="navigation-bar">
		<md-icon-button @click="navigateTo('/team/info')">
			<md-icon>home</md-icon>
		</md-icon-button>
		<md-icon-button @click="navigateTo('/team/games')">
			<md-icon>list</md-icon>
		</md-icon-button>
		<md-icon-button @click="navigateTo('/team/map')">
			<md-icon>map</md-icon>
		</md-icon-button>
	</div>
</template>

<script setup lang="ts">
import "@material/web/iconbutton/icon-button";
import router from "../router";

function navigateTo(route: string) {
	router.push(route);
}
</script>

<style scoped>
.navigation-bar {
	position: fixed;
	bottom: 0;
	width: 100vw;
	height: 80px;
	padding: 12px 0 16px 0;
	background: var(--md-sys-color-surface-bright);
	display: flex;
	justify-content: space-evenly;
	align-items: center;
}
</style>
