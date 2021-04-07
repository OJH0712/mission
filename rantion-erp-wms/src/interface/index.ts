/*
 * @Author: your name
 * @Date: 2021-02-25 17:58:32
 * @LastEditTime: 2021-03-03 17:36:23
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \rantion-admind:\project\rantion-erp-wms\src\interface\index.ts
 */
export interface AjaxData<T> {
	data: T
	msg: string
	code: string | number
	success: boolean
}
