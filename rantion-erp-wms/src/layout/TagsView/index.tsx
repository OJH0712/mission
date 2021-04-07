import { Component, Watch, Vue } from 'vue-property-decorator'
import { TagsViewModule, TagView } from '@/store/modules/tagsView'
import { equals, isNil, map } from 'ramda'
import $styles from '../style/index.module.css'
@Component({
	name: 'TagsView'
})
export default class TagsView extends Vue {
	public selectTag: Partial<TagView> = {}
	@Watch('$route')
	on$route() {
		// console.log(this.$route.path)
		this.addViewTags()
	}
	get visitedViews() {
		return TagsViewModule.tagViewList
	}
	mounted() {
		this.addViewTags()
	}
	public addViewTags() {
		const { name } = this.$route
		if (!isNil(name)) {
			TagsViewModule.addView(this.$route as TagView)
		}
		return false
	}
	tagClassName(tag: TagView) {
		return equals(tag.path, this.$route.path) ? `${$styles.tagsViewItem} ${$styles.select}` : $styles.tagsViewItem
	}
	async closeTag(tag: TagView) {
		await TagsViewModule.delView(tag)
		const latestView = TagsViewModule.tagViewList.slice(-1)[0]
		if (latestView && !isNil(latestView.path)) {
			console.log('go', latestView.path)
			await this.$router.push(latestView.path)
		} else {
			await this.$router.push('/')
		}
	}
	openMenu(tag: TagView) {
		// 显示鼠标右键
		this.selectTag = tag
	}
	render() {
		return (
			<div class={$styles.tagsViewContainer} style="background: #fff;padding-left: 16px;">
				<div class={$styles.tagsViewWrapper}>
					{map(
						(tag) => (
							<router-link
								to={{ path: tag.path, query: tag.query, fullPath: tag.fullPath }}
								class={this.tagClassName(tag)}
								color="#fff"
								onContextmenu={(event: MouseEvent) => {
									equals(2, event.button) && this.openMenu(tag)
								}}
							>
								{tag.title}
								<a-icon
									type="close"
									class={$styles.closeIcon}
									onClick={(event: MouseEvent) => {
										event.stopPropagation()
										event.preventDefault()
										this.closeTag(tag)
									}}
								/>
							</router-link>
						),
						this.visitedViews
					)}
				</div>
			</div>
		)
	}
}
