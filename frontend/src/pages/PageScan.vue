<template>
	<TopAppBar :enable-back="true" @navigation="closeScanner()"></TopAppBar>
	<div class="content">
		<div id="qr-code-scanner"></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { Html5QrcodeScanner } from "html5-qrcode";
import { parseQrCode } from "../scripts/qrCodeParser";
import router from "../router";
import TopAppBar from "../components/TopAppBar.vue";

let qrCodeScanner: Html5QrcodeScanner;

function scanSuccessCallback(text: string) {
	let qrCode = parseQrCode(text);

	switch (qrCode.type) {
		case "login":
			localStorage.setItem("MASO_TEAM_ID", qrCode.data);
			break;

		case "task":
			break;

		default:
			break;
	}

	qrCodeScanner.clear();
	router.push("/");
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
