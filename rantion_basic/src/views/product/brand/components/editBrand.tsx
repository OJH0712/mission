//新增编辑产品品牌
/**
 * 新增编辑产品品牌
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/11 下午2:38
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'
const rules = {
	brandNameCn: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	brandNameEn: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	brandAbbreviation: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 50, message: '最多50个字符', trigger: 'blur' }
	],
	description: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 200, message: '最多200个字符', trigger: 'blur' }
	],
	status: [{ required: true, type: 'number', message: '请选择状态', trigger: 'blur' }]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.ProductBrandRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.ProductBrandRequestParamsDto>
}
export default defineComponent({
	name: 'EditBrand',
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
			const { success } = await API.basics.productBrand.save.request(params)
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
		function init(data?: defs.basics.ProductBrandRequestParamsDto, type?: string) {
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
					<a-form-item v-show={!isNil(this.searchForm.id)} name="brandNo" label="品牌编号">
						<a-input v-model={[this.searchForm['brandNo'], 'value']} disabled />
					</a-form-item>
					<a-form-item name="brandNameCn" label="品牌名称(CN)">
						<a-input v-model={[this.searchForm['brandNameCn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="brandNameEn" label="品牌名称(EN)">
						<a-input v-model={[this.searchForm['brandNameEn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="brandAbbreviation" label="品牌简称">
						<a-input v-model={[this.searchForm['brandAbbreviation'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="initialsCn" label="中文首字母">
						<a-input v-model={[this.searchForm['initialsCn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="initialsEn" label="英文首字母">
						<a-input v-model={[this.searchForm['initialsEn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="status" label="状态">
						<a-select v-model={[this.searchForm['status'], 'value']} disabled={this.isShow}>
							<a-select-option value={0}>停用</a-select-option>
							<a-select-option value={1}>启用</a-select-option>
						</a-select>
					</a-form-item>
					<a-form-item name="description" label="描述">
						<a-textarea v-model={[this.searchForm['description'], 'value']} rows={3} disabled={this.isShow} />
					</a-form-item>
				</a-form>
			</a-modal>
		)
	}
})
