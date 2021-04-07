/**
 * 添加修改模块
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/3/3 下午15:38
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'
const rules = {
	typeNameCn: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	typeNameEn: [{ min: 1, max: 40, message: '最多40个字符', trigger: 'blur' }],
	typeAbbreviation: [{ min: 1, max: 15, message: '最多15个字符', trigger: 'blur' }]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.BaseUnitTypeRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.BaseUnitTypeRequestParamsDto>
}
export default defineComponent({
	name: 'ShowDetail',
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
			const { success } = await API.basics.baseUnitType.save.request(params)
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
		function init(data?: defs.basics.BaseUnitTypeRequestParamsDto, type?: string) {
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
		//取消
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
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 14 }}
				>
					<a-form-item v-show={!isNil(this.searchForm.id)} name="unitTypeNo" label="单位类型编号">
						<a-input v-model={[this.searchForm['unitTypeNo'], 'value']} disabled />
					</a-form-item>
					<a-form-item name="typeNameCn" label="单位类型名称（CN）">
						<a-input
							v-model={[this.searchForm['typeNameCn'], 'value']}
							disabled={this.isShow}
							placeholder="请输入单位类型名称（CN）"
						/>
					</a-form-item>
					<a-form-item name="typeNameEn" label="单位类型名称（EN）">
						<a-input
							v-model={[this.searchForm['typeNameEn'], 'value']}
							disabled={this.isShow}
							placeholder="请输入单位类型名称（EN）"
						/>
					</a-form-item>
					<a-form-item name="typeAbbreviation" label="单位类型简称">
						<a-input
							v-model={[this.searchForm['typeAbbreviation'], 'value']}
							disabled={this.isShow}
							placeholder="请输入单位类型简称"
						/>
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
