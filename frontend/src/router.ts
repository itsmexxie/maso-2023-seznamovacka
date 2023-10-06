import { createRouter, createWebHashHistory } from "vue-router";
import PageIndex from "./pages/PageIndex.vue";
import PageTeam from "./pages/PageTeam.vue";
import PageTask from "./pages/PageTask.vue";
import PageScan from "./pages/PageScan.vue";
import PageTeamInfo from "./pages/team/PageTeamInfo.vue";
import PageTeamTasks from "./pages/team/PageTeamTasks.vue";
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
					path: "tasks",
					component: PageTeamTasks
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
			path: "/task",
			component: PageTask,
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
		}
	]
});

export default router;
