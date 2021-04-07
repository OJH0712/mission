import Sidebar from './Sidebar'
import { Component, Vue } from 'vue-property-decorator'
import Header from './header'
import Content from './content'
import TagsView from './TagsView'
import { isWfw } from '@/utils'
import { AppModule } from '@/store/modules/app'
@Component({
	name: 'layout',
	components: { Sidebar, Content, TagsView, Header }
})
export default class Layout extends Vue {
	get collapsed() {
		return AppModule.collapsed
	}
	render() {
		return (
			<a-layout id="components-layout-demo-custom-trigger">
				<a-layout-sider v-model={this.collapsed} width={180} theme="light" trigger={null} collapsible={true}>
					<Sidebar />
				</a-layout-sider>
				<a-layout>
					{isWfw() ? null : <Header />}
					<TagsView />
					<Content />
				</a-layout>
			</a-layout>
		)
	}
}
