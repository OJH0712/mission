/*
 * @Description:出库单
 * @Author: owen
 * @Date: 2021-02-23 09:58:33
 * @LastEditTime: 2021-03-20 12:51:40
 */
import { Component, Ref } from 'vue-property-decorator'
import { PageType, TablePage } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
import { timestampToTime } from '@/utils/date'
import outMasterDetail from './showDetail'
import { sourceTypeFilter } from '../../../dictionaries/filter/index'
import printPDF from './printPDF'

@Component({
	name: 'Delivery',
	components: { outMasterDetail, printPDF }
})
export default class Delivery extends TablePage {
	public tableData: Array<defs.wms.OutMasterResponseDto> = []
	public searchForm: API.wms.outMaster.list.Params = {}
	spinning = false
	@Ref('outMasterDetail') readonly outMasterDetailRef!: HTMLFormElement
	@Ref('printPDF') readonly printPDFRef!: HTMLFormElement
	mounted() {
		this.search()
	}

	showDelivery(record: defs.wms.OutMasterResponseDto) {
		this.outMasterDetailRef.init(record)
	}

	//打印

	async printPdf(record: any) {
		const list: Array<{ distribute: number; path: string }> = []
		list.push({
			distribute: 1,
			path: record.logisticsLabelPath
		})
		this.printPDFRef.print(list)
	}

