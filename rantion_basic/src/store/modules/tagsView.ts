import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import store from '@/store'
import { isString } from 'rantion-tools'
import { equals, includes, indexOf, isNil, slice, filter, findIndex } from 'ramda'

export interface TagView extends Partial<RouteLocationNormalizedLoaded> {
	title?: string
}
export interface TagsViewState {
	tagViewList: Array<TagView> // 页头 tags
	cachedViewsList: Array<string> // 缓存的视图列表
}

@Module({ namespaced: true, store, name: 'tagsView', dynamic: true })
export class TagsView extends VuexModule implements TagsViewState {
	public tagViewList: Array<TagView> = []
	public cachedViewsList: Array<string> = []

	/**
	 * 添加 緩存tags
	 * @param view
	 * @constructor
	 */
	@Mutation
	private ADD_CACHED(view: TagView) {
		if (isNil(view.name) || isNil(view.meta)) return
		if (view.meta.noCache) return
		if (includes(view.name, this.cachedViewsList)) return
		this.cachedViewsList.push(view.name as string)
	}

	/**
	 * 添加tags
	 * @param view
	 * @constructor
	 */
	@Mutation
	private ADD_VIEW(view: TagView) {
		if (this.tagViewList.some((item) => equals(item.path, view.path))) return
		this.tagViewList.push(
			Object.assign({}, view, {
				title: view.meta?.title || 'no-name'
			})
		)
	}

	/**
	 * 删除缓存tags
	 * @param view
	 * @constructor
	 */
	@Mutation
	private DEL_CACHED_VIEW(view: TagView | string) {
		const key = isString(view) ? view : view.name
		if (isNil(key)) return
		const index = this.cachedViewsList.indexOf(key as string)
		index > -1 && this.cachedViewsList.splice(index, 1)
	}

	/**
	 * 删除tag
	 * @param view
	 * @constructor
	 */
	@Mutation
	private DEL_VIEW(view: TagView | string) {
		const key = isString(view) ? view : view.path
		this.tagViewList = filter((item) => !equals(item.path, key), this.tagViewList)
	}
	@Mutation
	private DEL_OTHERS_VIEW(view: TagView | string) {
		const key = isString(view) ? view : view.path
		this.tagViewList = filter((item) => equals(item.path, key), this.tagViewList)
	}

	/**
	 * 删除其他
	 * @param view
	 * @constructor
	 */
	@Mutation
	private DEL_OTHERS_CACHED_VIEW(view: TagView | string) {
		const key = isString(view) ? view : view.name
		if (isNil(key)) return
		const index = indexOf(key, this.cachedViewsList)
		this.cachedViewsList = equals(-1, index) ? [] : slice(index, index + 1, this.cachedViewsList)
	}

	@Mutation
	private CLEAR_VIEW() {
		this.tagViewList = []
	}
	@Mutation
	private CLEAR_CACHED_VIEW() {
		this.cachedViewsList = []
	}
	@Mutation
	private UPDATE_VIEW(view: TagView) {
		const index = findIndex((item) => equals(view.path, item.path), this.tagViewList)
		if (equals(index, -1)) {
			return
		}
		const thisView = this.tagViewList[index]
		this.tagViewList.splice(index, 1, Object.assign(thisView, view))
	}

	/**
	 * 删除缓存的视图
	 */
	@Action
	public delAllCachedViews() {
		this.CLEAR_CACHED_VIEW()
	}

	/**
	 * 删除所有视图
	 */
	@Action
	public delAllViews() {
		this.CLEAR_CACHED_VIEW()
		this.CLEAR_VIEW()
	}
	/**
	 * 更新 TagView  传入的TagView 会Object.assign 合并老旧的
	 * @param view
	 */
	@Action
	public updateView(view: TagView) {
		this.UPDATE_VIEW(view)
	}

	@Action
	public addTagView(view: TagView) {
		this.ADD_VIEW(view)
		this.ADD_CACHED(view)
	}

	@Action
	public addView(view: TagView) {
		this.ADD_VIEW(view)
		this.ADD_CACHED(view)
	}

	@Action
	public delView(view: TagView | string) {
		this.DEL_VIEW(view)
		this.DEL_CACHED_VIEW(view)
	}

	/**
	 * 删除缓存视图
	 * @param view
	 */
	@Action
	public delCachedView(view: TagView | string) {
		this.DEL_CACHED_VIEW(view)
	}

	/**
	 * 删除其他
	 * @param view
	 */
	@Action
	public delOthersViews(view: TagView | string) {
		this.DEL_OTHERS_VIEW(view)
		this.DEL_OTHERS_CACHED_VIEW(view)
	}
}

export const TagsViewModule = getModule(TagsView)
