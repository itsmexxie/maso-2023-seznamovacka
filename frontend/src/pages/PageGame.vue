<template>
	<TopAppBar :enable-back="true"></TopAppBar>
	<div class="content">
		<h2>{{ AppConfig.games[parseInt(gameIndex?.toString()!)] }}</h2>
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

<style scoped></style>
