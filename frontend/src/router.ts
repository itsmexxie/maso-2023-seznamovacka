import { createRouter, createWebHashHistory } from "vue-router";
import PageHome from "./pages/PageHome.vue";
import PageScan from "./pages/PageScan.vue";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			component: PageHome,
			meta: {
				title: "Seznamovačka"
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
