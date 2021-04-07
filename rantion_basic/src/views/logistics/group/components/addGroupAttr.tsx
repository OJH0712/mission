/*
 * @Description:添加物流属性
 * @Author: hyx
 * @Date: 2021-03-23 18:10
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isEmpty, isNil, map } from 'ramda'
import { notification, message } from 'ant-design-vue'
interface State {
	visible: boolean
	groupNo: string
	logisticsAttrList: Array<defs.basics.LogisticsAttrResponseDto>
	groupModelList: Array<defs.basics.LogisticsAttrResponseDto>
	attrNo: string
}
interface Aform {
	validate: () => Promise<defs.basics.LogisticsGroupDetailsResponseDto>
}
export default defineComponent({
	name: 'AddAttr',
	emits: ['search'],
	methods: {
		cancel() {
			this.visible = false
		},
		async save() {
			if (isEmpty(this.attrNo) || isNil(this.attrNo)) {
				message.error('请选择物流属性')
				return false
			}
			const hasAttrNo = this.groupModelList.find((item) => item.attrNo === this.attrNo)
			if (hasAttrNo) {
				message.error('和现有物流属性重复')
				return false
			}
			const groupModelObj = this.logisticsAttrList.find((item) => item.attrNo === this.attrNo)
			const params = {
				...groupModelObj,
				groupNo: this.groupNo
			}
			const { success } = await API.basics.logisticsGroupAttr.save.request(params)
			if (success) {
				notification.success({
					description: '保存成功'
				})
				this.$emit('search')
				this.cancel()
			}
			return true
		}
	},
	setup() {
		const state = reactive<State>({
			visible: false,
			groupNo: '',
			logisticsAttrList: [],
			groupModelList: [],
			attrNo: ''
		})
		const searchFormRef = ref<Aform>()
		async function init(groupNo: string) {
			state.visible = true
			state.groupNo = groupNo
			const { data, success } = await API.basics.logisticsAttr.page.request({ size: 999, current: 1 })
			if (success && !isNil(data) && !isNil(data.records)) {
				state.logisticsAttrList = data.records
			}
			const request = {
				groupNo
			}
			const response = await API.basics.logisticsGroupAttr.list.request(request)
			if (response.success && !isNil(response.data)) {
				state.groupModelList = response.data
			}
		}
		return {
			searchFormRef,
			init,
			...toRefs(state)
		}
	},
	render() {
		return (
			<a-modal visible={this.visible} title="添加物流属性" onCancel={this.cancel} onOk={this.save} destroyOnClose>
				<a-form class="ant-advanced-search-form" ref="searchFormRef" labelCol={{ span: 6 }} wrapperCol={{ span: 16 }}>
					<a-form-item label="物流分组编号">
						<a-input v-model={[this.groupNo, 'value']} disabled />
					</a-form-item>
					<a-form-item label="物流属性">
						<a-select v-model={[this.attrNo, 'value']}>
							{map(
								(item: defs.basics.LogisticsAttrResponseDto) => (
									<a-select-option value={item.attrNo} key={item.id}>
										{item.attrNameCn}
									</a-select-option>
								),
								this.logisticsAttrList
							)}
						</a-select>
					</a-form-item>
				</a-form>
			</a-modal>
		)
	}
})
