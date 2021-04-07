import { defineComponent, computed } from 'vue'
import { Modal } from 'ant-design-vue'
import { AppModule } from '@/store/modules/app'
import $styles from './style/index.module.css'
import { useRoute } from 'vue-router'
function gotoMe() {
	location.href = `/personal/${AppModule.userInfo.userNo}`
}
import { map } from 'ramda'
function gotoIdex() {
	location.href = '/'
}
function toggleCollapsed() {
	AppModule.ToggleCollapsed()
}
export default defineComponent({
	name: 'Header',
	setup() {
		const route = useRoute()
		const computeCount = computed(() => {
			return {
				collapsed: AppModule.collapsed,
				breadcrumbItem: map(
					(item) => ({
						breadcrumbName: item.meta.title,
						path: item.path
					}),
					route.matched
				)
			}
		})
		function loginOut() {
			Modal.confirm({
				title: '注销',
				content: '确定注销吗？',
				okText: '确认',
				cancelText: '取消',
				onOk: () => {
					AppModule.userLogout()
				}
			})
		}

		return () => (
			<a-layout-header style="background: #fff; padding: 0">
				<div class={$styles.flexSb}>
					<div class={$styles.flex}>
						<div class={$styles.trigger}>
							<a-icon
								class="trigger"
								type={computeCount.value.collapsed ? 'menu-unfold' : 'menu-fold'}
								on-click={toggleCollapsed}
							/>
						</div>
						<a-page-header
							breadcrumb={{
								props: {
									routes: computeCount.value.breadcrumbItem
								}
							}}
						/>
					</div>
					<a-dropdown>
						<a class="admin-top-av" on-click={(e: MouseEvent) => e.preventDefault()}>
							<a-avatar size={32} icon="user" src={AppModule.userInfo.avatar} />
							{AppModule.userInfo.userName} <a-icon type="down" />
						</a>
						<a-menu slot="overlay">
							<a-menu-item on-click={gotoIdex}>
								<div>首页</div>
							</a-menu-item>
							<a-menu-item on-click={gotoMe}>
								<div>个人中心</div>
							</a-menu-item>
							<a-menu-item on-click={loginOut}>
								<div>注销</div>
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
			</a-layout-header>
		)
	}
})
