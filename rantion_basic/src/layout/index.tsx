import Sidebar from './Sidebar'
import { defineComponent, computed } from 'vue'
import Header from './header'
import Content from './content.vue'
import TagsView from './TagsView'
import { isWfw } from '@/utils'
import { AppModule } from '@/store/modules/app'
export default defineComponent({
	name: 'layout',
	components: { Sidebar, Content, TagsView, Header },
	setup() {
		const computeCount = computed(() => {
			return {
				collapsed: AppModule.collapsed
			}
		})
		return () => (
			<a-layout id="components-layout-demo-custom-trigger">
				<a-layout-sider
					v-model={computeCount.value.collapsed}
					width={180}
					theme="light"
					trigger={null}
					collapsible={true}
				>
					<sidebar />
				</a-layout-sider>
				<a-layout>
					{isWfw() ? null : <Header />}
					<tags-view />
					<Content />
				</a-layout>
			</a-layout>
		)
	}
})
