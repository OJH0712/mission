/*
 * @Description:物流分组详情
 * @Author: hyx
 * @Date: 2021-03-23 11:30
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'
const rules = {
	groupNameCn: [
		{ required: true, message: '必填项不能为空', trigger: 'change' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'change' }
	],
	groupNameEn: [
		{ required: true, message: '必填项不能为空', trigger: 'change' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'change' }
	],
	status: [{ required: true, type: 'number', message: '请选择状态', trigger: 'change' }]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.LogisticsGroupRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.LogisticsGroupRequestParamsDto>
}
export default defineComponent({
	name: 'ShowGroup',
	emits: ['search'],
	methods: {
		cancel() {
			this.visible = false
		},
		async save() {
			if (this.isShow) {
				this.cancel()
				return
			}
			await (this.$refs.searchFormRef as Aform)?.validate()
			const params = this.searchForm
			const { success } = await API.basics.logisticsGroup.save.request(params)
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
			isShow: false,
			searchForm: {}
		})
		const searchFormRef = ref<Aform>()
		function init(data?: defs.basics.LogisticsGroupRequestParamsDto, type?: string) {
			if (data) {
				state.searchForm = data
				state.isShow = equals('show', type)
				state.visible = true
				return true
			}
			state.searchForm = {}
			state.searchForm.status = 1
			state.visible = true
		}
		return {
			searchFormRef,
			init,
			...toRefs(state)
		}
	},
	render() {
		return (
			<a-modal
				visible={this.visible}
				title={this.isShow ? '查看' : isNil(this.searchForm.id) ? '新增' : '编辑'}
				onCancel={this.cancel}
				onOk={this.save}
				destroyOnClose
			>
				<a-form
					class="ant-advanced-search-form"
					ref="searchFormRef"
					rules={rules}
					model={this.searchForm}
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 16 }}
				>
					<a-form-item v-show={!isNil(this.searchForm.id)} name="groupNo" label="物流分组编号">
						<a-input v-model={[this.searchForm['groupNo'], 'value']} disabled />
					</a-form-item>
					<a-form-item name="groupNameCn" label="物流分组中文名">
						<a-input v-model={[this.searchForm['groupNameCn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="groupNameEn" label="物流分组英文名">
						<a-input v-model={[this.searchForm['groupNameEn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="status" label="状态">
						<a-select v-model={[this.searchForm['status'], 'value']} disabled={this.isShow}>
							<a-select-option value={0}>停用</a-select-option>
							<a-select-option value={1}>启用</a-select-option>
						</a-select>
					</a-form-item>
				</a-form>
			</a-modal>
		)
	}
})
