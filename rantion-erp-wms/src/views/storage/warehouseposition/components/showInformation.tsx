/**
 * 查看库位信息
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/23 15:10:23
 */
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class ShowInformation extends Vue {
	setInformationVisible = false
	formvisible = true
	centered = true
	public searchForm: API.wms.warehousePosition.list.Params = {}
	private informationList: API.wms.warehousePosition.list.Params = {
		warehouseCode: '',
		areaCode: '',
		shelvesCode: '',
		groupCode: '',
		positionCode: '',
		order: 0,
		column: 0,
		layer: 0
	}
	cancel() {
		this.setInformationVisible = false
	}
	init(list: object) {
		this.setInformationVisible = true
		this.informationList = list
		console.log(this.informationList)
	}
	async handleOk() {
		this.setInformationVisible = false
	}

	public render() {
		return (
			<a-modal destroyOnClose title="适用仓库设置" visible={this.setInformationVisible} on-ok={this.handleOk} on-cancel={this.cancel}>
				<a-form-model
					class="ant-advanced-search-form"
					{...{
						attrs: {
							'label-col': { span: 4 },
							wrapperCol: { span: 19 },
							model: this.searchForm
						}
					}}
				>
					<a-form-model-Item prop="positionCode" label="库位编号">
						<a-input value={this.informationList.positionCode} disabled={this.formvisible} />
					</a-form-model-Item>
					<a-form-model-item prop="warehouseCode" label="所属仓库">
						<form-warehouse-code value={this.informationList.warehouseCode} disabled={this.formvisible} />
					</a-form-model-item>
					<a-form-model-Item prop="areaCode" label="所属库区">
						<a-select v-model={this.informationList.areaCode} disabled={this.formvisible}></a-select>
					</a-form-model-Item>
					<a-form-model-Item prop="groupCode" label="所属货架组">
						<a-select value={this.informationList.groupCode} disabled={this.formvisible} width="100%"></a-select>
					</a-form-model-Item>
					<a-form-model-Item prop="column" label="列号">
						<a-input value={this.informationList.column} disabled={this.formvisible} />
					</a-form-model-Item>
					<a-form-model-Item prop="order" label="拣货顺序">
						<a-input value={this.informationList.order} disabled={this.formvisible} />
					</a-form-model-Item>
					<a-form-model-Item prop="volume" label="体积(mm3)">
						<a-input value={this.informationList.volume} disabled={this.formvisible} />
					</a-form-model-Item>
				</a-form-model>
			</a-modal>
		)
	}
}
