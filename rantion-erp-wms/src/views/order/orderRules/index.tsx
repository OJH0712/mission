/*
 * @Author: gtlong
 * @Date: 2021-03-01 10:18:23
 * @LastEditTime: 2021-03-04 20:55:44
 * @LastEditors: Please set LastEditors
 * @Description: 订单规则
 * @FilePath: \rantion-erp-wms\src\views\order\orderManagement\index.ts
 */

import { Component, Ref } from 'vue-property-decorator'
import { TablePage, PageType } from '@/interface/TablePage'
import { clone, equals, isNil } from 'ramda'
import { getOrderRulesList, enableOrDisable, rulerSort } from '@/api/sale/order/index'
import Sortable from 'sortablejs'
import { TableData } from './interface'
import AddOrEditRulesModel from './components/addOrEditRulesModel'
import './index.scss'
@Component({
	name: 'OrderRules',
	components: { AddOrEditRulesModel }
})
export default class OrderRules extends TablePage {
	@Ref('addOrEditRulesModel') readonly AddOrEditRulesModelRef!: HTMLFormElement
	public tableData: Array<TableData> = []
	public searchForm: Partial<TableData> = {}
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
						<a-form-modelItem prop="rulerName" label="规则名称">
							<a-input v-model={this.searchForm.rulerName} placeholder="请输入规则名称" />
						</a-form-modelItem>
						<a-form-modelItem prop="status" label="状态">
							<form-config prop="logisticsChannelStatus" v-model={this.searchForm.status} allowClear placeholder="请选择状态" />
						</a-form-modelItem>
						<a-form-model-item class="right">
							<a-button type="primary" loading={this.loading} icon="search" on-click={this.search} html-type="submit">
								查询
							</a-button>
							<a-button on-click={this.clear}>清除</a-button>
						</a-form-model-item>
					</a-form-model>
				</div>
				<div class="table-top">
					<a-button type="primary" icon="plus" on-click={this.add}>
						添加
					</a-button>
				</div>
				<a-table dataSource={this.tableData} loading={this.loading} pagination={false} class="order-ruler-table" rowKey="id">
					<a-table-column title="序号" dataIndex="key" width="80px" align="center">
						{(id: number, item: TableData, index: number) => <span>{index + 1}</span>}
					</a-table-column>
					<a-table-column title="排序" align="center">
						{(id: number, record: TableData, index: number) => (
							<a>
								<a-button type="link" icon="arrow-down" on-click={() => this.handleMoveDown(record, index)} />
								<a-button type="link" icon="arrow-up" on-click={() => this.handleMoveUp(record, index)} />
								<a-button type="link" icon="drag" class="drag" />
							</a>
						)}
					</a-table-column>
					<a-table-column title="规则名称" dataIndex="rulerName" align="center" />
					<a-table-column title="状态" dataIndex="status" align="center">
						{(status: number) => (status === 1 ? '启用' : '停用')}
					</a-table-column>
					<a-table-column title="操作" dataIndex="id" align="center">
						{(id: number, record: TableData, index: number) => (
							<a-space size="middle">
								<a
									on-click={() => {
										this.handleEdit(id, record, index)
									}}
								>
									修改
								</a>
								<a on-click={() => this.handleToggle(record)}>{record.status === 1 ? '停用' : '启用'}</a>
							</a-space>
						)}
					</a-table-column>
				</a-table>
				{this.paginationJsx()}
				<add-or-edit-rules-model ref="addOrEditRulesModel" on-search={this.search} />
			</div>
		)
	}

	public async getInit(params: API.wms.logisticsChannel.list.Params) {
		this.loading = true
		const { data, success } = await getOrderRulesList(params)
		this.loading = false
		if (success && !isNil(data)) {
			this.tableData = data.list || []
			console.log(this.tableData)
			this.total = data.total || 0
		}
		this.$nextTick(() => {
			this.setSort()
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
	public add() {
		this.AddOrEditRulesModelRef.init()
	}
	public handleEdit(id: number, item: TableData, index: number) {
		this.AddOrEditRulesModelRef.init(id, item, index)
	}
	public async handleMoveDown(record: TableData, index: number) {
		if (equals(index, this.tableData.length - 1)) {
			return false
		}
		const targetRow = this.tableData.splice(index, 1)[0]
		this.tableData.splice(index + 1, 0, targetRow)
		const { success, msg } = await rulerSort({ preRuler: this.tableData[index].id, nextRuler: targetRow.id, sortType: 'next' })
		if (success) {
			this.$message.success(msg)
			this.search()
		}
		return
	}

	public async handleMoveUp(record: any, index: number) {
		if (equals(0, index)) {
			return false
		}
		const targetRow = this.tableData.splice(index, 1)[0]
		this.tableData.splice(index - 1, 0, targetRow)
		const { success, msg } = await rulerSort({ preRuler: targetRow.id, nextRuler: this.tableData[index].id, sortType: 'pre' })
		if (success) {
			this.$message.success(msg)
			this.search()
		}
		return
	}
	setSort() {
		const el: any = document.querySelector('.order-ruler-table .ant-table-tbody')
		Sortable.create(el, {
			animation: 150,
			group: {
				name: 'order-ruler-sortable',
				pull: false,
				put: false
			},
			sort: true,
			handle: '.drag',
			setData(dataTransfer) {
				console.log(dataTransfer)
				dataTransfer.setData('Text', '')
			},
			onEnd: async (evt) => {
				const oldIndex = evt.oldIndex || 0
				const newIndex = evt.newIndex || 0
				if (equals(evt.oldIndex, evt.newIndex)) return
				const targetRow = this.tableData[oldIndex]
				const { success, msg } = await rulerSort({
					preRuler: oldIndex > newIndex ? targetRow.id : this.tableData[newIndex].id,
					nextRuler: oldIndex > newIndex ? this.tableData[newIndex].id : targetRow.id,
					sortType: oldIndex > newIndex ? 'pre' : 'next'
				})
				if (success) {
					this.$message.success(msg)
					this.search(0)
				}
			}
		})
	}
	public async handleToggle(record: any) {
		// 启用时切换为停用，停用时切换为启用
		if (record.status === 1) {
			this.$confirm({
				title: '提示',
				content: '此操作将停用规则, 是否继续?',
				okText: '确认',
				cancelText: '取消',
				onOk: async () => {
					const { success, msg } = await enableOrDisable({ id: record.id, status: 0 })
					if (success) {
						this.$message.success(msg)
						this.search()
					}
				}
			})
		} else if (record.status === 0) {
			const { success, msg } = await enableOrDisable({ id: record.id, status: 1 })
			if (success) {
				this.$message.success(msg)
				this.search()
			}
		}
	}
}
