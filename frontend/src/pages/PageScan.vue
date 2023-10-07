<template>
	<TopAppBar :enable-back="true" @navigation="closeScanner()"></TopAppBar>
	<div class="content">
		<div id="qr-code-scanner"></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import axios from "axios";
import { Html5QrcodeScanner } from "html5-qrcode";
import router from "../router";
import { useAppState } from "../stores/appState";
import TopAppBar from "../components/TopAppBar.vue";
import { parseQrCode } from "../scripts/qrCodeParser";

const appState = useAppState();
let qrCodeScanner: Html5QrcodeScanner;

function scanSuccessCallback(text: string) {
	let qrCode = parseQrCode(text);

	// 1. Update store
	// 2. Set localStorage
	// 3. Custom stuff
	// 4. Route to page

	switch (qrCode.type) {
		case "login":
			let teamId = parseInt(qrCode.data);

			appState.login(teamId);

			localStorage.setItem("MASO_TEAM_ID", teamId.toString());

			router.push(`/team/info`);
			break;

		case "game":
			if (appState.loggedIn) {
				let gameIndex = parseInt(qrCode.data);

				appState.collectGame(gameIndex);

				let collectedGamesLS: number[] = localStorage.getItem("MASO_COLLECTED_GAMES")?.split(";").map(x => parseInt(x)) ?? [];
				collectedGamesLS.push(gameIndex);
				localStorage.setItem("MASO_COLLECTED_GAMES", collectedGamesLS.join(";"));

				axios.post("https://maso-2023.jiri.workers.dev/visits", {
					teamId: appState.teamId,
					stationId: gameIndex
				});

				router.push(`/game?n=${gameIndex}`);
			}
			break;

		default:
			break;
	}

	qrCodeScanner.clear();
}

function closeScanner() {
	if (qrCodeScanner) {
		qrCodeScanner.clear();
	}
}

onMounted(() => {
	qrCodeScanner = new Html5QrcodeScanner("qr-code-scanner", {
		fps: 10,
		qrbox: 250,
	}, true);
	qrCodeScanner.render(scanSuccessCallback, () => { });
});
</script>

<style scoped></style>
