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
	background: var(--md-sys-color-surface);
	font-family: var(--md-ref-typeface-brand);
	display: flex;
	flex-flow: column;
}

.content {
	width: 100vw;
	min-height: 92vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

#fab {
	position: absolute;
	bottom: 16px;
	right: 16px;
}
</style>
