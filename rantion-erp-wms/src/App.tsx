/*
 * @Description:
 * @Author: owen
 * @Date: 2021-02-19 16:27:01
 * @LastEditTime: 2021-03-08 11:06:11
 */
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Component, Provide, Vue } from 'vue-property-decorator'
import { T, F } from 'ramda'
moment.locale('zh-cn')
@Component({
	name: 'App'
})
export default class App extends Vue {
	private isRouterAlive = T()
	@Provide()
	reload() {
		this.isRouterAlive = F()
		this.$nextTick(() => {
			this.isRouterAlive = T()
		})
	}
	render() {
		return (
			<a-config-provider locale={zh_CN}>
				<div id="app-wms">{this.isRouterAlive ? <router-view /> : ''}</div>
			</a-config-provider>
		)
	}
}
