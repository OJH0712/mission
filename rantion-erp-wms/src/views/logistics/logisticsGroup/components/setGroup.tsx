/*
 * @Author: Chan
 * @Date: 2021-02-24 14:55:24
 * @LastEditTime: 2021-02-24 16:38:49
 * @LastEditors: Chan
 * @Description: 设置物流分组
 */

import { isEmpty, isNil } from 'ramda'
import { Component, Ref, Vue } from 'vue-property-decorator'
const rules = {
	logisticsGroupName: [{ required: true, message: '请输入物流分组名称', trigger: 'blur' }]
}
@Component
export default class SetGroup extends Vue {
	calcVisible = false
	cost: string | number
	@Ref('formName') readonly formNameRef!: HTMLFormElement
	public searchForm: any = {
		logisticsGroupCode: '',
		logisticsGroupName: ''
	}

	init(code?: string, name?: string) {
		this.calcVisible = true
		if (!isNil(code) && !isNil(name)) {
			this.searchForm = {
				logisticsGroupCode: code,
				logisticsGroupName: name
			}
		} else {
			this.searchForm = {
				logisticsGroupCode: '',
				logisticsGroupName: ''
			}
		}
	}
	cancel() {
		this.calcVisible = false
	}

	public async create() {
		this.formNameRef.validate(async (valid: boolean) => {
			if (!valid) return false
			const { logisticsGroupCode, ...param } = this.searchForm
			if (isEmpty(this.searchForm.logisticsGroupCode)) {
				const { success } = await API.wms.logisticsGroup.add.request({ ...param, status: 1 })
				success && this.$message.success('创建成功')
			} else {
				const { success } = await API.wms.logisticsGroup.modifyGroupName.request(param.logisticsGroupName, { logisticsGroupCode })
				success && this.$message.success('修改成功')
			}
			this.cancel()
			this.$emit('search')
			return true
		})
	}

	public render() {
		return (
			<a-modal title="设置物流分组" visible={this.calcVisible} on-ok={this.create} on-cancel={this.cancel} ok-text="保存" cancel-text="关闭">
				<a-form-model
					ref="formName"
					class="ant-advanced-search-form"
					{...{
						attrs: {
							'label-col': { span: 6 },
							wrapperCol: { span: 14 },
							model: this.searchForm,
							rules: rules
						}
					}}
				>
					<a-form-model-item label="分组编码">
						<a-input disabled v-model={this.searchForm.logisticsGroupCode} />
					</a-form-model-item>
					<a-form-model-item label="分组名称">
						<a-input v-model={this.searchForm.logisticsGroupName} />
					</a-form-model-item>
				</a-form-model>
			</a-modal>
		)
	}
}
