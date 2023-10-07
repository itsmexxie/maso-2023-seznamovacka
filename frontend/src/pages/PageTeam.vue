<template>
	<TopAppBar :enable-back="false"></TopAppBar>
	<div v-if="appState.getGames.length >= 7" class="content">
		<h3>A teď honem zpátky na MatFyz!</h3>
		<p>Samozřejmě opatrně...</p>
	</div>
	<div v-else-if="appState.isLoggedIn" class="content">
		<h2>Tým #{{ appState.teamId + 1 }}</h2>
		<RouterView></RouterView>
	</div>
	<div v-else class="content">
		<h3>Naskenujte QR kód vašeho týmu pro přihlášení!</h3>
	</div>
	<div id="fab">
		<md-fab variant="primary" @click="goToScan()">
			<md-icon slot="icon">qr_code_scanner</md-icon>
		</md-fab>
	</div>
	<NavigationBar></NavigationBar>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from "../router";
import { useAppState } from "../stores/appState";
import TopAppBar from "../components/TopAppBar.vue";
import NavigationBar from '../components/NavigationBar.vue';

const appState = useAppState();

onMounted(() => {
	if (!appState.loggedIn && localStorage.getItem("MASO_TEAM_ID")) {
		appState.login(parseInt(localStorage.getItem("MASO_TEAM_ID")!));

		let collectedGamesLS: number[] = localStorage.getItem("MASO_COLLECTED_GAMES")?.split(";").map(x => parseInt(x)) ?? [];
		if (appState.getGames != collectedGamesLS) {
			appState.setGames(collectedGamesLS);
		}
	}
});

function goToScan() {
	router.push("/scan");
}
</script>

<style scoped>
.content {
	min-height: calc(100vh - 64px - 80px)
}

#fab {
	position: fixed;
	bottom: calc(16px + 80px);
	right: 16px;
}
</style>
