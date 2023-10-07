import { createRouter, createWebHashHistory } from "vue-router";
import PageIndex from "./pages/PageIndex.vue";
import PageTeam from "./pages/PageTeam.vue";
import PageGame from "./pages/PageGame.vue";
import PageScan from "./pages/PageScan.vue";
import PageLogout from "./pages/PageLogout.vue";
import PageTeamInfo from "./pages/team/PageTeamInfo.vue";
import PageTeamGames from "./pages/team/PageTeamGames.vue";
import PageTeamMap from "./pages/team/PageTeamMap.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: PageIndex
		},
		{
			path: "/team",
			component: PageTeam,
			children: [
				{
					path: "info",
					component: PageTeamInfo
				},
				{
					path: "games",
					component: PageTeamGames
				},
				{
					path: "map",
					component: PageTeamMap
				}
			],
			meta: {
				title: "Seznamovačka"
			}
		},
		{
			path: "/game",
			component: PageGame,
			meta: {
				title: "Úkol"
			}
		},
		{
			path: "/scan",
			component: PageScan,
			meta: {
				title: "Skenování"
			}
		},
		{
			path: "/logout",
			component: PageLogout
		}
	]
});

export default router;
