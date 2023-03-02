<script setup lang="ts">
	import type { Data } from '@/types';
	import type { PropType } from 'vue';
	import { useTodoStore } from '@/stores/todoStore';

	const props = defineProps({
		data: {
			type: Array as PropType<Data[]>,
			required: true
		}
	});

	const store = useTodoStore();
</script>

<template>
	<ul v-for="item in data">
		<li>
			{{ item.content }}
			<button @click="store.deleteItem(item.id)">Delete Item</button>
		</li>
	</ul>
</template>

<style lang="scss" scoped></style>
