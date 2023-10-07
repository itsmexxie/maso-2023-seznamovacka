<template>
	<RouterView></RouterView>
</template>

<script setup lang="ts">
import "@material/web/icon/icon";
import "@material/web/fab/fab";
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
	background: var(--md-sys-color-surface-dim);
	color: var(--md-sys-color-on-surface);
	font-family: var(--md-ref-typeface-brand);
}

.content {
	width: 100vw;
	margin-top: 64px;
	min-height: calc(100vh - 64px);
	padding: 16px;
	display: flex;
	flex-flow: column;
	align-items: center;
}
</style>
