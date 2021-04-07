import { Interface, CodeGenerator } from 'pont-engine'
const str = ['query', 'path']
export default class MyGenerator extends CodeGenerator {
	// 生成API.d.ts
	getInterfaceContentInDeclaration(inter: Interface) {
		const paramsCode = inter.getParamsCode()
		const bodyParamsCode = inter.getBodyParamsCode()
		const pathKey: string[] = []
		inter.path.replace(/\{((?!\{).)*\}/g, (match) => {
			pathKey.push(match.substring(1, match.length - 1))
			return '$' + match
		})
		let requestParams = ''
		if (pathKey.length > 0) {
			// const _requestParams = bodyParamsCode ? `body: ${bodyParamsCode}, ` : ''
			const parameters = inter.parameters.filter((item) => {
				return pathKey.some((res) => res === item.name)
			})

			requestParams = parameters
				.map((item) => {
					return `${item.name}: ${item.dataType.typeName}`
				})
				.join(' ,')
		}
		if (bodyParamsCode) {
			if (requestParams) {
				requestParams += ' ,'
			}
			requestParams += `body: ${bodyParamsCode}`
		}

		const hasGetParams = inter.parameters
			.filter((item) => {
				return !pathKey.some((res) => res === item.name)
			})
			.some((item) => str.includes(item.in))

		if (hasGetParams) {
			if (requestParams) {
				requestParams += ' ,'
			}
			requestParams += 'params: Params'
		}
		if (requestParams) {
			requestParams += ','
		}
		requestParams += ' options? :any'
		// 是否导出 paramsCode
		const exportParamsCode = hasGetParams ? 'export ' + paramsCode : ''
		return `
      ${exportParamsCode}
      export type Response = ${inter.responseType}
      export function request(${requestParams}): Promise<Response>;
    `
	}
	// 生成请求api
	getInterfaceContent(inter: Interface) {
		const method = inter.method.toUpperCase()
		const bodyParamsCode = inter.getBodyParamsCode() // 获取 bodyParamsCode
		const pathKey: string[] = []
		const path = inter.path.replace(/\{((?!\{).)*\}/g, (match) => {
			pathKey.push(match.substring(1, match.length - 1))
			return '$' + match
		})
		let requestParams = ''
		if (pathKey.length > 0) {
			// const _requestParams = bodyParamsCode ? `body: ${bodyParamsCode}, ` : ''
			const parameters = inter.parameters.filter((item) => {
				return pathKey.some((res) => res === item.name)
			})
			inter.parameters = inter.parameters.filter((item) => {
				return !pathKey.some((res) => res === item.name)
			})

			requestParams = parameters
				.map((item) => {
					return `${item.name}: ${item.dataType.typeName}`
				})
				.join(' ,')
		}
		if (bodyParamsCode) {
			if (requestParams) {
				requestParams += ' ,'
			}
			requestParams += `body: ${bodyParamsCode}`
		}
		// 判断是否有params参数
		const hasGetParams = inter.parameters.some((item) => str.includes(item.in))
		// 没有
		if (hasGetParams) {
			if (requestParams) {
				requestParams += ' ,'
			}
			let controllerName = ''
			const modIndex = this.dataSource.mods.findIndex(
				(item) => item.interfaces.filter(({ path }) => path === inter.path).length > 0
			)
			if (modIndex > -1) {
				controllerName = this.dataSource.mods[modIndex].name
			}
			requestParams += `params: API.${this.dataSource.name}.${controllerName}.${inter.name}.Params`
		}

		if (requestParams) {
			requestParams += ','
		}
		requestParams += ' options? :any'
		return `
    /**
     * @desc ${inter.description}
     */
    const URL = '/rantion-${this.dataSource.name}'
    import { http, updateResponse } from 'rantion-tools'
    export function request(${requestParams}) {
      return updateResponse(
        http (URL+\`${path}\`,{
        method: '${method}',
        ${hasGetParams ? 'params,' : ''}
        ${bodyParamsCode ? 'data:body,' : ''}
        ...options
      }))
    }
   `
	}
}
