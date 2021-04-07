/**
 * 添加修改模块
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/24 下午14:38
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'

const CheckFuncList = {
	checkOutSecondWord: (rule: object, value: string, callback: Function) => {
		if (value && value.length !== 2) {
			callback('长度必须为2')
		}
		callback()
	},
	checkOutdigitalCode: (rule: object, value: string, callback: Function) => {
		const flag = /[^0-9]/g
		if (value && (flag.test(value) || value.length > 15)) {
			callback('数字码必须是整数且长度不能大于15')
		}
		callback()
	}
}
const rules = {
	countryNameCn: [
		{ required: true, message: '必填项不能为空' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	countryNameEn: [{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }],
	digitalCode: [{ validator: CheckFuncList.checkOutdigitalCode }],
	secondWord: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ validator: CheckFuncList.checkOutSecondWord }
	]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.BaseCityRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.BaseCityRequestParamsDto>
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
			const { success } = await API.basics.baseCity.save.request(params)
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
		function init(data?: defs.basics.BaseCityRequestParamsDto, type?: string) {
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
					labelCol={{ span: 6 }}
					wrapperCol={{ span: 16 }}
				>
					<a-form-item name="secondWord" label="二字码">
						<a-input v-model={[this.searchForm['secondWord'], 'value']} disabled={!isNil(this.searchForm.id)} />
					</a-form-item>
					<a-form-item name="cityNameCn" label="中文名称">
						<a-input
							v-model={[this.searchForm['cityNameCn'], 'value']}
							disabled={this.isShow}
							placeholder="请输入中文名称"
						/>
					</a-form-item>
					<a-form-item name="cityNameEn" label="英文名称">
						<a-input
							v-model={[this.searchForm['cityNameEn'], 'value']}
							disabled={this.isShow}
							placeholder="请输入英文名称"
						/>
					</a-form-item>
					<a-form-item name="cityCode" label="数字码">
						<a-input
							v-model={[this.searchForm['cityCode'], 'value']}
							disabled={this.isShow}
							placeholder="请输入数字码"
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
