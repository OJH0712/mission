import { Component, Vue } from 'vue-property-decorator'
import { map } from 'ramda'
import SidebarItem from './Item'
import { routes } from '@/router'
import { RouteConfig } from '@/interface/Route'
import { PermissionModule } from '@/store/modules/permission'
@Component({
	name: 'Sidebar',
	components: { SidebarItem }
})
export default class Sidebar extends Vue {
	public routes = routes

	get routers() {
		return PermissionModule.routes
	}

	get selectedKeys() {
		return map((item) => item.name, this.$route.matched)
	}
	alwaysShow(data: RouteConfig) {
		if (data.alwaysShow) {
			return null
		}
		return (
			<a-menu-item key={data.name}>
				<a-icon type="pie-chart" />
				<span>{data.meta.title}</span>
			</a-menu-item>
		)
	}
	public render() {
		const defaultOpenKeys = map((item) => item.name, this.$route.matched)
		return (
			<a-menu mode="inline" selectedKeys={this.selectedKeys} default-open-keys={defaultOpenKeys} default-selected-keys={defaultOpenKeys}>
				{map((item) => (item.children ? <sidebar-item key={item.name} menu-info={item} /> : this.alwaysShow(item)), this.routers)}
			</a-menu>
		)
	}
}
