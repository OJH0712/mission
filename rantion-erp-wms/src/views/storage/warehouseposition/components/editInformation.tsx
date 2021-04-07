/**
 * 编辑库位信息
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/24 上午11:38
 */

import { Component, Vue, Ref, Inject } from 'vue-property-decorator'
import { F, T } from 'ramda'

@Component
export default class EditInformation extends Vue {
	setInformationVisible = F()
	formvisible = T()
	list: any
	order: number
	volume: number
	public searchForm: API.wms.warehousePosition.list.Params = {}
	private informationList: any = {}
	@Ref('searchFormRef') readonly searchFormRef!: HTMLFormElement
	@Inject()
	reload!: Function
	cancel() {
		this.setInformationVisible = false
	}
	init(list: object) {
		this.setInformationVisible = true
		this.informationList = list
		this.list = list
		//	console.log('list', list)

		//	console.log(this.informationList)
	}
	public async handleOk() {
		//console.log(this.informationList)
		const message = '修改成功'
		const { success } = await API.wms.warehousePosition.modify.request(this.informationList)
		if (success) {
			this.$notification.success({
				message: '提示',
				description: message
			})
			this.$emit('add-brand')
			this.setInformationVisible = false
			this.reload()
		}
	}

	public render() {
		return (
			<a-modal destroyOnClose title="适用仓库设置" visible={this.setInformationVisible} on-ok={this.handleOk} on-cancel={this.cancel}>
				<a-form-model
					class="ant-advanced-search-form"
					ref="searchFormRef"
					{...{
						attrs: {
							'label-col': { span: 4 },
							wrapperCol: { span: 19 },
							model: this.searchForm
						}
					}}
				>
					<a-form-model-Item prop="positionCode" label="库位编号">
						<a-input v-model={this.informationList.positionCode} disabled={this.formvisible} />
					</a-form-model-Item>
					<a-form-model-item prop="warehouseCode" label="所属仓库">
						<form-warehouse-code v-model={this.informationList.warehouseCode} disabled={this.formvisible} />
					</a-form-model-item>
					<a-form-model-Item prop="areaCode" label="所属库区">
						<a-select v-model={this.informationList.areaCode} disabled={this.formvisible}></a-select>
					</a-form-model-Item>
					<a-form-model-Item prop="groupCode" label="所属货架组">
						<a-select v-model={this.informationList.groupCode} disabled={this.formvisible} width="100%"></a-select>
					</a-form-model-Item>
					<a-form-model-Item prop="column" label="列号">
						<a-input v-model={this.informationList.column} disabled={this.formvisible} />
					</a-form-model-Item>
					<a-form-model-Item prop="order" label="拣货顺序">
						<a-input v-model={this.informationList.order} />
					</a-form-model-Item>
					<a-form-model-Item prop="volume" label="体积(mm3)">
						<a-input v-model={this.informationList.volume} />
					</a-form-model-Item>
				</a-form-model>
			</a-modal>
		)
	}
}
