/*
 * @Description:产品品类列表
 * @Author: hyx
 * @Date: 2021-03-03 15:40
 */
/**
 * 产品品类列表
 * @user: 区君豪
 * @emial: mike@rantion.com
 * @data: 2021/3/9 下午15:38
 */
import { clone, isEmpty, isNil } from 'ramda'
import { timeArrayToTimeString } from '@/utils/date'
import { productBandStatusFilter } from '@/dictionaries/filter'
import ShowDetail from './components/showCategroyDetail'
import { notification } from 'ant-design-vue'
import { defineComponent, onMounted, reactive, ref, toRaw } from 'vue'
import { useRequest } from 'rantion'
import { isTrue } from 'rantion-tools'
interface State {
	searchForm: API.basics.productCategroy.page.Params
	treeData: Array<TreeData>
}
interface TreeData extends Partial<defs.basics.ProductCategroyTreeResponseDto> {
	displayable?: boolean
}
interface ShowDetailRef {
	init: (data?: defs.basics.ProductCategroyRequestParamsDto, type?: string) => void
}
export default defineComponent({
	name: 'productCategroyList',
	components: { ShowDetail },
	setup() {
		const { run, loading, data, getPagination, renderPagination, refresh, params } = useRequest(
			API.basics.productCategroy.page.request,
			{
				manual: true,
				pagination: true
			}
		)
		const pageSate = reactive<State>({
			searchForm: {},
			treeData: []
		})
		// 侧面列表栏
		async function getTreeInit() {
			const { data, success } = await API.basics.productCategroy.listTree.request({})
			if (success && !isNil(data)) {
				pageSate.treeData = data
			}
		}
		onMounted(() => {
			getTreeInit()
		})
		async function onSelect(selectedKeys: Array<number>, info: any) {
			const params = info.node.dataRef.categoryNo
			const resquest = {
				...getPagination(true),
				categoryNo: params
			}
			run(resquest)
		}

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
			const { success } = await API.basics.productCategroy.enable.request(params)
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
			const { success } = await API.basics.productCategroy.deleteOne.request(params)
			if (success) {
				notification.success({
					message: '提示',
					description: '删除成功'
				})
			}
			refresh()
		}
		function update(dto: defs.basics.ProductCategroyResponseDto, type: string) {
			showDetailRef.value?.init(clone(dto), type)
		}
		function add() {
			if (isTrue(params.value)) {
				const data = toRaw(params.value)[0]
				showDetailRef.value?.init({ parentCategoryNo: data.categoryNo })
			} else {
				showDetailRef.value?.init({ parentCategoryNo: 'root' })
			}
		}
		const columns: Rantion.TableColumns[] = [
			{
				title: '品类编码',
				dataIndex: 'categoryNo',
				required: true,
				key: 'categoryNo',
				align: 'center'
			},
			{
				title: '品类名称',
				dataIndex: 'categoryNameCn',
				required: true,
				key: 'categoryNameCn',
				align: 'center'
			},
			{
				title: '等级',
				dataIndex: 'levelNum',
				key: 'levelNum',
				align: 'center'
			},
			{
				title: '上级品类编码',
				dataIndex: 'parentCategoryNo',
				key: 'parentCategoryNo',
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
				customRender: ({ record }: Rantion.RableSlotScope<defs.basics.ProductCategroyResponseDto>) => (
					<a-space size="middle">
						<a onClick={() => update(record, 'show')}>查看</a>
						<a onClick={() => enable(record.categoryNo as string, record.status as number)}>
							{record.status === 0 ? '启用' : '停用'}
						</a>
						<a onClick={() => update(record, 'edit')}>修改</a>
						<a onClick={() => deleteOne(record.categoryNo as string)}>删除</a>
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
				<a-layout>
					<a-layout>
						<a-layout-sider style={{ backgroundColor: 'white' }}>
							<a-card title="品类列表" style={{ width: '100%', height: '100%' }}>
								<a-tree
									replaceFields={{ key: 'categoryNo', title: 'categoryNameCn', children: 'nextLevelList' }}
									default-expand-all
									tree-data={pageSate.treeData}
									onSelect={onSelect}
								/>
							</a-card>
						</a-layout-sider>
						<a-layout-content style={{ width: '100%', marginLeft: '20px' }}>
							<div class="top-search-from" style="width: 100%;">
								<a-form class="ant-advanced-search-form" labelCol={{ span: 8 }} wrapperCol={{ span: 14 }}>
									<a-row>
										<a-col span={6}>
											<a-form-item name="categoryNo" label="品类编码">
												<a-input v-model={[pageSate.searchForm['categoryNo'], 'value']} placeholder="请输入品类编码" />
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item name="categoryNameCn" label="品类名称">
												<a-input
													v-model={[pageSate.searchForm['categoryNameCn'], 'value']}
													placeholder="请输入品类名称"
												/>
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item name="parentCategoryNo" label="上级品类编码">
												<a-input
													v-model={[pageSate.searchForm['parentCategoryNo'], 'value']}
													placeholder="请输入上级品类编码"
												/>
											</a-form-item>
										</a-col>
										<a-col span={6}>
											<a-form-item name="levelNum" label="等级">
												<a-input v-model={[pageSate.searchForm['levelNum'], 'value']} placeholder="请输入等级" />
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
												<a-button type="primary" loading={loading.value} onClick={search} html-type="submit">
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
						</a-layout-content>
					</a-layout>
				</a-layout>
				<showDetail ref={showDetailRef} onSearch={search} />
			</div>
		)
	}
})
