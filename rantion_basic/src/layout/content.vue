<template>
	<a-layout-content class="app-main">
		<router-view v-slot="{ Component }">
			<keep-alive :include="computeCount.cachedViews">
				<component :is="Component" />
			</keep-alive>
			<!-- <component :is="Component" v-if="!$route.meta.keepAlive" /> -->
		</router-view>
		<!-- <router-view v-shot>
			{(data: any) => { return (
			<keep-live include="{computeCount.value.cachedViews}">
				<data.Component />
			</keep-live>
			) }}
		</router-view> -->
	</a-layout-content>
</template>

<script lang="ts">
import { TagsViewModule } from '@/store/modules/tagsView'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
	name: 'Content',
	setup() {
		const route = useRoute()
		const computeCount = computed(() => {
			return {
				cachedViews: TagsViewModule.cachedViewsList,
				notKey: route.matched.length > 2
			}
		})
		return {
			computeCount
		}
	}
})
</script>
