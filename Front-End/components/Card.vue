<template>
	<div class="h-full p-4 border border-black">
		<div v-for="(k, i) in keys" :key="k" class="text-black py-1">
			{{ k }}: <span>{{ values[i] }}</span>
		</div>
	</div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data() {
		return {
			keys: [] as any[],
			values: [] as any[],
		}
	},
	props: {
		item: {
			type: Object,
			default: () => ({}),
		},
	},
	watch: {
		item() {
			const d = { ...this.item }
			delete d['id']
			this.keys = Object.keys(d)
			this.values = Object.values(d)
		},
	},
	mounted() {
		if (Object.keys(this.item).length) {
			const d = { ...this.item }
			delete d['id']
			this.keys = Object.keys(d)
			this.values = Object.values(d)
		}
	},
})
</script>