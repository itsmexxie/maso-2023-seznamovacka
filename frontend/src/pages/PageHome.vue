<template>
	<div class="navbar">
		<h2 class="navbar-title">{{ useRoute().meta.title }}</h2>
	</div>
	<div class="content">
		<div v-if="teamId">

		</div>
		<div v-else>
			<p>Naskenujte QR kód vašeho týmu pro přihlášení!</p>
		</div>
	</div>
	<div id="fab">
		<md-fab variant="primary" @click="goToScan()">
			<md-icon slot="icon">qr_code_scanner</md-icon>
		</md-fab>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from "../router";
import { useRoute } from 'vue-router';

let teamId = ref<string | null>(null);

onMounted(() => {
	teamId.value = localStorage.getItem("MASO_TEAM_ID");
});

function goToScan() {
	router.push("/scan");
}
</script>

<style scoped></style>
