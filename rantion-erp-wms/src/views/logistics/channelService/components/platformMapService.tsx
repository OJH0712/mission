/*
 * @Author: gtlong
 * @Date: 2021-02-20 16:14:17
 * @LastEditTime: 2021-02-23 11:27:14
 * @LastEditors: gtlong
 * @Description: 添加/修改平台映射
 */
import { isNil } from 'ramda'
import { Component, Vue } from 'vue-property-decorator'
const rules = {
	channelName: [{ required: true, message: '渠道服务不能为空', trigger: 'blur' }]
}
@Component
export default class PlatformMapService extends Vue {
	visible = false
	pageForm: Partial<defs.wms.LogisticsChannelMsgRequestDto> = {}
	channelCode = ''
	providerCode = ''
	channelName = ''
	tableData: any[] = []
	platformList = []
	async init(channelName: string, providerCode: string, channelCode: string) {
		this.visible = true
		this.channelName = channelName
		this.providerCode = providerCode
		this.channelCode = channelCode
		const info = {
			providerCode: providerCode,
			channelCode: channelCode
		}
		// 获取映射关系
		const { data } = await API.wms.logisticsChannelPlatform.list.request(info)
		// const platform = await findPlatform()
		const platform = {
			data: {
				list: [
					{
						belongType: 30,
						createBy: 'system',
						createId: 1,
						createTime: '2019-07-12 06:06:12',
						deleted: 0,
						fullCategoryFlag: 0,
						id: 1,
						immediatePaymentFlag: 0,
						lockVersion: 2,
						name: 'shopify',
						outOfStockOption: 0,
						platformSites: [],
						productMultipleAttributesFlag: 1,
						productTagsFlag: 1,
						status: 'effective',
						updateBy: '',
						updateId: -1,
						updateTime: '2020-10-13 15:16:14',
						vatTaxRateFlag: 0
					}
				]
			}
		}
		const listPlatform = platform.data.list.map((item) => {
			// const serInfo = serList.data.list.filter((_: { platformId: number }) => _.platformId === item.id)
			// const infoList = serInfo.map((item: { displayName: any; serviceName: any }) => {
			// 	return { value: item.displayName, code: item.serviceName }
			// })
			return {
				platformCode: item.id,
				platformName: item.name,
				list: [],
				platformPost: '',
				traceAddresse: '',
				waybillNoUploadWay: '',
				trackingNoType: '',
				isGenerateFtno: ''
			}
		})
		if (!isNil(data)) {
			if (data.length > 0) {
				data.forEach((element) => {
					listPlatform.forEach((_) => {
						if (parseInt(element.platformCode) === _.platformCode) {
							_.platformPost = element.platformPost
							_.traceAddresse = element.traceAddresse
							_.waybillNoUploadWay = element.waybillNoUploadWay + ''
							_.trackingNoType = element.trackingNoType + ''
							_.isGenerateFtno = element.isGenerateFtno + ''
						}
					})
				})
			}
		}
		this.tableData = listPlatform
	}
	cancel() {
		this.visible = false
		this.tableData = []
		this.platformList = []
	}
	async sub() {
		console.log(this.tableData)
		const { success } = await API.wms.logisticsChannelPlatform.batchModify.request(this.channelCode, this.providerCode, this.tableData)
		if (success) {
			this.$message.success('操作成功')
			this.visible = false
			this.tableData = []
			this.platformList = []
		}
		this.cancel()
		this.$emit('search')
	}

	public render() {
		return (
			<a-modal title="添加物流映射" v-model={this.visible} wrapClassName="platform-map" footer={null} cancel={this.cancel}>
				<div class="platform-map-title">
					<div>渠道编号/名称-渠道服务</div>
					<a-input value={this.channelName} disabled />
				</div>
				<a-form-model
					{...{
						attrs: {
							model: this.pageForm,
							rules: rules
						}
					}}
					ref="formRef"
					label-width="120px"
				>
					<a-table bordered rowKey="platformCode" dataSource={this.tableData} pagination={false}>
						<a-table-column title="平台" width={160}>
							{(item: any) => <span>{item.platformName}</span>}
						</a-table-column>
						<a-table-column title="在线邮寄方式" width={210}>
							{(item: any) => (
								<a-select v-model={item.platformPost}>
									<a-select-option value="Other">Other</a-select-option>
								</a-select>
							)}
						</a-table-column>
						<a-table-column title="跟踪地址" width={210}>
							{(item: any) => <a-input v-model={item.traceAddresse} />}
						</a-table-column>
						<a-table-column title="运单号上传方式" width={210}>
							{(item: any) => (
								<a-select v-model={item.waybillNoUploadWay}>
									<a-select-option value="0">未设置</a-select-option>
									<a-select-option value="10">上传运单号</a-select-option>
									<a-select-option value="20">不填单号上传</a-select-option>
									<a-select-option value="30">NoShipping</a-select-option>
								</a-select>
							)}
						</a-table-column>
						<a-table-column title="跟踪号类型" width={210}>
							{(item: any) => (
								<a-select v-model={item.trackingNoType}>
									<a-select-option value="0">未设置</a-select-option>
									<a-select-option value="10">取最终单号</a-select-option>
									<a-select-option value="20">取物流商单号</a-select-option>
								</a-select>
							)}
						</a-table-column>
						<a-table-column title="物货到达后是否生成最终单号" width={220}>
							{(item: any) => (
								<a-select v-model={item.isGenerateFtno}>
									<a-select-option value="0">未设置</a-select-option>
									<a-select-option value="10">不生成最终单号</a-select-option>
									<a-select-option value="20">生成最终单号</a-select-option>
								</a-select>
							)}
						</a-table-column>
					</a-table>
					<div style="text-align: center;margin-top:5px;">
						<a-button on-click={this.cancel}>取消</a-button>
						<a-button type="primary" on-click={this.sub}>
							确定
						</a-button>
					</div>
				</a-form-model>
			</a-modal>
		)
	}
}
