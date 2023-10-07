<template>
	<TopAppBar :enable-back="true"></TopAppBar>
	<div class="content">
		<h2>{{ AppConfig.games[parseInt(gameIndex?.toString()!)].name }}</h2>
		<div class="container-success">
			<p>Hra zaznamenána!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import TopAppBar from "../components/TopAppBar.vue";
import AppConfig from "../assets/config.json";
import { onMounted } from "vue";
import router from "../router";

let gameIndex = useRoute().query.n;

onMounted(() => {
	if(!gameIndex) router.push("/");
});
</script>

<style scoped>
.container-success {
	border-radius: 12px;
	background: var(--md-sys-color-success-container);
	padding: 16px;
}

.container-success > p {
	margin: 0;
}
</style>
