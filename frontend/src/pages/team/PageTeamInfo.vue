<template>
	<div class="pane">
		<h3>Tabulka časů</h3>
		<table style="width: 100%;">
			<thead>
				<th>Čas</th>
				<th>Místo</th>
			</thead>
			<tbody>
				<tr v-for="(routeSegment, index) in AppConfig.routes[appState.teamId]">
					<td>{{ calculateTime(AppConfig.startTime + index * 900) }}</td>
					<td>{{ AppConfig.games[routeSegment].location }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { useAppState } from "../../stores/appState";
import AppConfig from "../../assets/config.json";

const appState = useAppState();

function calculateTime(timestamp: number): string {
	let hours = Math.floor(timestamp / 3600);
	let seconds = ((timestamp - hours * 3600) / 60).toString();
	if (seconds.length != 2) {
		seconds += "0";
	}

	return `${hours}:${seconds}`;
}
</script>

<style scoped>
table {
	border-spacing: 0;
}

th {
	background: var(--md-sys-color-secondary-container);
	color: var(--md-sys-color-on-secondary-container);
}

th,
td {
	padding: 8px;
	border: 1px solid var(--md-sys-color-outline);
}

th:first-child {
	border-top-left-radius: 8px;
}

th:last-child {
	border-top-right-radius: 8px;
}

tr:last-child td:first-child {
	border-bottom-left-radius: 8px;
}

tr:last-child td:last-child {
	border-bottom-right-radius: 8px;
}
</style>
