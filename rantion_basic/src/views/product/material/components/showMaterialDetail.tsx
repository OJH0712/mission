/*
 * @Description:产品材质编辑
 * @Author: hyx
 * @Date: 2021-03-03 16:30
 */
/**
 * 产品材质编辑
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/19 上午11:38
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'
const rules = {
	materialNameCn: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	materialNameEn: [{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.ProductMaterialRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.ProductMaterialRequestParamsDto>
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
			const { success } = await API.basics.productMaterial.save.request(params)
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
		function init(data?: defs.basics.ProductMaterialRequestParamsDto, type?: string) {
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
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 14 }}
				>
					<a-form-item v-show={!isNil(this.searchForm.id)} name="materialNo" label="产品材质编号">
						<a-input v-model={[this.searchForm['materialNo'], 'value']} disabled />
					</a-form-item>
					<a-form-item name="materialNameCn" label="产品材质名称（CN）">
						<a-input v-model={[this.searchForm['materialNameCn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="materialNameEn" label="产品材质名称（EN）">
						<a-input v-model={[this.searchForm['materialNameEn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="materialValue" label="产品材质值">
						<a-input v-model={[this.searchForm['materialValue'], 'value']} disabled={this.isShow} />
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
