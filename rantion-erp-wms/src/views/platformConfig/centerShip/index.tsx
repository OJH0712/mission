import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, T, isNil } from 'ramda'
import { formatDate } from '@/utils/date'
import addModal from './components/addcnterShip'
/**
 * centerId & shipTo
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/2/26 下午14:00
 */
@Component({
	name: 'centerShip',
	components: { addModal }
})
export default class User extends TablePage {
	public tableData: Array<defs.wms.CenterCountyMappingResponseDto> = []
	public searchForm: API.wms.centerIdAndShipTo.list.Params = {}
	@Ref('addModal') readonly addModal!: HTMLFormElement
	async mounted() {
		this.search()
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
						<a-form-modelItem prop="countyCode" label="国家简码">
							<a-input v-model={this.searchForm.countyCode} placeholder="请输入国家简码" />
						</a-form-modelItem>
						<a-form-model-item prop="centerId" label="centerId">
							<a-input v-model={this.searchForm.centerId} placeholder="请输入centerId" />
						</a-form-model-item>
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button icon="plus" type="primary" on-click={() => this.showAddModal()}>
						新建
					</a-button>
				</div>
				<a-table dataSource={this.tableData} loading={this.loading} rowKey="id" pagination={false} scroll={{ x: 1500 }}>
					<a-table-column title="国家简码" dataIndex="countyCode" key="countyCode" align="center" />
					<a-table-column title="centerId" dataIndex="centerId" key="centerId" align="center" />
					<a-table-column title="shipTo" key="shipTo" align="center" ellipsis={T()}>
						{(record: defs.wms.CenterCountyMappingResponseDto) => <a on-click={() => this.showShipToMadal(record.shipTo)}>{record.shipTo}</a>}
					</a-table-column>
					<a-table-column title="创建人" dataIndex="createBy" key="createBy" align="center" />
					<a-table-column title="创建时间" key="createTime" align="center">
						{(record: defs.wms.CenterCountyMappingResponseDto) => <span>{formatDate(new Date(record.createTime))}</span>}
					</a-table-column>
					<a-table-column title="更新人" dataIndex="updateBy" key="updateBy" align="center" />
					<a-table-column title="更新时间" key="updateTime" align="center">
						{(record: defs.wms.CenterCountyMappingResponseDto) => <span>{formatDate(new Date(record.updateTime))}</span>}
					</a-table-column>
					<a-table-column title="操作" width={200} align="center">
						{(record: defs.wms.CenterCountyMappingResponseDto) => (
							<a-space size="middle">
								<a on-click={() => this.showAddModal(record)}>修改</a>
								<a on-click={() => this.deleteOne(record.id)}>删除</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<addModal on-add-brand={this.search} ref="addModal"></addModal>
			</div>
		)
	}
	public async getInit(params: API.wms.centerIdAndShipTo.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.centerIdAndShipTo.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			this.total = data.total || 0
		}
	}
	//修改/添加仓库
	public showAddModal(data?: defs.wms.CenterCountyMappingRequestDto) {
		this.addModal.showbrandDetil(data || {})
	}
	// 删除
	public async deleteOne(id: number) {
		const { success } = await API.wms.centerIdAndShipTo.deleteById.request(id)
		if (success) {
			this.$notification.success({
				message: '提示',
				description: '删除成功'
			})
		}
		const data = clone(this.searchForm)
		this.getInit(Object.assign(data, this.pagination()))
	}
	// shipTo提示框
	public showShipToMadal(msg: string) {
		this.$info({
			title: 'shipTo',
			content: msg,
			okText: '确定'
		})
	}
	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination()))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}
}
