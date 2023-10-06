import { defineStore } from "pinia";

export const useAppState = defineStore("app-state", {
	state: () => {
		return { loggedIn: false, teamId: -1, tasks: <string[]>[] };
	},
	getters: {
		isLoggedIn: (state) => state.loggedIn,
		getTeamId: (state) => state.teamId,
		getTasks: (state) => state.tasks,
	},
	actions: {
		login(teamId: number) {
			this.loggedIn = true;
			this.teamId = teamId;
		},
		collectTask(taskText: string) {
			this.tasks.push(taskText);
		},
	},
});
