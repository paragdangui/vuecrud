<script setup lang="ts">
	import type { PropType } from 'vue';
	import { ref } from 'vue';
	import type { Data } from '@/types';
	import { useTodoStore } from '@/stores/todoStore';
	const editMode = ref(false);

	const props = defineProps({
		item: {
			type: Object as PropType<Data>,
			required: true
		}
	});

	const store = useTodoStore();

	const editModeHandler = () => {
		editMode.value = true;
	};

	const saveModeHandler = () => {
		editMode.value = false;
	};
</script>

<template>
	<input
		type="text"
		v-model="props.item.content"
		:disabled="editMode == false"
	/>

	<button @click="store.deleteItem(item.id)">Delete Item</button>
	<button @click="store.editItem(item.id, item.content), editModeHandler()">
		Edit Item
	</button>
	<button @click="store.saveItem(), saveModeHandler()">Save</button>
</template>

<style scoped></style>
