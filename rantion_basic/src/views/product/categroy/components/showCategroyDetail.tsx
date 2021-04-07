/*
 * @Description:产品品类编辑
 * @Author: hyx
 * @Date: 2021-03-03 16:00
 */
/**
 * 产品品类编辑
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/9 下午15:38
 */
import { defineComponent, reactive, ref, toRefs } from 'vue'
import { isNil, equals } from 'ramda'
import { notification } from 'ant-design-vue'
// 校验规则
const CheckFuncList = {
	checkOutlevelNum: (rule: object, value: string, callback: Function) => {
		if (!value) {
			callback()
		} else {
			const flag = /[^0-9]/g.test(value)
			if (flag) {
				callback('等级必须为正整数')
			}
		}
		callback()
	}
}
const rules = {
	categoryNameCn: [
		{ required: true, message: '必填项不能为空', trigger: 'blur' },
		{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }
	],
	categoryNo: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	categoryNameEn: [{ min: 1, max: 100, message: '最多100个字符', trigger: 'blur' }],
	// parentCategoryNo: [{ required: true, message: '必填项不能为空', trigger: 'blur' }],
	levelNum: [{ validator: CheckFuncList.checkOutlevelNum }]
}
interface State {
	visible: boolean
	isShow: boolean
	searchForm: defs.basics.ProductCategroyRequestParamsDto
}
interface Aform {
	validate: () => Promise<defs.basics.ProductCategroyRequestParamsDto>
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
			const { success } = await API.basics.productCategroy.save.request(params)
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
		function init(data?: defs.basics.ProductCategroyRequestParamsDto, type?: string) {
			if (data) {
				state.searchForm = data
			}
			state.searchForm.status = 1
			state.isShow = equals('show', type)
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
					<a-form-item name="categoryNo" label="品类编码">
						<a-input v-model={[this.searchForm['categoryNo'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="categoryNameCn" label="品类名称（CN）">
						<a-input v-model={[this.searchForm['categoryNameCn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="categoryNameEn" label="品类名称（EN）">
						<a-input v-model={[this.searchForm['categoryNameEn'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="levelNum" label="等级">
						<a-input v-model={[this.searchForm['levelNum'], 'value']} disabled={this.isShow} />
					</a-form-item>
					<a-form-item name="parentCategoryNo" label="上级品类编码">
						<a-input v-model={[this.searchForm['parentCategoryNo'], 'value']} disabled={this.isShow} />
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
