import Vue from 'vue'
import Vuex from 'vuex'
import { AppState } from './modules/app'
import { PermissionState } from './modules/permission'
import { BasicDataState } from './modules/basicData'
import { TagsViewState } from './modules/tagsView'
Vue.use(Vuex)

export interface RootState {
	app: AppState
	permission: PermissionState
	basicData: BasicDataState
	tagsView: TagsViewState
}
export default new Vuex.Store<RootState>({})
