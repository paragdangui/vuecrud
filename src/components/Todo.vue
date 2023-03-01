<script setup lang="ts">
	import TodoInput from '@/components/TodoInput.vue';
	import TodoList from './TodoList.vue';
	import type { Data } from '@/types';

	const data: Data[] = [
		{ id: 1, content: 'wake up' },
		{ id: 2, content: 'brush teeth' },
		{ id: 3, content: 'Bath' }
	];

	const inputHandler = (value: string) => {
		console.log(value, 'inputHandler from parent ');
	};
</script>

<template>
	<h1>Todo List</h1>
	<TodoInput @inputText="inputHandler" />
	<TodoList :data="data" />
</template>

<style lang="scss" scoped>
	h1 {
		text-align: center;
	}
</style>
