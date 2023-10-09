<template>
	<div v-for="(team, index) in teamInfos" class="team">
		<h3>Tým #{{ index + 1}}</h3>
		<p v-for="log in team">Hra #{{ log.stationId + 1 }} splněna ({{ new Date(log.date + 7200000).toISOString() }})</p>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, ref, Ref } from "vue";

let teamInfos: Ref<any[]> = ref([]);

function updateTeamInfos() {
	teamInfos.value = [];
	axios.get("https://maso-2023.jiri.workers.dev/visits").then((res) => {
		for (let i = 0; i < 14; i++) {
			teamInfos.value.push(res.data.filter((x: any) => x.teamId == i));
		}
		console.log(teamInfos.value);
	});
}

onMounted(() => {
	setInterval(() => {
		updateTeamInfos();
	}, 30000);
	updateTeamInfos();
});
</script>

<style>
* {
	box-sizing: border-box;
}

body {
	margin: 0;
}

#app {
	width: 100vw;
	min-height: 100vh;
	padding: 16px;
	font-family: 'Open Sans', sans-serif;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 16px;
	grid-row-gap: 16px;
}

.team {
	padding: 16px;
	background: #EEEEEE;
	border-radius: 12px;
}
</style>
