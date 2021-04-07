// import { Component, Ref, Vue } from 'vue-property-decorator'
// import addModal from './components/addWarehouse'
// /**
//  * 仓库管理
//  * Name: Antes
//  * Date:2020-11-17 13:40:23
//  * Email:tangzhlyd@gmail.com
//  */
// @Component({
// 	name: 'Warehouse',
// 	components: { addModal }
// })
// export default class User extends Vue {
// 	@Ref('addModal') readonly addModal!: HTMLFormElement
// 	async mounted() {
// 		fetch('/tableauApi')
// 			.then(function(response) {
// 				return response.json()
// 			})
// 			.then((res) => {
// 				console.log(res)
// 				this.initViz(res.data)
// 			})
// 	}
// 	initViz(ticket: string) {
// 		const tableauServer = 'http://183.3.129.52:8000'
// 		const view = '40/sheet0'
// 		const placeholderDiv = document.getElementById('tableauViz')
// 		const url = `${tableauServer}/trusted/${ticket}/#/views/${view}`
// 		if (placeholderDiv) {
// 			const options = {
// 				width: placeholderDiv.offsetWidth,
// 				height: placeholderDiv.offsetHeight,
// 				hideTabs: true,
// 				hideToolbar: true,
// 				onFirstInteractive: function() {
// 					// const workbook = viz.getWorkbook()
// 					// const activeSheet = workbook.getActiveSheet()
// 				}
// 			}
// 			const viz = new (window as any).tableau.Viz(placeholderDiv, url, options)
// 		}
// 	}
// 	public render() {
// 		return (
// 			<div id="tableauViz" class="ui-widget-content ui-corner-all" style="display: block;width:100%;height:100%;">
// 				<p style="margin-left: 12px">
// 					The view will load here after you click <b>Run this code</b>, below.
// 				</p>
// 			</div>
// 		)
// 	}
// }
