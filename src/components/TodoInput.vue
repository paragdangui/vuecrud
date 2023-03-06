<script setup lang="ts">
	import { useTodoStore } from '@/stores/todoStore';
	const store = useTodoStore();

	const emit = defineEmits(['newTodo']);

	const submitHandler = () => {
		if (store.inputText != '') {
			emit('newTodo', store.inputText);
			store.inputText = '';
		}
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
