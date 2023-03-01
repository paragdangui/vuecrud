<script setup lang="ts">
	import { ref, watchEffect } from 'vue';

	const inputText = ref(null);

	const emit = defineEmits(['inputText']);

	watchEffect(() => {
		// console.log(inputText.value, 'inputText');
		emit('inputText');
	});
</script>

<template>
	<div>
		<input v-model="inputText" type="text" placeholder="Add Your Todo here" />
	</div>
</template>

<style scoped></style>
