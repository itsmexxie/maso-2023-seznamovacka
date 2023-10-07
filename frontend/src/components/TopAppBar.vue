<template>
	<div class="top-app-bar">
		<md-icon-button v-if="enableBack" class="leading-icon" @click="navigateHome()">
			<md-icon>arrow_back</md-icon>
		</md-icon-button>
		<h2 class="title">{{ useRoute().meta.title }}</h2>
		<md-icon-button class="trailing-icon" @click="switchThemes()">
			<md-icon>dark_mode</md-icon>
		</md-icon-button>
	</div>
</template>

<script setup lang="ts">
import "@material/web/iconbutton/icon-button";
import { useRoute } from "vue-router";
import router from "../router";

defineProps({
	enableBack: Boolean,
});

const emit = defineEmits(["navigation"]);

function navigateHome() {
	emit("navigation");
	router.push("/");
}

function switchThemes() {
	if(document.body.classList.contains("theme-light")) {
		document.body.classList.add("theme-dark");
		document.body.classList.remove("theme-light");
	} else {
		document.body.classList.add("theme-light");
		document.body.classList.remove("theme-dark");
	}
}
</script>

<style scoped>
.top-app-bar {
	position: fixed;
	top: 0;
	width: 100vw;
	height: 64px;
	padding: 0 16px;
	background: var(--md-sys-color-surface-bright);
	color: var(--md-sys-color-on-surface);
	display: flex;
	flex-flow: row;
	align-items: center;
}

.title {
	margin: 0;
	line-height: 28px;
	font-size: 22px;
}

.leading-icon {
	height: auto;
	margin-right: 16px;
	color: var(--md-sys-color-on-surface);
}

.trailing-icon {
	margin-left: auto;
}
</style>
