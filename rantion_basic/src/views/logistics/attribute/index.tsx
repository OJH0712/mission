/*
 * @Description:物流属性列表
 * @Author: hyx
 * @Date: 2021-03-23 9:50
 */
import { clone } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { logisticsAttrStatusFilter } from '@/dictionaries/filter'
import ShowAttr from './components/showDetails'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.logisticsAttr.page.Params
	dto?: defs.basics.LogisticsAttrResponseDto
	editVisible: boolean
	doType?: string
}
interface ShowAttrRef {
	init: (data?: defs.basics.LogisticsAttrRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'LogisticsAttribute',
	components: { ShowAttr },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.logisticsAttr.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		const pageSate = reactive<State>({
			searchForm: {},
			editVisible: false
		})
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
		const showAttrRef = ref<ShowAttrRef>()
		async function enable(No: string, status: number) {
			const params = { enable: false, code: '' }
			params.code = No
			if (status == 0) {
				params.enable = true
			} else {
				params.enable = false
			}
			const { success } = await API.basics.logisticsAttr.enable.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '状态修改成功'
				})
			}
			refresh()
		}
		async function deleteOne(No: string) {
			const params = { code: '' }
			params.code = No
			const { success } = await API.basics.logisticsAttr.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}

		function update(dto: defs.basics.LogisticsAttrResponseDto, type: string) {
			showAttrRef.value?.init(clone(dto), type)
		}
		function addAttr() {
			showAttrRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '物流属性编号',
				dataIndex: 'attrNo',
				required: true,
				key: 'attrNo'
			},
			{
				title: '物流属性类型编号',
				dataIndex: 'attrtypeNo',
				required: true,
				key: 'attrtypeNo'
			},
			{
				title: '物流属性中文名',
				required: true,
				dataIndex: 'attrNameCn',
				key: 'attrNameCn'
			},
			{
				title: '物流属性英文名',
				dataIndex: 'attrNameEn',
				key: 'attrNameEn'
			},
			{
				title: '物流属性值',
				dataIndex: 'attrValue',
				key: 'attrValue'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => logisticsAttrStatusFilter(text)
			},
			{
				title: '创建人',
				dataIndex: 'createBy',
				key: 'createBy'
			},
			{
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.LogisticsAttrResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.attrNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a-popconfirm
							title="确定删除吗?"
							ok-text="Yes"
							ok-type="danger"
							cancel-text="No"
							onConfirm={() => deleteOne(record.attrNo as string)}
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
			<div>
				<div class="top-search-from">
					<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
						<a-row>
							<a-col span={6}>
								<a-form-item name="attrNo" label="物流属性编号">
									<a-input v-model={[pageSate.searchForm['attrNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="attrtypeNo" label="物流属性类型">
									<form-logAttrType allowClear v-model={[pageSate.searchForm['attrtypeNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="attrNameCn" label="物流属性名称">
									<a-input v-model={[pageSate.searchForm['attrNameCn'], 'value']} />
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
								<a-form-item>
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
				/>
				{renderPagination()}
				<show-attr ref={showAttrRef} onSearch={search} />
			</div>
		)
	}
})
