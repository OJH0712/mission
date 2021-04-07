import { defineComponent, computed, ref, watch, onMounted } from 'vue'
import { TagsViewModule, TagView } from '@/store/modules/tagsView'
import { equals, isNil, map } from 'ramda'
import $styles from '../style/index.module.css'
import { RouteLocationNormalizedLoaded, useRoute, useRouter } from 'vue-router'
export default defineComponent({
	name: 'TagsView',
	setup() {
		const selectTag = ref<Partial<TagView>>({})
		const route = useRoute()
		const router = useRouter()
		const computeCount = computed(() => {
			return {
				visitedViews: TagsViewModule.tagViewList
			}
		})
		onMounted(() => {
			addViewTags(route)
		})
		watch(
			() => route.fullPath,
			() => {
				addViewTags(route)
			}
		)
		function tagClassName(tag: TagView) {
			return equals(tag.path, route.path) ? `${$styles.tagsViewItem} ${$styles.select}` : $styles.tagsViewItem
		}
		async function closeTag(tag: TagView) {
			await TagsViewModule.delView(tag)
			const latestView = TagsViewModule.tagViewList.slice(-1)[0]
			if (latestView && !isNil(latestView.path)) {
				await router.push(latestView.path)
			} else {
				await router.push('/')
			}
		}
		function openMenu(tag: TagView) {
			selectTag.value = tag
		}
		function addViewTags(route: RouteLocationNormalizedLoaded) {
			const { name } = route
			if (!isNil(name)) {
				TagsViewModule.addView((route as any) as TagView)
			}
			return false
		}
		return () => (
			<div class={$styles.tagsViewContainer} style="background: #fff;padding-left: 16px;">
				<div class={$styles.tagsViewWrapper}>
					{map(
						(tag) => (
							<router-link
								to={{ path: tag.path, query: tag.query, fullPath: tag.fullPath }}
								class={tagClassName(tag)}
								color="#fff"
								onContextmenu={(event: MouseEvent) => {
									equals(2, event.button) && openMenu(tag)
								}}
							>
								{tag.title}
								<a-icon
									type="close"
									class={$styles.closeIcon}
									onClick={(event: MouseEvent) => {
										event.stopPropagation()
										event.preventDefault()
										closeTag(tag)
									}}
								></a-icon>
							</router-link>
						),
						computeCount.value.visitedViews
					)}
				</div>
			</div>
		)
	}
})
