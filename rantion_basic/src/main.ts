import { createApp } from 'vue'
import App from './App'
import { routes, webHistory } from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import './styles/app.scss' // 全局样式
import Antd from 'ant-design-vue'
import Rantion from 'rantion'
import AppComponents from '@/components/'
import func from '@/permission'
import { isNil } from 'ramda'
import { isWfw } from './utils'
import { createRouter } from 'vue-router'

let vueApp: any
let router: any
interface StartProps {
	container: HTMLElement
	userInfo: any
	[index: number]: any
}

function render(props?: StartProps) {
	router = createRouter({
		history: webHistory.getHistory(),
		routes
	})
	func(router)
	vueApp = createApp(App)
		.use(router)
		.use(store)
		.use(Antd)
		.use(Rantion)
		.use(AppComponents)
	if (vueApp) {
		const container = isNil(props)
			? document.getElementById('rantion-basics')
			: props.container.querySelector('#rantion-basics')
		vueApp.mount(container)
	}
}

if (!isWfw()) {
	render()
	require('@/api')
}

export async function mount(props?: StartProps) {
	render(props)
}

export async function unmount() {
	webHistory.destroy()
	vueApp.unmount()
	vueApp._container.innerHTML = ''
	vueApp = null
	router = null
	store.commit('permission/PUT_ROUTES', [])
}

export async function bootstrap() {
	console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}
