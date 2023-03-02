<script setup lang="ts">
	import { useTodoStore } from '@/stores/todoStore';
	const store = useTodoStore();

	const emit = defineEmits(['newTodo:value']);

	const submitHandler = () => {
		emit('newTodo:value', store.inputText);
	};
</script>

<template>
	<form>
		<input
			v-model="store.inputText"
			type="text"
			placeholder="Add Your Todo here"
		/>
		<input type="submit" @click.prevent="submitHandler" />
	</form>
</template>

<style scoped></style>
