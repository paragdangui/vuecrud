<script setup lang="ts">
	import TodoInput from '@/components/TodoInput.vue';
	import TodoList from './TodoList.vue';
	import { useTodoStore } from '@/stores/todoStore';

	const store = useTodoStore();

	const inputHandler = (newTodoData: string) => {
		store.incrementId();
		store.data.push({ id: store.currentId, content: newTodoData });
	};
</script>

<template>
	<h1>Todo List</h1>
	<TodoInput @newTodo:value="inputHandler" />
	<TodoList :data="store.data" />
</template>

<style lang="scss" scoped>
	h1 {
		text-align: center;
	}
</style>
