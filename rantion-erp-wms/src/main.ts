import Vue from 'vue'
import App from './App'
import { createRouter } from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/api'
import './styles/app.scss' // 全局样式
// 有副作用的 加载方式require 或者 在package 里面声明 sideEffects 比如 @/api
import permission from '@/permission'
import { AppModule } from '@/store/modules/app'
const pageId = 'app-wms'
require('@/components') // 加载全局组件
import { isNil } from 'ramda'
import { isWfw } from '@/utils'
Vue.use(Antd)
Vue.config.productionTip = false
interface StartProps {
	container: HTMLElement
	userInfo: any
	[index: number]: any
}
let instance: any
let router: any
function render(props?: StartProps) {
	router = createRouter()
	permission(router)
	if (props && props.userInfo) {
		AppModule.setUserInfo(props?.userInfo)
	}
	instance = new Vue({
		router,
		store,
		render: (h) => h(App)
	})
	const container = isNil(props) ? document.getElementById(pageId) : props.container.querySelector('#' + pageId)
	container && instance.$mount(container)
}
export async function bootstrap(props: any): Promise<void> {
	console.log('bootstrap' + props)
}
export async function unmount() {
	instance.$destroy()
	instance.$el.innerHTML = ''
	instance = null
	router = null
	store.commit('permission/PUT_ROUTES', []) // 卸载调菜单栏目 重新请求菜单
}
export async function mount(props: StartProps) {
	render(props)
}
if (!isWfw()) {
	router = createRouter()
	permission(router)
	new Vue({
		router,
		store,
		render: (h) => h(App)
	}).$mount('#' + pageId)
}
