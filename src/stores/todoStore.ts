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

	const deleteItem = (deleteItemId: any) => {
		// data.find
	};

	return { currentId, data, inputText, incrementId, deleteItem };
});
