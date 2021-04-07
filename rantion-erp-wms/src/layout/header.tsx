import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import $styles from './style/index.module.css'
import { map } from 'ramda'
// import loggo from '@/assets/logo.png'
@Component({
	name: 'Header'
})
export default class Header extends Vue {
	get breadcrumbItem(): Array<{ breadcrumbName: string; path: string }> {
		return map(
			(item) => ({
				breadcrumbName: item.meta.title,
				path: item.path
			}),
			this.$route.matched
		)
	}
	get collapsed() {
		return AppModule.collapsed
	}
	public toggleCollapsed() {
		AppModule.ToggleCollapsed()
	}
	public gotoIdex() {
		location.href = '/'
	}
	public loginOut() {
		this.$confirm({
			title: '注销',
			content: '确定注销吗？',
			okText: '确认',
			cancelText: '取消',
			onOk: () => {
				AppModule.userLogout()
			}
		})
	}
	public gotoMe() {
		location.href = `/personal/${AppModule.userInfo.userNo}`
	}
	render() {
		return (
			<a-layout-header style="background: #fff; padding: 0">
				<div class={$styles.flexSb}>
					<div class={$styles.flex}>
						<a-page-header
							breadcrumb={{
								props: {
									routes: this.breadcrumbItem
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
							<a-menu-item on-click={this.gotoIdex}>
								<div>首页</div>
							</a-menu-item>
							<a-menu-item on-click={this.gotoMe}>
								<div>个人中心</div>
							</a-menu-item>
							<a-menu-item on-click={this.loginOut}>
								<div>注销</div>
							</a-menu-item>
						</a-menu>
					</a-dropdown>
				</div>
			</a-layout-header>
		)
	}
}
