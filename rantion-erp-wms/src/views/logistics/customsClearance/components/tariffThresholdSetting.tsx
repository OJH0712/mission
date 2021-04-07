/*
 * @Author: Chan
 * @Date: 2021-02-24 10:18:06
 * @LastEditTime: 2021-02-24 14:39:32
 * @LastEditors: Chan
 * @Description: 关税起征点设置
 */
import { notification, Pagination } from 'ant-design-vue'
import { clone, equals, isEmpty, isNil } from 'ramda'
import { Component, Vue } from 'vue-property-decorator'
interface SamplePagination {
	pageSize?: number
	pageNumber?: number
	total?: number
}
interface LogisticsTariffThresholdInheriter extends defs.wms.LogisticsTariffThresholdResponseDto {
	editable?: boolean
	isLast?: boolean
}
@Component
export default class TariffThresholdSetting extends Vue {
	recordVisible = false
	loading = false
	pagination: SamplePagination = {
		pageSize: 10,
		pageNumber: 1
	}
	size = 10
	// public form: defs.wms.LogisticsTariffThresholdRequestDto = {}
	public tableData: Array<LogisticsTariffThresholdInheriter> = []
	public cacheData: Array<LogisticsTariffThresholdInheriter> = []
	init() {
		this.recordVisible = true
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
		// 重置每页条数
		this.size = 10
		this.pagination.pageSize = 10
		const pager: SamplePagination = { ...this.pagination }
		pager.pageNumber = pagination.current
		this.pagination = pager
		this.getInit()
	}

	public async getInit() {
		const { data, success } = await API.wms.logisticsTariffThreshold.list.request({ ...this.pagination })
		this.loading = false
		if (success && !isNil(data)) {
			this.cacheData = clone(data.list) || []
			this.tableData = clone(data.list) || []
			if (isEmpty(this.tableData)) {
				this.tableData.push({
					...new defs.wms.LogisticsTariffThresholdResponseDto(),
					editable: true,
					isLast: true
				})
			} else {
				this.tableData[this.tableData.length - 1] = {
					editable: this.tableData[this.tableData.length - 1].editable || false,
					isLast: true,
					...this.tableData[this.tableData.length - 1]
				}
			}
			const pagination: any = { ...this.pagination }
			pagination.total = data.total || 0
			this.pagination = pagination
		}
	}

	// 删除
	public async deleteItem(id: number, index: number) {
		if (id) {
			this.$confirm({
				title: '删除',
				content: '确定删除吗？',
				onOk: async () => {
					const { success, msg } = await API.wms.logisticsTariffThreshold.deleteById.request(id)
					if (success) {
						notification.success({
							message: '删除成功',
							description: ''
						})
						this.deleteFromTable(id)
					} else {
						const message = !isNil(msg) ? msg : '删除失败'
						notification.error({
							message: message,
							description: ''
						})
					}
				}
			})
		} else {
			//如果没用ID 直接删除
			this.tableData.splice(index, 1)
			this.setLast()
		}
	}

	setLast() {
		if (!this.tableData[this.tableData.length - 1].isLast) {
			// 判断是否设置最后一个
			this.tableData[this.tableData.length - 1] = {
				...this.tableData[this.tableData.length - 1],
				isLast: true
			}
		}
	}

	// 行内数据删除
	public deleteFromTable(id: number) {
		const newData = [...this.tableData]
		const newCacheData = [...this.cacheData]
		const targetIndex = newData.findIndex((item) => id === item.id)
		const targetCacheIndex = newCacheData.findIndex((item) => id === item.id)
		if (!equals(targetIndex, -1) && !equals(targetCacheIndex, -1)) {
			newData.splice(targetIndex, 1)
			newCacheData.splice(targetCacheIndex, 1)
			this.tableData = newData
			this.cacheData = newCacheData
			this.setLast()
		}
	}

	public addItem() {
		// 新增行导致每页行数大于pagesize会被挤到下一页
		this.size++
		this.pagination.pageSize = this.size
		this.tableData[this.tableData.length - 1].isLast = false
		this.tableData.push({
			...new defs.wms.LogisticsTariffThresholdResponseDto(),
			originCountryCode: 'CN',
			originCountryName: '中国',
			targetCountryCode: '',
			targetCountryName: '',
			editable: true,
			isLast: true
		})
	}

