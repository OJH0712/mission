import { createStore } from 'vuex'
import { AppState } from './modules/app'
import { PermissionState } from './modules/permission'
import { BasicDataState } from './modules/basicData'
import { TagsViewState } from './modules/tagsView'
export interface RootState {
	app: AppState
	permission: PermissionState
	basicData: BasicDataState
	tagsView: TagsViewState
}
export default createStore({})
