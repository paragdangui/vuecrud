<script setup lang="ts">
	import TodoItem from '@/components/TodoItem.vue';

	import { useTodoStore } from '@/stores/todoStore';

	const store = useTodoStore();
</script>

<template>
	<ul>
		<li v-for="item in store.data" :key="item.id">
			<TodoItem :item="item" />
		</li>
	</ul>
</template>

<style lang="scss" scoped></style>
