/*
 * @Description:产品材质列表
 * @Author: hyx
 * @Date: 2021-03-03 16:20
 */
/**
 * 产品材质列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/19 上午11:38
 */
import { clone } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import ShowDetail from './components/showMaterialDetail'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.productMaterial.page.Params
	dto?: defs.basics.ProductMaterialResponseDto
	editVisible: boolean
	doType?: string
}
interface ShowDetailRef {
	init: (data?: defs.basics.ProductMaterialRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'productMaterialList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.productMaterial.page.request,
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
			const { success } = await API.basics.productMaterial.enable.request(params)
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
			const { success } = await API.basics.productMaterial.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.ProductMaterialResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			showDetailRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '产品材质编号',
				dataIndex: 'materialNo',
				required: true,
				key: 'materialNo',
				align: 'center'
			},
			{
				title: '产品材质名称',
				required: true,
				dataIndex: 'materialNameCn',
				key: 'materialNameCn',
				align: 'center'
			},
			{
				title: '产品材质值',
				dataIndex: 'materialValue',
				key: 'materialValue',
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
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductMaterialResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.materialNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.materialNo as string)}>删除</a>
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
								<a-form-item name="materialNo" label="产品材质编号">
									<a-input v-model={[pageSate.searchForm['materialNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="materialNameCn" label="产品材质名称">
									<a-input v-model={[pageSate.searchForm['materialNameCn'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="materialValue" label="产品材质值">
									<a-input v-model={[pageSate.searchForm['materialValue'], 'value']} />
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
				{/* <a-table
					dataSource={data.value.data?.records}
					loading={loading.value}
					rowKey="id"
					pagination={false}
					align="center"
				>
					<a-table-column title="产品材质编号" dataIndex="materialNo" align="center" />
					<a-table-column title="产品材质名称" dataIndex="materialNameCn" align="center" />
					<a-table-column title="产品材质值" dataIndex="materialValue" align="center" />
					<a-table-column
						title="状态"
						dataIndex="status"
						customRender={({ text }: Rantion.RableSlotScope<string>) => productBandStatusFilter(text)}
						align="center"
					/>
					<a-table-column title="创建人" dataIndex="createBy" align="center" />
					<a-table-column
						title="创建时间"
						dataIndex="createTime"
						customRender={({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)}
						align="center"
					/>
					<a-table-column title="修改人" dataIndex="updateBy" align="center" />
					<a-table-column
						title="修改时间"
						dataIndex="updateTime"
						customRender={({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)}
						align="center"
					/>
					<a-table-column title="操作" align="center">
						{({ record }: Rantion.RableSlotScope<defs.basics.ProductMaterialResponseDto>) => (
							<a-space size="middle">
								<a onClick={() => update(record, 'show')}>查看</a>
								<a onClick={() => enable(record.materialNo as string, record.status as number)}>
									{record.status === 0 ? '启用' : '停用'}
								</a>
								<a onClick={() => update(record, 'edit')}>修改</a>
								<a onClick={() => deleteOne(record.materialNo as string)}>删除</a>
							</a-space>
						)}
					</a-table-column>
				</a-table> */}
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
