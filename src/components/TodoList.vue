<script setup lang="ts">
	import type { Data } from '@/types';
	import type { PropType } from 'vue';
	import { ref } from 'vue';
	import { useTodoStore } from '@/stores/todoStore';
	const editMode = ref(false);

	const props = defineProps({
		data: {
			type: Array as PropType<Data[]>,
			required: true
		}
	});

	const editModeHandler = () => {
		editMode.value = !editMode.value;
	};

	const store = useTodoStore();
</script>

<template>
	<ul v-for="item in data">
		<li>
			<input
				type="text"
				v-model="item.content"
				:asd="editMode ? '' : 'disabled'"
			/>
			<button @click="store.deleteItem(item.id)">Delete Item</button>
			<button @click="store.editItem(item.id, item.content), editModeHandler">
				Edit Item
			</button>
			<button @click="store.saveItem()">Save</button>
		</li>
	</ul>
</template>

<style lang="scss" scoped></style>