	// 保存
	public async saveItem(id: number, index: number) {
		if (id) {
			const newData = [...this.tableData]
			const newCacheData = [...this.cacheData]
			const target = newData.filter((item) => id === item.id)[0]
			const targetCache = newCacheData.filter((item) => id === item.id)[0]
			const { currencyUnit, originCountryCode, originCountryName, targetCountryCode, targetCountryName, threshold } = target
			const params: defs.wms.LogisticsTariffThresholdRequestDto = {
				threshold,
				currencyUnit,
				originCountryCode,
				originCountryName,
				targetCountryCode,
				targetCountryName,
				id
			}
			const { success } = await API.wms.logisticsTariffThreshold.modify.request(params)
			if (target && targetCache && success) {
				delete target.editable
				this.tableData = newData
				Object.assign(targetCache, target)
				this.cacheData = newCacheData
			}
		} else {
			const newData = [...this.tableData]
			const newCacheData = [...this.cacheData]
			// const target = newData.filter((item) => id === item.id)[0]
			const target = this.tableData[index]
			// const targetCache = newCacheData.filter((item) => id === item.id)[0]
			const { currencyUnit, originCountryCode, originCountryName, targetCountryCode, targetCountryName, threshold } = target
			const params: defs.wms.LogisticsTariffThresholdRequestDto = {
				threshold,
				currencyUnit,
				originCountryCode,
				originCountryName,
				targetCountryCode,
				targetCountryName,
				id
			}
			const { success } = await API.wms.logisticsTariffThreshold.add.request(params)
			if (success) {
				this.$message.success('添加成功')
				delete target.editable
				this.tableData = newData
				this.cacheData = newCacheData
			}
		}
	}

	// 取消
	public cancelItem(id: number) {
		const newData = [...this.tableData]
		const target = newData.filter((item) => id === item.id)[0]
		if (target) {
			Object.assign(target, this.cacheData.filter((item) => id === item.id)[0])
			delete target.editable
			this.tableData = newData
		}
	}

	// 修改中状态
	public modifyItem(id: number) {
		const newData = [...this.tableData]
		const target = newData.filter((item) => id === item.id)[0]
		if (target) {
			target.editable = true
			this.tableData = newData
		}
	}

	public render() {
		return (
			<a-modal title="关税起征点设置" width={1000} visible={this.recordVisible} footer={null} on-cancel={this.cancel}>
				<a-table
					borderd
					row-key={(record: LogisticsTariffThresholdInheriter) => record.id}
					data-source={this.tableData}
					pagination={this.pagination}
					loading={this.loading}
					onChange={this.handleTableChange}
				>
					<a-table-column title="序号" width={100} align="center">
						{(targetCountryCode: string, record: LogisticsTariffThresholdInheriter, index: number) => <span>{index}</span>}
					</a-table-column>
					<a-table-column title="起始国家" width={100} dataIndex="originCountryName" key="originCountryName" align="center" />
					<a-table-column title="目标国家" dataIndex="targetCountryCode" align="center">
						{(targetCountryCode: string, record: LogisticsTariffThresholdInheriter, index: number) => (
							<form-county
								v-model={record.targetCountryCode}
								on-changeLabel={(name: string) => {
									this.tableData[index].targetCountryName = name
								}}
								disabled={!record.editable}
							/>
						)}
					</a-table-column>
					e
					<a-table-column title="关税起征点" dataIndex="threshold" align="center">
						{(threshold: string, record: LogisticsTariffThresholdInheriter) => (record.editable ? <a-input v-model={record.threshold} /> : <span>{`${record.threshold}`}</span>)}
					</a-table-column>
					<a-table-column title="币种" align="center">
						{(record: LogisticsTariffThresholdInheriter) => <form-config prop="currencyUnit" v-model={record.currencyUnit} disabled={!record.editable} />}
					</a-table-column>
					<a-table-column title="操作" dataIndex="" align="center">
						{(record: LogisticsTariffThresholdInheriter, item: LogisticsTariffThresholdInheriter, index: number) => (
							<a-space size="middle">
								{record.isLast ? <a on-click={() => this.addItem()}>添加</a> : null}
								{record.editable ? (
									<a-space>
										<a on-click={() => this.saveItem(record.id, index)}>保存</a>
										{record.id ? <a on-click={() => this.cancelItem(record.id)}>取消</a> : null}
									</a-space>
								) : (
									<a on-click={() => this.modifyItem(record.id)}>修改</a>
								)}
								<a on-click={() => this.deleteItem(record.id, index)}>删除</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
			</a-modal>
		)
	}
}
