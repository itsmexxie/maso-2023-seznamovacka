<template>
	<div v-for="team in teamInfos">
		<p>{{ team }}</p>
	</div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive } from "vue";

let teamInfos = reactive<any>([]);

function updateTeamInfos() {
	teamInfos = reactive([]);
	axios.get("https://maso-2023.jiri.workers.dev/visits").then((res) => {
		for(let i = 0; i < 14; i++) {
			teamInfos.push(res.data.filter((x: any) => x.teamId == i));
		}
		console.log(teamInfos);
	});
}

onMounted(() => {
	setInterval(() => {
		updateTeamInfos();
	}, 60000);
	updateTeamInfos();
});
</script>

<style scoped>
#app {}
</style>
