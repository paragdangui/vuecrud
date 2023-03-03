import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Data } from '@/types';

export const useTodoStore = defineStore('todoStore', () => {
	const currentId = ref(0);
	const data = ref<Data[]>([]);
	const inputText = ref<null | string>(null);

	function incrementId() {
		currentId.value++;
	}

	const deleteItem = (deleteItemId: number) => {
		const deleteItemIndex = data.value.findIndex((item) => {
			return item.id == deleteItemId;
		});

		data.value.splice(deleteItemIndex, 1);
	};

	const editItem = (EditItemId: number, EditItemText: String) => {
		const editItemIndex = data.value.find((item) => {
			if (item.id == EditItemId) {
				item.content == EditItemText;
			}
		});
	};

	const saveItem = () => {};

	return {
		currentId,
		data,
		inputText,
		incrementId,
		deleteItem,
		editItem,
		saveItem
	};
});
