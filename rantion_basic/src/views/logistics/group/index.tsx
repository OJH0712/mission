/*
 * @Description:物流分组列表
 * @Author: hyx
 * @Date: 2021-03-23 11:20
 */
import { clone, isNil } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { logisticsGroupStatusFilter, logisticsGroupAttrStatusFilter } from '@/dictionaries/filter'
import ShowGroup from './components/showDetails'
import AddAttr from './components/addGroupAttr'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.logisticsGroup.page.Params
	dto?: defs.basics.LogisticsGroupResponseDto
	editVisible: boolean
	doType?: string
	spin?: boolean
}
interface ShowGroupRef {
	init: (data?: defs.basics.LogisticsGroupRequestParamsDto, type?: string) => void
}
interface AddAttrRef {
	init: (groupNo: string) => void
}
export default defineComponent({
	name: 'LogisticsGroup',
	components: { ShowGroup, AddAttr },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.logisticsGroup.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		const pageSate = reactive<State>({
			searchForm: {},
			editVisible: false,
			spin: false
		})
		// const response = data.value.data ? data.value.data.records : []
		// pageSate.tableData = response as any
		function search() {
			const data = {
				...getPagination(true),
				...pageSate.searchForm
			}
			run(data)
		}
		function clear() {
			pageSate.searchForm = {}
			search()
		}

		const showGroupRef = ref<ShowGroupRef>()
		const addAttrRef = ref<AddAttrRef>()

		function addGroupAttr(groupNo: string) {
			addAttrRef.value?.init(groupNo)
		}

		async function statusChange(code: string, status: number) {
			const params = {
				code,
				enable: status ? false : true
			}
			const { success } = await API.basics.logisticsGroup.enable.request(params)
			if (success) {
				notification.success({ description: '保存成功' })
				refresh()
			}
		}
		async function deleteOne(code: string) {
			const { success } = await API.basics.logisticsGroup.deleteOne.request({ code })
			if (success) {
				notification.success({ description: '删除成功' })
				refresh()
			}
		}

		async function deleteGroupAttr(id: number) {
			const { success } = await API.basics.logisticsGroupAttr.deleteOne.request({ id })
			if (success) {
				notification.success({ description: '删除成功' })
				refresh()
			}
		}

		function update(dto: defs.basics.LogisticsGroupResponseDto, type: string) {
			showGroupRef.value?.init(clone(dto), type)
		}
		function addAttr() {
			showGroupRef.value?.init()
		}

		function expandedRowRender({ record, index, indent, expanded }: any) {
			if (expanded) {
				const searchForm = {
					groupNo: record.groupNo
				}
				if (isNil(record.groupModelList)) {
					pageSate.spin = true
					API.basics.logisticsGroupAttr.list.request(searchForm).then((res: any) => {
						pageSate.spin = false
						if (res.success && !isNil(res.data)) {
							const groupModelList = res.data || []
							record.groupModelList = groupModelList
						}
					})
				}
			}
			return (
				<a-table
					columns={innerColumns}
					dataSource={record.groupModelList}
					rowKey="id"
					loading={loading.value}
					pagination={false}
				/>
			)
		}

		const columns: Rantion.TableColumns[] = [
			{
				title: '物流分组编号',
				dataIndex: 'groupNo',
				required: true,
				key: 'groupNo',
				align: 'center'
			},
			{
				title: '物流分组中文名',
				dataIndex: 'groupNameCn',
				required: true,
				key: 'groupNameCn',
				align: 'center'
			},
			{
				title: '物流分组英文名',
				required: true,
				dataIndex: 'groupNameEn',
				key: 'groupNameEn',
				align: 'center'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => logisticsGroupStatusFilter(text),
				align: 'center'
			},
			{
				title: '创建人',
				dataIndex: 'createBy',
				key: 'createBy',
				align: 'center'
			},
			{
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text),
				align: 'center'
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				align: 'center',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.LogisticsGroupResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => addGroupAttr(record.groupNo as string)}>添加属性</a>
						<a onClick={() => statusChange(record.groupNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a-popconfirm
							title="确定删除吗?"
							ok-text="Yes"
							ok-type="danger"
							cancel-text="No"
							onConfirm={() => deleteOne(record.groupNo as string)}
						>
							<a href="#">删除</a>
						</a-popconfirm>
					</a-space>
				)
			}
		]

		const innerColumns: Rantion.TableColumns[] = [
			{
				title: '物流属性编号',
				dataIndex: 'attrNo',
				required: true,
				key: 'attrNo',
				align: 'center'
			},
			{
				title: '属性类型编号',
				dataIndex: 'attrtypeNo',
				required: true,
				key: 'attrtypeNo',
				align: 'center'
			},
			{
				title: '物流属性中文名',
				dataIndex: 'attrNameCn',
				required: true,
				key: 'attrNameCn',
				align: 'center'
			},
			{
				title: '物流属性英文名',
				dataIndex: 'attrNameEn',
				required: true,
				key: 'attrNameEn',
				align: 'center'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => logisticsGroupAttrStatusFilter(text),
				align: 'center'
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				align: 'center',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.LogisticsGroupResponseDto>) => (
					<a-space size="middle">
						<a-popconfirm
							title="确定删除吗?"
							ok-text="Yes"
							ok-type="danger"
							cancel-text="No"
							onConfirm={() => deleteGroupAttr(record.id as number)}
						>
							<a href="#">删除</a>
						</a-popconfirm>
					</a-space>
				)
			}
		]

		function tableHeader() {
			return (
				<a-button type="primary" onClick={addAttr}>
					添加
				</a-button>
			)
		}
		return () => (
			<>
				<div class="top-search-from">
					<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
						<a-row>
							<a-col span={6}>
								<a-form-item name="groupNo" label="物流分组编号">
									<a-input v-model={[pageSate.searchForm['groupNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="groupNameCn" label="物流分组中文名">
									<a-input v-model={[pageSate.searchForm['groupNameCn'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="groupNameEn" label="物流分组英文名">
									<a-input v-model={[pageSate.searchForm['groupNameEn'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="status" label="状态">
									<a-select v-model={[pageSate.searchForm['status'], 'value']}>
										<a-select-option value={0}>停用</a-select-option>
										<a-select-option value={1}>启用</a-select-option>
									</a-select>
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="createBy" label="创建人">
									<form-sysUser
										allowClear
										v-model={[pageSate.searchForm.createBy, 'value']}
										placeholder="请选择创建人"
									/>
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item class="right">
									<a-button type="primary" loading={loading.value} onClick={search}>
										查询
									</a-button>
									<a-button onClick={clear}>清除</a-button>
								</a-form-item>
							</a-col>
						</a-row>
					</a-form>
				</div>
				<r-table
					columns={columns}
					v-slots={{ header: tableHeader }}
					dataSource={data.value.data?.records}
					rowKey="id"
					loading={loading.value}
					refresh={refresh}
					expandedRowRender={expandedRowRender}
				/>
				{renderPagination()}
				<show-group ref={showGroupRef} onSearch={search} />
				<add-attr ref={addAttrRef} onSearch={search} />
			</>
		)
	}
})
