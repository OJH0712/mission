import { Vue } from 'vue-property-decorator'
export enum PageType {
	new
}
export abstract class TablePage extends Vue {
	public total = 0 // 总数
	public pageSize = 10 // 每页数量
	public current = 1 // 当前页
	public expand = false
	public loading = false
	public pagination() {
		return {
			pageNumber: this.current,
			pageSize: this.pageSize
		}
	}
	public toggle() {
		this.expand = !this.expand
	}
	public abstract render(): JSX.Element
	public abstract search(type?: PageType): void
	public abstract clear(): void
	protected handleSizeChange(current: number, size: number) {
		this.current = 1
		this.pageSize = size
		this.search()
	}
	protected handleCurrentChange(page: number, pageSize: number) {
		this.current = page
		this.pageSize = pageSize
		this.search(PageType.new)
	}
	public paginationJsx() {
		return (
			<div class="fenye">
				<a-pagination
					v-model={this.current}
					total={this.total}
					showTotal={(total: number) => `共 ${total} 条`}
					onShowSizeChange={this.handleSizeChange.bind(this)}
					onChange={this.handleCurrentChange.bind(this)}
					show-size-changer
					defaultPageSize={this.pageSize}
				/>
			</div>
		)
	}
}
export default TablePage
