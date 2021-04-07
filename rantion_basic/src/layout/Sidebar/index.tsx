import { defineComponent, computed } from 'vue'
import { map } from 'ramda'
import SidebarItem from './Item'
// import { routes } from '@/router'
// import { PermissionModule } from '@/store/modules/permission'
import { PermissionModule } from '@/store/modules/permission'
import { RouteRecordRaw, useRoute } from 'vue-router'
export default defineComponent({
	components: { SidebarItem },
	setup() {
		const route = useRoute()
		function alwaysShow(data: RouteRecordRaw) {
			if (data.meta?.alwaysShow) {
				return null
			}
			return (
				<a-menu-item key={data.name}>
					<a-icon type="pie-chart" />
					<span>{data.meta?.title}</span>
				</a-menu-item>
			)
		}
		const computeCount = computed(() => {
			return {
				routers: PermissionModule.routes,
				selectedKeys: map((item) => item.name, route.matched)
			}
		})
		const defaultOpenKeys = map((item) => item.name, route.matched)
		return () => (
			<a-menu
				mode="inline"
				selectedKeys={computeCount.value.selectedKeys}
				default-open-keys={defaultOpenKeys}
				default-selected-keys={defaultOpenKeys}
			>
				{map(
					(item) => (item.children ? <sidebar-item key={item.name} menu-info={item} /> : alwaysShow(item)),
					computeCount.value.routers
				)}
			</a-menu>
		)
	}
})
