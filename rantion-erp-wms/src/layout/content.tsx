import { TagsViewModule } from '@/store/modules/tagsView'
import { Component, Vue } from 'vue-property-decorator'
@Component({
	name: 'Content'
})
export default class extends Vue {
	get cachedViews() {
		return ['indexView', 'Dashboard', ...TagsViewModule.cachedViewsList]
	}

	get notKey() {
		return this.$route.matched.length > 2
	}

	get key() {
		return this.$route.fullPath
	}
	render() {
		return (
			<a-layout-content class="app-main">
				<keep-alive include={this.cachedViews}>
					<router-view key={this.key} />
				</keep-alive>
			</a-layout-content>
		)
	}
}
