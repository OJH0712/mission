import { Component } from 'vue-property-decorator'
import { TablePage } from '@/interface/TablePage'
import loggo from '@/assets/logo.png'
@Component({
	name: 'home'
})
export default class Home extends TablePage {
	public clear(): void {
		throw new Error('Method not implemented.')
	}
	public render() {
		return <img src={loggo} />
	}
	public search() {
		console.log('首页')
	}
}
