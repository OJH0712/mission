/*
 * @Author: Chan
 * @Date: 2021-02-23 11:56:16
 * @LastEditTime: 2021-02-25 10:05:17
 * @LastEditors: Chan
 * @Description: 对账修改记录
 */

import { timestampToTime } from '@/utils/date'
import { Pagination } from 'ant-design-vue'
import { isNil } from 'ramda'
import { Component, Vue } from 'vue-property-decorator'
const columns = [
	{
		dataIndex: 'originalWeight',
		title: '修改前物流商重量',
		key: 'originalWeight'
	},
	{
		dataIndex: 'originalPrice',
		title: '修改前物流商运费',
		key: 'originalPrice'
	},
	{
		dataIndex: 'logisticsProviderWeight',
		title: '修改后物流商重量',
		key: 'logisticsProviderWeight'
	},
	{
		dataIndex: 'logisticsProviderPrice',
		title: '修改后物流商运费',
		key: 'logisticsProviderPrice'
	},
	{
		dataIndex: 'updateBy',
		title: '修改人',
		key: 'updateBy'
	},
	{
		dataIndex: 'trackingNo',
		title: '最终跟踪号',
		key: 'trackingNo'
	},
	{
		dataIndex: 'beginDeliveryDate',
		title: '发货时间',
		customRender: function(text: string) {
			return <span>{timestampToTime(text)}</span>
		}
	}
]
interface SamplePagination {
	pageSize?: number
	pageNumber?: number
	total?: number
}
@Component
export default class CheckRecord extends Vue {
	recordVisible = false
	code: string
	loading = false
	pagination: SamplePagination = {
		pageSize: 10,
		pageNumber: 1
	}
	// 接口未定义，暂用这个
	public list: Array<defs.wms.WaybillMasterResponseDto> = []
	init(code: string) {
		this.recordVisible = true
		this.code = code
		this.getInit()
	}
	cancel() {
		this.recordVisible = false
		this.pagination = {
			pageSize: 10,
			pageNumber: 1
		}
	}

	public handleTableChange(pagination: Pagination) {
		const pager: SamplePagination = { ...this.pagination }
		pager.pageNumber = pagination.current
		this.pagination = pager
		this.getInit()
	}

	public async getInit() {
		// code
		const { data, success } = await API.wms.waybillMaster.list.request({ ...this.pagination })
		this.loading = false
		if (success && !isNil(data)) {
			this.list = data.list || []
			const pagination: any = { ...this.pagination }
			pagination.total = data.total || 0
			this.pagination = pagination
		}
	}

	public render() {
		return (
			<a-modal title={this.code + '对账修改记录'} width={1000} visible={this.recordVisible} footer={null} on-cancel={this.cancel}>
				<a-table
					columns={columns}
					row-key={(record: defs.wms.WaybillMasterResponseDto) => record.id}
					data-source={this.list}
					pagination={this.pagination}
					loading={this.loading}
					onChange={this.handleTableChange}
				></a-table>
			</a-modal>
		)
	}
}
