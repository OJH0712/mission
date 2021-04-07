/*
 * @Author: Chan
 * @Date: 2021-02-22 10:24:11
 * @LastEditTime: 2021-02-24 18:07:52
 * @LastEditors: Chan
 * @Description: 计费设置
 */
import { Component } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isEmpty, isNil } from 'ramda'
interface RouterParams {
	providerCode?: string
	channelCode?: string
	providerName?: string
	channelName?: string
}
interface LogisticsChannelPriceInheriter extends defs.wms.LogisticsChannelPriceResponseDto {
	editable?: boolean
	isLast?: boolean
	id: number
}

@Component({
	name: 'BillingSet'
})
export default class BillingSet extends TablePage {
	public tableData: Array<LogisticsChannelPriceInheriter> = []
	public searchForm: API.wms.logisticsChannelPrice.list.Params = {
		targetCountryCode: ''
	}
	public routerParams: RouterParams = {}
	public mode = 'readonly'
	async mounted() {
		this.routerParser()
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
						<a-form-model-item class="right">
							<a-button type="primary" icon="left" on-click={() => this.$router.back()}>
								返回
							</a-button>
						</a-form-model-item>
						<a-form-modelItem prop="targetCountryCode" label="">
							<form-county v-model={this.searchForm.targetCountryCode} showSearch />
						</a-form-modelItem>
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<a-table dataSource={this.tableData} scroll={{ x: true }} loading={this.loading} rowKey="id" pagination={false}>
					<a-table-column title="目标国家" key="targetCountryCode" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) => (
							<form-county
								v-model={record.targetCountryCode}
								on-changeLabel={(targetCountryName: string) => (record.targetCountryName = targetCountryName)}
								disabled={!record.editable}
								style="width:120px"
							/>
						)}
					</a-table-column>
					<a-table-column title="重量区间(g)" key="beginWeight" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) =>
							record.editable ? (
								<a-input-group compact>
									<a-input style="width: 50%" v-model={record.beginWeight} />
									<a-input style="width: 50%" v-model={record.endWeight} />
								</a-input-group>
							) : (
								<span>{`${record.beginWeight}-${record.endWeight}`}</span>
							)
						}
					</a-table-column>
					<a-table-column title="首重/首重费用" key="firstWeight" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) =>
							record.editable ? (
								<a-input-group compact>
									<a-input style="width: 50%" v-model={record.firstWeight} />
									<a-input style="width: 50%" v-model={record.firstWeightPrice} />
								</a-input-group>
							) : (
								<span>{`${record.firstWeight}-${record.firstWeightPrice}`}</span>
							)
						}
					</a-table-column>
					<a-table-column title="续重单位重量/单价" key="additionalWeightUnit" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) =>
							record.editable ? (
								<a-input-group compact>
									<a-input style="width: 50%" v-model={record.additionalWeightUnit} />
									<a-input style="width: 50%" v-model={record.additionalWeightPrice} />
								</a-input-group>
							) : (
								<span>{`${record.additionalWeightUnit}-${record.additionalWeightPrice}`}</span>
							)
						}
					</a-table-column>
					<a-table-column title="挂号费" key="registrationPrice" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) => (record.editable ? <a-input v-model={record.registrationPrice} /> : <span>{`${record.registrationPrice}`}</span>)}
					</a-table-column>
					<a-table-column title="附加费首重/首重费用" key="excessFirstWeight" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) =>
							record.editable ? (
								<a-input-group compact>
									<a-input style="width: 50%" v-model={record.excessFirstWeight} />
									<a-input style="width: 50%" v-model={record.excessFirstWeightPrice} />
								</a-input-group>
							) : (
								<span>{`${record.excessFirstWeight}-${record.excessFirstWeightPrice}`}</span>
							)
						}
					</a-table-column>
					<a-table-column title="附加费续重单位重量/单价" key="excessAdditionalWeightUnit" align="center" width="230px">
						{(record: LogisticsChannelPriceInheriter) =>
							record.editable ? (
								<a-input-group compact>
									<a-input style="width: 50%" v-model={record.excessAdditionalWeightUnit} />
									<a-input style="width: 50%" v-model={record.excessAdditionalWeightPrice} />
								</a-input-group>
							) : (
								<span>{`${record.excessAdditionalWeightUnit}-${record.excessAdditionalWeightPrice}`}</span>
							)
						}
					</a-table-column>
					<a-table-column title="操作" align="center">
						{(record: LogisticsChannelPriceInheriter, text: LogisticsChannelPriceInheriter, index: number) =>
							equals(this.mode, 'edit') ? (
								<a-space size="middle">
									{/* {record.isLast && <a on-click={this.addItem}>添加</a>} */}
									{record.editable ? (
										<a-space>
											<a on-click={() => this.saveItem(record, index)}>保存</a>
											{/* <a on-click={() => this.cancelItem(index)}>取消</a> */}
										</a-space>
									) : (
										<a-space>
											{equals(index, this.tableData.length - 1) ? <a on-click={this.add}>添加</a> : null}
											<a on-click={() => this.modifyItem(index)}>修改</a>
										</a-space>
									)}
									<a on-click={() => this.deleteItem(record.id, index)}>删除</a>
								</a-space>
							) : null
						}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsChannelPrice.list.Params) {
		this.loading = true
		const { data, success } = await API.wms.logisticsChannelPrice.list.request(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			if (isEmpty(this.tableData)) {
				this.tableData.push({
					...new defs.wms.LogisticsChannelPriceResponseDto(),
					...this.routerParams,
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
			this.total = data.total || 0
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

	public routerParser() {
		const { mode } = this.$route.query
		this.routerParams = {
			providerCode: this.$route.params.providerCode,
			channelCode: this.$route.params.channelCode
		}
		const logr = sessionStorage.getItem('LogisticsChannelResponseDto')
		if (logr) {
			const data = JSON.parse(logr)
			this.routerParams = {
				...this.routerParams,
				providerName: data.providerName,
				channelName: data.channelName
			}
		}
		this.mode = !isNil(mode) ? (mode as string) : 'readonly'
	}

	public search(type?: PageType) {
		if (!equals(type, PageType.new)) {
			this.current = 1
		}
		const params = clone(this.searchForm)
		this.getInit(Object.assign(params, this.pagination(), this.routerParams))
	}
	public clear() {
		this.searchForm = {}
		this.search()
	}

	// 修改中状态
	public modifyItem(index: number) {
		const target = this.tableData[index]
		if (target) {
			target.editable = true
			this.tableData.splice(index, 1, target)
		}
	}

	// 删除
	public async deleteItem(id: number, index: number) {
		if (id) {
			this.$confirm({
				title: '删除',
				content: '确定删除吗？',
				onOk: async () => {
					const { success } = await API.wms.logisticsChannelPrice.deleteById.request(id)
					if (success) {
						this.$message.success('删除成功')
						this.tableData.splice(index, 1)
						this.setLast()
						this.search()
					}
				}
			})
		} else {
			// 如果没用ID 直接删除
			this.tableData.splice(index, 1)
			this.setLast()
		}
	}
	add() {
		this.tableData.push({
			...new defs.wms.LogisticsChannelPriceResponseDto(),
			...this.routerParams,
			editable: true
		})
	}
	// 保存
	public async saveItem(data: LogisticsChannelPriceInheriter, key: number) {
		if (data.beginWeight && data.endWeight) {
			if (Number(data.beginWeight) >= Number(data.endWeight)) {
				this.$message.error('开始重量区间必须小于结束重量区间')
				return false
			}
		}
		const target = this.tableData[key]
		if (data.id) {
			const { success } = await API.wms.logisticsChannelPrice.modify.request(data)
			success && this.$message.success('修改成功')
			if (target) {
				target.editable = false
				this.tableData.splice(key, 1, target)
			}
			this.search()
		} else {
			const { id, ...res } = data
			const { success } = await API.wms.logisticsChannelPrice.add.request(res)
			success && this.$message.success('添加成功')
			if (target) {
				target.editable = false
				this.tableData.splice(key, 1, target)
			}
			this.search()
		}
		return true
	}

	// 取消
	// public cancelItem(index: number) {
	// 	const target = this.tableData[index]
	// 	if (target) {
	// 		delete target.editable
	// 		this.tableData.splice(index, 1, target)
	// 	}
	// }

	// 添加
	// public addItem() {
	// 	this.tableData[this.tableData.length - 1].isLast = false
	// 	this.tableData.push({
	// 		...new defs.wms.LogisticsChannelPriceResponseDto(),
	// 		...this.routerParams,
	// 		editable: true,
	// 		isLast: true
	// 	})
	// }
}
