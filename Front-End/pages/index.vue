<template>
	<div class="p-12 w-full h-full">
		<div class="mt-8 flex w-full justify-center">
			<div class="flex flex-col relative w-1/2">
				<div class="rounded border relative">
					<input
						type="text"
						class="p-2 outline-none w-full h-full z-1"
						v-model="search"
						@input="searching"
						@focus="recommendations"
						placeholder="search..."
						ref="search"
					/>
					<span
						class="absolute right-0 top-0 bottom-0 mr-2 my-2 z-2 cursor-pointer text-primary"
						v-if="search"
						@click="clear"
						>&times;</span
					>
				</div>
				<div
					v-if="showList"
					class="w-full rounded-sm absolute top-0 mt-10 z-50"
				>
					<div
						v-for="i in foundItems"
						:key="i.id"
						class="p-4 border w-full cursor-pointer ripple-bg-background-light"
						@click="itemClicked(i)"
					>
						<span>{{ i.product }}-</span>
						<span class="ml-1">{{ i.cpu }}-</span>
						<span class="ml-1">{{ i.screenresolution }}</span>
					</div>
				</div>
			</div>
			<button
				class="ripple-bg-primary py-2 px-6 outline-none rounded ml-4 text-white self-start"
				@click="submit"
			>
				search
			</button>
		</div>
		<div
			v-if="item1.id >= 0 || item2.id >= 0"
			class="flex items-center justify-center w-full mt-20"
		>
			<Card v-if="item1.id >= 0" :item="item1" />
			<Card v-if="item2.id >= 0" :item="item2" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Card from '~/components/Card.vue'

const items = [
	{
		id: '1',
		name: 'laptop1',
	},
	{
		id: '2',
		name: 'laptop2',
	},
	{
		id: '3',
		name: 'laptop3',
	},
	{
		id: '4',
		name: 'laptop4',
	},
	{
		id: '5',
		name: 'laptop5',
	},
	{
		id: '6',
		name: 'laptop6',
	},
	{
		id: '7',
		name: 'laptop7',
	},
	{
		id: '8',
		name: 'laptop8',
	},
]

export default Vue.extend({
	data() {
		return {
			search: '',
			foundItems: [] as any[],
			item1: {} as any,
			item2: {} as any,
			showList: true,
			count: 0,
		}
	},
	components: {
		Card,
	},
	methods: {
		recommendations() {
			this.$axios
				.get(this.$apiUrl.recommendUrl())
				.then((response) => {
					this.foundItems = response.data
					this.showList = true
				})
				.catch((e) => {
					this.$toastErrors(this, e)
				})
		},
		clickOutside(e: any) {
			if (!this.showList) return
			if (
				// @ts-ignore
				!this.$refs.search?.contains(e.target)
			) {
				this.showList = false
			}
		},
		searching() {},
		submit() {
			this.$axios
				.get(this.$apiUrl.searchUrl(this.search))
				.then((response) => {
					this.foundItems = response.data.results
					this.showList = true
				})
				.catch((e) => {
					this.$toastErrors(this, e)
				})
		},
		itemClicked(item: any) {
			this.$axios
				.put(this.$apiUrl.registerUrl(item.id), {
					...item,
					numberofsearch: Number(item.numberofsearch) + 1,
				})
				.then((response) => {
					this.showList = false
					const d = { ...item }
					delete d['numberofsearch']
					if (this.count === 0) {
						this.item1 = d
						this.count++
					} else {
						this.item2 = d
						this.count = 0
					}
				})
				.catch((e) => {
					this.$toastErrors(this, e)
				})
		},
		clear() {
			this.search = ''
			this.recommendations()
		},
	},
	mounted() {
		if (process.browser) {
			document.addEventListener('click', this.clickOutside)
		}
		this.$axios
			.get(this.$apiUrl.recommendUrl())
			.then((response) => {
				this.foundItems = response.data
			})
			.catch((e) => {
				this.$toastErrors(this, e)
			})
	},
	destroyed() {
		if (process.browser) {
			document.removeEventListener('click', this.clickOutside)
		}
	},
})
</script>

<style lang="postcss" scoped></style>
