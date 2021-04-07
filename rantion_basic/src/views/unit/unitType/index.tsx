/**
 * 单位类型
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2020/3/3 下午15:08
 */
import { clone } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import ShowDetail from './components/addModal'
import { notification } from 'ant-design-vue'
import { defineComponent, reactive, ref } from 'vue'
import { useRequest } from 'rantion'
interface State {
	searchForm: API.basics.baseUnitType.page.Params
	dto?: defs.basics.BaseUnitTypeResponseDto
	editVisible: boolean
	doType?: string
}
interface ShowDetailRef {
	init: (data?: defs.basics.BaseUnitTypeRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'baseUnitTypeList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh } = useRequest(
			API.basics.baseUnitType.page.request,
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
			const { success } = await API.basics.baseUnitType.enable.request(params)
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
			const { success } = await API.basics.baseUnitType.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.BaseUnitTypeResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			showDetailRef.value?.init()
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '单位类型编号',
				dataIndex: 'unitTypeNo',
				required: true,
				key: 'unitTypeNo',
				align: 'center'
			},
			{
				title: '单位类型名称（CN）',
				dataIndex: 'typeNameCn',
				required: true,
				key: 'typeNameCn',
				align: 'center'
			},
			{
				title: '单位类型名称（EN）',
				dataIndex: 'typeNameEn',
				key: 'typeNameEn',
				align: 'center'
			},
			{
				title: '单位类型简称',
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
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.BaseUnitTypeResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.unitTypeNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.unitTypeNo as string)}>删除</a>
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
								<a-form-item name="unitTypeNo" label="单位类型编号">
									<a-input v-model={[pageSate.searchForm['unitTypeNo'], 'value']} placeholder="请输入单位类型编号" />
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="typeAbbreviation" label="单位类型简称">
									<a-input
										v-model={[pageSate.searchForm['typeAbbreviation'], 'value']}
										placeholder="请输入单位类型简称"
									/>
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="typeNameCn" label="单位类型名称(CN)">
									<a-input
										v-model={[pageSate.searchForm['typeNameCn'], 'value']}
										placeholder="请输入单位类型名称（CN）"
									/>
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="typeNameEn" label="单位类型名称(EN)">
									<a-input
										v-model={[pageSate.searchForm['typeNameEn'], 'value']}
										placeholder="请输入单位类型名称（EN）"
									/>
								</a-form-item>
							</a-col>
							<a-col span={6}>
								<a-form-item name="status" label="状态">
									<a-select v-model={[pageSate.searchForm['status'], 'value']} placeholder="请选择状态">
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
					<a-table-column title="单位类型编号" dataIndex="unitTypeNo" align="center" />
					<a-table-column title="单位类型名称（CN）" dataIndex="typeNameCn" align="center" />
					<a-table-column title="单位类型名称（EN）" dataIndex="typeNameEn" align="center" />
					<a-table-column title="单位类型简称" dataIndex="typeAbbreviation" align="center" />
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
						{({ record }: Rantion.RableSlotScope<defs.basics.BaseUnitTypeResponseDto>) => (
							<a-space size="middle">
								<a onClick={() => update(record, 'show')}>查看</a>
								<a onClick={() => enable(record.unitTypeNo as string, record.status as number)}>
									{record.status === 0 ? '启用' : '停用'}
								</a>
								<a onClick={() => update(record, 'edit')}>修改</a>
								<a onClick={() => deleteOne(record.unitTypeNo as string)}>删除</a>
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
