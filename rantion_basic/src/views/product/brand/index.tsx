/*
 * @Description:产品品牌列表
 * @Author: hyx
 * @Date: 2021-03-02 18:00
 */
/**
 * 产品品牌列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/11 下午2:38
 */
import { clone, isEmpty } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import EditBrand from './components/editBrand'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.productBrand.page.Params
	dto?: defs.basics.ProductBrandResponseDto
	editVisible: boolean
	doType?: string
}
interface EditBrandRef {
	init: (data?: defs.basics.ProductBrandRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'ProductBrandList',
	components: { EditBrand },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.productBrand.page.request,
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
		const editBrandRef = ref<EditBrandRef>()
		async function enable(No: string, status: number) {
			const params = { enable: false, code: '' }
			params.code = No
			if (status == 0) {
				params.enable = true
			} else {
				params.enable = false
			}
			const { success } = await API.basics.productBrand.enable.request(params)
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
			const { success } = await API.basics.productBrand.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.ProductBrandResponseDto, type: string) {
			editBrandRef.value?.init(clone(dto), type)
		}
		function addBrand() {
			editBrandRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '品牌编号',
				dataIndex: 'brandNo',
				required: true,
				key: 'brandNo',
				align: 'center'
			},
			{
				title: '中/英文首字母',
				key: 'initialsCn',
				required: true,
				align: 'center',
				customRender: (item: Rantion.RableSlotScope<defs.basics.ProductBrandResponseDto>) =>
					isEmpty(item.text.initialsCn) ? '' : `${item.text.initialsCn}/${item.text.initialsEn}`
			},
			{
				title: '品牌名称(CN)',
				required: true,
				dataIndex: 'brandNameCn',
				key: 'brandNameCn',
				align: 'center'
			},
			{
				title: '品牌名称(EN)',
				dataIndex: 'brandNameEn',
				key: 'brandNameEn',
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
				key: 'createTime',
				align: 'center',
				customRender: ({ text }: Rantion.RableSlotScope<string>) => timeArrayToTimeString(text)
			},
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				align: 'center',
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductBrandResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.brandNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.brandNo as string)}>删除</a>
					</a-space>
				)
			}
		]
		function tableHeader() {
			return (
				<a-button type="primary" onClick={addBrand}>
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
								<a-form-item name="brandNo" label="品牌编号">
									<a-input v-model={[pageSate.searchForm['brandNo'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="brandNameCn" label="品牌名称">
									<a-input v-model={[pageSate.searchForm['brandNameCn'], 'value']} />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="brandAbbreviation" label="品牌简称">
									<a-input v-model={[pageSate.searchForm['brandAbbreviation'], 'value']} />
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
				/>
				{renderPagination()}
				<edit-brand ref={editBrandRef} onSearch={search} />
			</div>
		)
	}
})