	// 下载
	async download(record: any) {
		// console.log(record, '下载')
		this.spinning = true
		if (isNil(record.logisticsLabelPath)) {
			this.spinning = false
			this.$message.error('下载出错(文件路径为null)')
		} else if (!isNil(record.logisticsLabelPath) && record.logisticsLabelPath.slice(record.logisticsLabelPath.length - 3, record.logisticsLabelPath.length) !== 'pdf') {
			this.spinning = false
			this.$message.error('下载出错(未完成)')
		} else {
			window.open(record.logisticsLabelPath)
			this.spinning = false
		}
	}
	public render() {
		return (
			<div>
				<div class="top-search-from">
					<a-form-model
						class="ant-advanced-search-form"
						{...{
							attrs: {
								layout: 'inline',
								model: this.searchForm
							}
						}}
					>
						<a-form-model-item prop="warehouseName" label="仓库">
							<form-warehouse-code allowClear v-model={this.searchForm.warehouseName} />
						</a-form-model-item>
						<a-form-model-item prop="dono" label="出库单号">
							<a-input allowClear v-model={this.searchForm.dono} />
						</a-form-model-item>
						{this.expand ? (
							<span>
								<a-form-model-item prop="sourceNo" label="来源单号">
									<a-input allowClear v-model={this.searchForm.sourceNo} />
								</a-form-model-item>
								<a-form-model-item prop="sourceType" label="来源类型">
									<form-config allowClear v-model={this.searchForm.sourceType} prop="sourceType" />
								</a-form-model-item>
								<a-form-model-item prop="status" label="状态">
									<form-config allowClear v-model={this.searchForm.status} prop="DeliveryStatus" />
								</a-form-model-item>
								<a-form-model-item prop="country" label="目的地(国家)">
									<a-input allowClear v-model={this.searchForm.country} />
								</a-form-model-item>
								<a-form-model-item prop="waybillNo" label="运单号">
									<a-input allowClear v-model={this.searchForm.waybillNo} />
								</a-form-model-item>
								<a-form-model-item prop="providerCode" label="物流渠道">
									<form-logistics-provider-list allowClear v-model={this.searchForm.providerCode} />
								</a-form-model-item>
								<a-form-model-item prop="pickno" label="拣货单号">
									<a-input allowClear v-model={this.searchForm.pickno} />
								</a-form-model-item>
								<a-form-model-item prop="beginCreateDate" label="创建日期">
									<a-range-picker allowClear v-model={this.searchForm.beginCreateDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始日期', '请选择结束日期']} />
								</a-form-model-item>
								<a-form-model-item prop="beginUpdateDate" label="更新日期">
									<a-range-picker allowClear v-model={this.searchForm.beginUpdateDate} valueFormat="YYYY-MM-DD" placeholder={['请选择开始日期', '请选择结束日期']} />
								</a-form-model-item>
							</span>
						) : null}
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
							<a class="expand" on-click={this.toggle.bind(this)}>
								{this.expand ? '收起' : '更多'} <a-icon type={this.expand ? 'up' : 'down'} />
							</a>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="a-table-column">
					<a-spin spinning={this.spinning}>
						<a-table dataSource={this.tableData} scroll={{ x: 2500 }} loading={this.loading} rowKey="id" pagination={false}>
							<a-table-column title="出库单号" dataIndex="dono" key="dono" />
							<a-table-column title="仓库" dataIndex="warehouseName" key="warehouseName" />
							<a-table-column title="来源类型" dataIndex="sourceType" key="sourceType" customRender={(sourceType: string | number) => sourceTypeFilter(sourceType)} />
							<a-table-column title="来源单号" dataIndex="sourceNo" key="sourceNo" />
							<a-table-column title="最终跟踪单号" dataIndex="trackingNo" key="trackingNo" />
							<a-table-column title="状态" dataIndex="status" key="status" customRender={(status: string | number) => this.statusFilter(status)} />
							<a-table-column title="销售平台" dataIndex="platformCode" key="platformCode" />
							<a-table-column title="销售店铺" dataIndex="shopCode" key="shopCode" />
							<a-table-column title="产品/数量" dataIndex="qty" key="qty" />
							<a-table-column title="目的地" dataIndex="country" key="country" />
							<a-table-column title="运单号" dataIndex="waybillNo" key="waybillNo" />
							<a-table-column title="拣货单号" dataIndex="pickno" key="pickno" />
							<a-table-column title="预估重量(g)" dataIndex="" key="" />
							<a-table-column title="预估运费(元)" dataIndex="" key="" />
							<a-table-column title="创建时间" dataIndex="createTime" key="createTime" customRender={(time: any) => timestampToTime(time)} width={180} />
							<a-table-column title="更新时间" dataIndex="updateTime" key="updateTime" customRender={(time: any) => timestampToTime(time)} width={180} />
							<a-table-column title="操作" align="center" fixed="right" width={220}>
								{(record: defs.wms.OutMasterResponseDto) => (
									<a-space size="middle">
										<a on-click={() => this.showDelivery(record)}>查看</a>
										<a on-click={() => this.printPdf(record)}>打印运单</a>
										<a on-click={() => this.download(record)}>下载运单</a>
									</a-space>
								)}
							</a-table-column>
						</a-table>
					</a-spin>
				</div>
				{this.paginationJsx()}
				<outMasterDetail ref="outMasterDetail" />
				<printPDF ref="printPDF" />
			</div>
		)
	}
	public async getInit(params: API.wms.outMaster.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.outMaster.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)

		if (!isEmpty(this.searchForm.beginCreateDate)) {
			params.beginCreateDate = this.searchForm.beginCreateDate?.[0]
			params.endCreateDate = this.searchForm.beginCreateDate?.[1]
		}
		if (!isEmpty(this.searchForm.beginUpdateDate)) {
			params.beginUpdateDate = this.searchForm.beginUpdateDate?.[0]
			params.endUpdateDate = this.searchForm.beginUpdateDate?.[1]
		}
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	public statusFilter(status: string | number) {
		let result = ''
		switch (status) {
			case -30:
				result = '缺货中'
				break
			case -20:
				result = '已齐货'
				break
			case -10:
				result = '创建失败'
				break
			case 0:
				result = '待分配'
				break
			case 10:
				result = '待拣货'
				break
			case 20:
				result = '已拣货'
				break
			case 30:
				result = '已校验'
				break
			case 40:
				result = '校验失败'
				break
			case 45:
				result = '已还货'
				break
			case 50:
				result = '已称重'
				break
			case 60:
				result = '已扫描'
				break
			case 65:
				result = '发运中'
				break
			case 70:
				result = '已发运'
				break
			case 72:
				result = '发运失败'
				break
			case 75:
				result = '已退件签收'
				break
			case 80:
				result = '待还货'
				break
			case 90:
				result = '已推送'
				break
		}
		return result
	}
}
