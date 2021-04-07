import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

moment.locale('en')
export default defineComponent({
	name: 'App',
	render() {
		return (
			<a-config-provider locale={zhCN}>
				<router-view />
			</a-config-provider>
		)
	}
})
