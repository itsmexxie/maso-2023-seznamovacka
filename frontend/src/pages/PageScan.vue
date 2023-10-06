<template>
	<div class="navbar">
		<md-icon-button class="navbar-leading-icon" @click="navigateBack()">
			<md-icon>arrow_back</md-icon>
		</md-icon-button>
		<h2 class="navbar-title">{{ useRoute().meta.title }}</h2>
	</div>
	<div class="content">
		<div id="qr-code-scanner"></div>
	</div>
</template>

<script setup lang="ts">
import "@material/web/iconbutton/icon-button";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useRoute } from 'vue-router';
import router from "../router";
import { onMounted } from "vue";

let qrCodeScanner: Html5QrcodeScanner;

function navigateBack() {
	if (qrCodeScanner) {
		qrCodeScanner.clear();
	}
	router.back();
}

function scanSuccessCallback(text: string) {
	console.log(text);
	qrCodeScanner.clear();
	router.push("/");
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
