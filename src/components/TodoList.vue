<script setup lang="ts">
	import type { Data } from '@/types';
	import type { PropType } from 'vue';

	const props = defineProps({
		data: {
			type: Array as PropType<Data[]>,
			required: true
		}
	});
</script>

<template>
	<ul v-for="item in data">
		<li>{{ item.content }}</li>
	</ul>
</template>

<style lang="scss" scoped></style>
