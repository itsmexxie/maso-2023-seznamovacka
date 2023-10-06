<template>
	<div class="navbar">
		<md-icon-button class="navbar-leading-icon" @click="navigateBack()">
			<md-icon>arrow_back</md-icon>
		</md-icon-button>
		<h2 class="navbar-title">{{ useRoute().meta.title }}</h2>
	</div>
	<div class="content">
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import router from "../router";

function navigateBack() {
	router.back();
}
</script>

<style scoped></style>
