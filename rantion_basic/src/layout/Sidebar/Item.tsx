import { toRefs, PropType } from 'vue'
import { defineComponent } from 'vue'
import { isNil } from 'ramda'
import { RouteRecordRaw } from 'vue-router'
import { isExternal } from 'rantion-tools'
const Props = {
	menuInfo: {
		type: Object as PropType<RouteRecordRaw>,
		required: true
	}
}
export default defineComponent({
	props: Props,
	name: 'SidebarItem',
	setup(props, ctx) {
		const { menuInfo } = toRefs(props)
		const slots = {
			title: () => <span>{menuInfo?.value?.meta?.title}</span>
		}
		return () =>
			menuInfo ? (
				<a-sub-menu key={menuInfo?.value?.name} {...ctx} v-slots={slots}>
					{isNil(menuInfo.value?.children)
						? null
						: menuInfo.value?.children.map((item) => {
								return item.children ? (
									<sidebar-item key={item.name} menu-info={item} />
								) : item.meta?.alwaysShow ? null : (
									<a-menu-item key={item.name}>
										{isExternal(item.path) ? (
											<a href={item.path} target="_blank" rel="noopener">
												<span>{item.meta?.title}</span>
											</a>
										) : (
											<router-link to={item.path}>
												<span>{item.meta?.title}</span>
											</router-link>
										)}
									</a-menu-item>
								)
						  })}
				</a-sub-menu>
			) : null
	}
})
