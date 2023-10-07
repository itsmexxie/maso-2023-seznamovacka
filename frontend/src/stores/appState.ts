import { defineStore } from "pinia";

export const useAppState = defineStore("app-state", {
	state: () => {
		return { loggedIn: false, teamId: -1, games: <number[]>[] };
	},
	getters: {
		isLoggedIn: (state) => state.loggedIn,
		getTeamId: (state) => state.teamId,
		getGames: (state) => state.games,
	},
	actions: {
		login(teamId: number) {
			this.loggedIn = true;
			this.teamId = teamId;
		},
		logout() {
			this.loggedIn = false;
			this.teamId = -1;
		},
		collectGame(gameIndex: number) {
			console.log("bruh");
			this.games.push(gameIndex);
		},
		setGames(games: number[]) {
			this.games = games;
		}
	},
});
