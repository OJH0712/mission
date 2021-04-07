export interface AjaxData<T = any> {
	data: T
	msg: string
	code: string
	success: boolean
}
