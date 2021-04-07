/*
 * @Description:产品类型列表
 * @Author: hyx
 * @Date: 2021-03-03 16:50
 */
/**
 * 产品类型列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/9 下午14:38
 */
import { clone } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import ShowDetail from './components/showTypeDetail'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.productType.page.Params
	dto?: defs.basics.ProductTypeResponseDto
	editVisible: boolean
	doType?: string
}
interface ShowDetailRef {
	init: (data?: defs.basics.ProductTypeRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'productTypeList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.productType.page.request,
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
		const showDetailRef = ref<ShowDetailRef>()
		async function enable(No: string, status: number) {
			const params = { enable: false, code: '' }
			params.code = No
			if (status == 0) {
				params.enable = true
			} else {
				params.enable = false
			}
			const { success } = await API.basics.productType.enable.request(params)
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
			const { success } = await API.basics.productType.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.ProductTypeResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			showDetailRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '产品类型编号',
				dataIndex: 'typeNo',
				required: true,
				key: 'typeNo',
				align: 'center'
			},
			{
				title: '产品类型名称',
				required: true,
				dataIndex: 'typeNameCn',
				key: 'typeNameCn',
				align: 'center'
			},
			{
				title: '产品类型简称',
				dataIndex: 'typeAbbreviation',
				key: 'typeAbbreviation',
				align: 'center'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status',
				align: 'center',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => productBandStatusFilter(text)
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
				align: 'center',
				key: 'createTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '修改人',
				dataIndex: 'updateBy',
				key: 'updateBy',
				align: 'center'
			},
			{
				title: '修改时间',
				dataIndex: 'updateTime',
				align: 'center',
				key: 'updateTime',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '操作',
				dataIndex: 'action',
				align: 'center',
				key: 'action',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductTypeResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.typeNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.typeNo as string)}>删除</a>
					</a-space>
				)
			}
		]
		function tableHeader() {
			return (
				<a-button type="primary" onClick={add}>
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
								<a-form-item name="typeNo" label="产品类型编号">
									<a-input v-model={[pageSate.searchForm['typeNo'], 'value']} placeholder="请输入产品类型编号" />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="typeNameCn" label="产品类型名称">
									<a-input v-model={[pageSate.searchForm['typeNameCn'], 'value']} placeholder="请输入产品类型编号" />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="status" label="状态">
									<a-select v-model={[pageSate.searchForm['status'], 'value']} placeholder="请输入状态">
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
				/>
				<showDetail ref={showDetailRef} onSearch={search} />
				{renderPagination()}
			</div>
		)
	}
})
