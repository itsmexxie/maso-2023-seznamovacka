<template>
	<TopAppBar :enable-back="false"></TopAppBar>
	<div v-if="appState.isLoggedIn" class="content">
		<h2>Tým #{{ appState.teamId + 1 }}</h2>
		<RouterView></RouterView>
	</div>
	<div v-else class="content">
		<p>Naskenujte QR kód vašeho týmu pro přihlášení!</p>
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
	if (localStorage.getItem("MASO_TEAM_ID")) {
		appState.login(parseInt(localStorage.getItem("MASO_TEAM_ID")!));
	}

	router.push("/team/info");
});

function goToScan() {
	router.push("/scan");
}
</script>

<style scoped>
#fab {
	position: fixed;
	bottom: calc(16px + 80px);
	right: 16px;
}
</style>
