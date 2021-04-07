import Vue from 'vue'
import { CreateElement, RenderContext } from 'vue'
import { isNil, map } from 'ramda'
import { RouteConfig } from '@/interface/Route'
import AppLink from './Link'
Vue.component('AppLink', AppLink)
export default Vue.extend({
	name: 'SidebarItem',
	functional: true,
	render(h: CreateElement, context: RenderContext<{ menuInfo: RouteConfig }>) {
		const { menuInfo } = context.props
		return (
			<a-sub-menu key={menuInfo.name} {...{ on: context.listeners }}>
				<span slot="title">
					{/* <a-icon type={menuInfo.} /> */}
					<span>{menuInfo.meta.title}</span>
				</span>
				{isNil(menuInfo.children)
					? null
					: map((item) => {
							return item.children ? (
								<sidebar-item key={item.name} menu-info={item} />
							) : item.alwaysShow ? null : (
								<a-menu-item key={item.name}>
									<app-link to={item.path}>
										<span>{item.meta.title}</span>
									</app-link>
								</a-menu-item>
							)
					  }, menuInfo.children)}
			</a-sub-menu>
		)
	}
})
